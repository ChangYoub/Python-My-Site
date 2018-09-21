function htmlEdit(self, excute, value) {      
    document.getElementById(self).contentWindow.document.body.focus();   
    if(value == null) {
        document.getElementById(self).contentWindow.document.execCommand(excute); 
    }
    else {
        document.getElementById(self).contentWindow.document.execCommand(excute, null, value); 
    }
}

function radioBtnClick(self, excute) {
    htmlEdit(self, excute);
    styleReport();
}

function styleReport() {    
    var boldState = document.getElementById('contents').contentWindow.document.queryCommandValue("bold");
    var italicStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("italic");
    var strikethroughStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("strikethrough");
    var underlineStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("underline");
    var justifyleftStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("justifyleft");
    var justifycenterStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("justifycenter");
    var justifyrightStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("justifyright");
    var justifyFullStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("justifyFull");

    if(boldState == "true") {
        document.getElementById('boldBtn').checked = true; 
    }
    else if(boldState == "false"){
        document.getElementById('boldBtn').checked = false; 
    }

    if(italicStatue == "true") {
        document.getElementById('italicBtn').checked = true; 
    }
    else if(italicStatue == "false") {
        document.getElementById('italicBtn').checked = false; 
    }

    if(strikethroughStatue == "true") {
        document.getElementById('crossOutBtn').checked = true; 
    }
    else if(strikethroughStatue == "false"){
        document.getElementById('crossOutBtn').checked = false; 
    }

    if(underlineStatue == "true") {
        document.getElementById('underlineBtn').checked = true; 
    }
    else if(underlineStatue == "false") {
        document.getElementById('underlineBtn').checked = false; 
    }

    if(justifyleftStatue == "true") {
        document.getElementById('leftAlign').checked = true; 
    }
    else if(justifycenterStatue == "true") {
        document.getElementById('centerAlign').checked = true; 
    }
    else if(justifyrightStatue == "true") {
        document.getElementById('rightAlign').checked = true; 
    }
    else if(justifyFullStatue == "true") {
        document.getElementById('fullAlign').checked = true; 
    }
}

function iframeStyleReport() {    
    var boldState = document.queryCommandValue("bold");
    var italicStatue = document.queryCommandValue("italic");
    var strikethroughStatue = document.queryCommandValue("strikethrough");
    var underlineStatue = document.queryCommandValue("underline");
    var justifyleftStatue = document.queryCommandValue("justifyleft");
    var justifycenterStatue =document.queryCommandValue("justifycenter");
    var justifyrightStatue = document.queryCommandValue("justifyright");
    var justifyFullStatue = document.queryCommandValue("justifyFull");
    // console.log("boldState :" + boldState + ", italicStatue:" + italicStatue +
    //             ", strikethroughStatue :" + strikethroughStatue + 
    //             ", underlineStatue :" + underlineStatue);

    if(boldState == "true") {
        parent.document.getElementById('boldBtn').checked = true; 
    }
    else if(boldState == "false"){
        parent.document.getElementById('boldBtn').checked = false; 
    }

    if(italicStatue == "true") {
        parent.document.getElementById('italicBtn').checked = true; 
    }
    else if(italicStatue == "false") {
        parent.document.getElementById('italicBtn').checked = false; 
    }

    if(strikethroughStatue == "true") {
        parent.document.getElementById('crossOutBtn').checked = true; 
    }
    else if(strikethroughStatue == "false"){
        parent.document.getElementById('crossOutBtn').checked = false; 
    }

    if(underlineStatue == "true") {
        parent.document.getElementById('underlineBtn').checked = true; 
    }
    else if(underlineStatue == "false") {
        parent.document.getElementById('underlineBtn').checked = false; 
    }

    if(justifyleftStatue == "true") {
        parent.document.getElementById('leftAlign').checked = true; 
    }
    else if(justifycenterStatue == "true") {
        parent.document.getElementById('centerAlign').checked = true; 
    }
    else if(justifyrightStatue == "true") {
        parent.document.getElementById('rightAlign').checked = true; 
    }
    else if(justifyFullStatue == "true") {
        parent.document.getElementById('fullAlign').checked = true; 
    }
}

function eventFillter(event) {    
    if(event.type == "keyup") {  
        // alert(event.keyCode);
        if(event.keyCode == 37 || event.keyCode == 39 ||
           event.keyCode == 40 || event.keyCode == 38 || 
           event.keyCode == 36 || event.keyCode == 35 ||
           event.keyCode == 13 || event.keyCode == 46 ||
           event.keyCode == 8) {    // left key
            iframeStyleReport();
        }              
    }
    else if(event.type == "keydown") {        
        if(event.ctrlKey == true) {
            // alert(event.keyCode);
            switch(event.keyCode) {               
                case 66:    /* B */
                    parent.document.getElementById('boldBtn').checked = !(parent.document.getElementById('boldBtn').checked);
                    break;

                case 73:    /* I */
                    parent.document.getElementById('italicBtn').checked = !(parent.document.getElementById('italicBtn').checked);
                    break;

                case 85:    /* U */
                    parent.document.getElementById('underlineBtn').checked = !(parent.document.getElementById('underlineBtn').checked);
                    break;
            }
        }
    }
    else if(event.type == "click") {
        iframeStyleReport();
    }    
}

function focusEvent() {
    parent.document.getElementById('colorPickerArea').style.display = 'none';   
    var colorHex = rgb2hex(parent.document.getElementById('colorBox').style.backgroundColor);
    parent.document.getElementById('colorHexText').value = colorHex;
}

function showColorPicker() {
    var divObj = document.getElementById('colorPickerArea');                
    if(divObj.style.display == 'none' || divObj.style.display == "") {
        divObj.style.display = 'block';                   
    }
    else {
        divObj.style.display = 'none';                    
    }      
} 

function colorPickerBtnClick() {        
    var colorValue = document.getElementById('colorHexText').value;  
    document.getElementById('colorHexText').value = colorValue.toUpperCase();
    document.getElementById('colorBox').style.backgroundColor = colorValue;  
    showColorPicker();   
    htmlEdit('contents', 'foreColor', colorValue);
}

function colorPickerLinkClick(self) {    
    document.getElementById('colorHexText').value = rgb2hex(self.style.backgroundColor); 
    colorPickerBtnClick();
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);    
    return (rgb && rgb.length === 4) ? "#" +
           ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2).toUpperCase() +
           ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2).toUpperCase() +
           ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2).toUpperCase() : '';
}

