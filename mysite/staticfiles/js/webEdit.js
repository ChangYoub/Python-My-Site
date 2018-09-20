function htmlEdit(btn, self, excute) {     
    document.getElementById(self).contentWindow.document.body.focus();   
    
    if(btn.checked == true && 
       document.getElementById(self).contentWindow.document.queryCommandState(excute) == false) {
        document.getElementById(self).contentWindow.document.execCommand(excute);    
    }
    else if(btn.checked == false &&
            document.getElementById(self).contentWindow.document.queryCommandState(excute) == true) {
        document.getElementById(self).contentWindow.document.execCommand(excute);           
    }
}

function htmlRadioEdit(self, excute) {    
    document.getElementById(self).contentWindow.document.body.focus();    
    document.getElementById(self).contentWindow.document.execCommand(excute);    
}   

function reportColourAndFontSize() {
    var colour = document.getElementById('contents').contentWindow.document.queryCommandValue("ForeColor");
    var fontSize = document.getElementById('contents').contentWindow.document.queryCommandValue("bold");
    alert("Colour: " + colour + ", font size: " + fontSize);
}

$(('#contents').contentWindow.document).ready(function() { 
    $(('#contents').contentWindow.document).on('keypress', function(e) {
        alert('w');
    });
})


$(document.getElementById('contents').contentWindow.document).ready(function() { 
    $(document.getElementById('contents').contentWindow.document).keypress(function(e) {
        alert('key down');
    });
})

$(document.getElementById('contents').contentWindow.document).ready(function() { 
    $(document.getElementById('contents').contentWindow.document).keydown(function(){ 
        alert('Key down!'); 
    });
})