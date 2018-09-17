function htmlEdit(self, excute) {      
    document.getElementById(self).contentWindow.document.body.focus();    
    document.getElementById(self).contentWindow.document.execCommand(excute); 
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
}

function iframeStyleReport() {    
    var boldState = document.queryCommandValue("bold");
    var italicStatue = document.queryCommandValue("italic");
    var strikethroughStatue = document.queryCommandValue("strikethrough");
    var underlineStatue = document.queryCommandValue("underline");
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



