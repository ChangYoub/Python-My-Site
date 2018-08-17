$(function(){
	var flag = false;	
		$("#duplcheck").on("click",function() {
		$.ajax({
			url: "/duplcheck" ,
            type: 'POST',            
    	    data: {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val(),
        		'username': $("#id_username").val()
    	    },
            dataType: 'json',						
			success: function (data) { 		
				if($("#id_username").val() != "") {
					if(data.is_taken) {
						alert("이미 존재하는 ID입니다.");
					}
					else{
						alert($("#id_username").val() + " 사용하실 수 있는 ID입니다.");
						flag = true;
					}									
				}			
			},
			error: function (request, status, error) {
				alert("code: " + request.status + "\n" + "error:" + error);
			}			
		});
		return false;
     });
    
	$("#id_username").on("focusout", function() {
		if(flag){
			flag=false;
		}
	});

	$('#signup').on('submit', function(e) {
		if(!flag){ 
			e.preventDefault();
			alert("ID 중복확인 해주세요.");
		}
	});
});

function createZipcodeFrame(self) {
	if(!document.getElementById('zipcodeLayer')) {
		/* 동적으로 태그 생성 */
		$div = $('<div id="zipcodeLayer" class="zipcodeLayer"> \
				  <iframe id="zipcodeIframe" src="/static/templates/zipcode.html" class="zipcodeLayer" frameborder="0" /></iframe></div>');
		$('#'+self.id).append($div);
	}
}

function enterkey(evt) {		
	var keyCode = evt.which?evt.which:event.keyCode;
	if (keyCode == 13) {
		$("#zipCodeSearchBtn").trigger("click");	
	}	
}

$(function() {
	$('#zipCodeSearchBtn').click(function() {   
		var searchVal = $('#zipCodeKey').val();	
		if(searchVal.length >= 2) {
			searchVal = encodeURI(searchVal);
			$.ajax({
				type:"GET",
				url:"/search_address",
				data: {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val(),
					'zipCode': $("#zipCodeKey").val(),
					'currentPage': 1,
				},
				dataType: 'json',
				success: function(data) {						
					console.log(data);
					$('#addressList').scrollTop(0);	
					$('#zbook_ol li').remove();
					hideObject('left_arrow_btn', true);
					hideObject('right_arrow_btn', true);
					if(!data.hasOwnProperty('error')) {			
						zclickSido(data);
						createTable(data);	
						if(data.post.pageinfo.totalPage.$ > 10)	{			
							for(var i = 1; i <= data.post.pageinfo.totalPage.$; i++) {														
								if(i <= 10) {
									$('#zbook_ol').append('<li><a onclick="indexClickPage('+ i + ',\'' + $('#zipCodeKey').val() + '\')"><span class="painate_number">'+ i +'</span></a></li>');				
									if(i == data.post.pageinfo.currentPage.$) {
										changeListColor(1);	
									}
								}
								else {	
									hideObject('right_arrow_btn', false);
									setClickFunction('right_arrow_btn', 11, $('#zipCodeKey').val());														
									setClickFunction('left_arrow_btn', 10, $('#zipCodeKey').val());																						
									break;
								}							
							}	
						}
					}
					else {	
						$('#result_table > tbody').empty();
						$('#zbook_ol li').remove();
						$('.empty').css('display', 'block');
						$('.empty').text('정확한 검색을 위해 검색어를 다시 입력해주세요.');
					}					
				}
			})
		}
		else {
			alert("정확한 우편번호 검색을 위해 2글자 이상 입력해주세요.");
		}
		return false;
	});
});

function zclickSido(data) {
	var postcd = 0;
	for(var i = 0; i <= data.post.pageinfo.totalPage.$; i++) {
		postcd = data.post.itemlist.item[i].postcd.$;
		postcd = Math.floor(postcd/1000);
		switch(postcd) {
			case 01:case 02:case 03:case 04:case 05:case 06:case 07:case 08:case 09:
				alert("서울");
				break;
			case 50: 
			case 51: 
			case 52: 
			case 53: 
				alert("경남");
				break;
		}
	}	
}

function zclickPage(index, codeKey) {
	$.ajax({
		type:"GET",
		url:"/search_address",
		data: {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val(),
			   'zipCode': codeKey,
			   'currentPage': index,
		},
		dataType: 'json',
		success: function(data) {	
			if(!data.hasOwnProperty('error')) {
				if(((index-1) % 10) == 0) {
					$('#zbook_ol li').remove();					
					for(var i = 1; i <= data.post.pageinfo.totalPage.$; i++) {			
						if(index+10 > i) {
							if(i >= index) {
								$('#zbook_ol').append('<li><a onclick="indexClickPage('+ i + ',\'' + codeKey + '\')"><span class="painate_number">'+ i +'</span></a></li>');																	
							}
						}		
						else {
							if(index == 1) {
								hideObject('left_arrow_btn', true);															
							}
							else {
								hideObject('left_arrow_btn', false);	
							}			
							setClickFunction('left_arrow_btn', index-1, codeKey);									
							hideObject('right_arrow_btn', false);
							setClickFunction('right_arrow_btn', index+10, codeKey);																							
							break;
						}		
						
						if(i == data.post.pageinfo.totalPage.$) {
							hideObject('right_arrow_btn', true);	
							setClickFunction('left_arrow_btn', index-1, codeKey);							
						}
					}					
				}
				else {
					$('#zbook_ol li').remove();					
					for(var i = 1; i <= data.post.pageinfo.totalPage.$; i++) {		
						if(index-9 <= i && index >= i) {								
							if(i <= index) {
								$('#zbook_ol').append('<li><a onclick="indexClickPage('+ i + ',\'' + codeKey + '\')"><span class="painate_number">'+ i +'</span></a></li>');																						
							}							
							if(index == i) {
								if(index == 10) {									
									hideObject('left_arrow_btn', true);
								}					
								setClickFunction('left_arrow_btn', index-10, codeKey);										
								hideObject('right_arrow_btn', false);
								setClickFunction('right_arrow_btn', index+1, codeKey);
								break;								
							}
						}											
					}
				}				
				createTable(data);								
				changeListColor(index);											
			}			
		}
	});	
}

function setClickFunction(id, index, zipCode) {
	document.getElementById(id).onclick = function() { 
		zclickPage(index, zipCode);
	};
}

function indexClickPage(index, codeKey) {
	$.ajax({
		type:"GET",
		url:"/search_address",
		data: {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val(),
			   'zipCode': codeKey,
			   'currentPage': index,
		},
		dataType: 'json',
		success: function(data) {
			createTable(data);								
			changeListColor(index);	
		}
	});
}

function createTable(data) {
	$('#addressList').scrollTop(0);	
	$('#result_table > tbody').empty();
	$('.empty').css('display', 'none');
	for(var i = 0; i < Object.keys(data.post.itemlist.item).length; i++) {		
		if(data.post.pageinfo.totalCount.$ == 1) {
			$('#result_table > tbody:last').append('<tr><td class="result_table"><p><span><span class="icoStreet">도로명</span>' + 
			data.post.itemlist.item.address.$ + '</p><span class="icoNumber">지번</span>' +
			data.post.itemlist.item.addrjibun.$ + '</td><td class="right">' + data.post.itemlist.item.postcd.$ + '</td></tr>');
			break;
		}
		else {
			$('#result_table > tbody:last').append('<tr><td class="result_table"><p><span><span class="icoStreet">도로명</span>' + 
			data.post.itemlist.item[i].address.$   + '</p><span class="icoNumber">지번</span>' +
			data.post.itemlist.item[i].addrjibun.$ + '</td><td class="right">' + data.post.itemlist.item[i].postcd.$ + '</td></tr>');
		}		
	}	
}

function changeListColor(index) {
	if(index%10 == 0) {
		index = 10;
	}
	else {
		index = index%10;
	}

	var lis = document.getElementsByTagName("li");
	
	for(var i = 0; i < lis.length; i++) {
		var li = lis.item(i);
		if(i+1 === index) {
			li.style.color = "#25BAFF";
		}						
		else {
			li.style.color = "black";
		}
	}		
}

function hideObject(id, state) {
	if(state == true) {
		document.getElementById(id).style.display = "none";																			
	}
	else {
		document.getElementById(id).style.display = "inline-block";		
	}
}
