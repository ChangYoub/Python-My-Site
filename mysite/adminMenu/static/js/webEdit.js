function htmlEdit(self, excute, value)  {   
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
    var fontNameStatue = document.getElementById('contents').contentWindow.document.queryCommandValue("fontName");

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

    if(fontNameStatue == '"Malgun Gothic"') {
        document.getElementById('fontBtn').value = "Font";
    }
    else {
        document.getElementById('fontBtn').value = fontNameStatue;
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
    var fontNameStatue = document.queryCommandValue("fontName");
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

    if(fontNameStatue == '"Malgun Gothic"') {
        parent.document.getElementById('fontBtn').value = "Font";
    }
    else {
        parent.document.getElementById('fontBtn').value = fontNameStatue;
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
    parent.document.getElementById('bgColorPickerArea').style.display = 'none'; 
    parent.document.getElementById('fontList').style.display = 'none'; 
    var colorHex = rgb2hex(parent.document.getElementById('colorBox').style.backgroundColor);
    parent.document.getElementById('colorHexText').value = colorHex;

    var bgColorHex = rgb2hex(parent.document.getElementById('bgColorBox').style.backgroundColor);
    parent.document.getElementById('bgColorHexText').value = bgColorHex;
}

function showDiv(objId, objId2, objId3) {   
    var divObj = document.getElementById(objId);     
    if(divObj.style.display == 'none' || divObj.style.display == "") {
        divObj.style.display = 'block';                   
    }
    else {
        divObj.style.display = 'none';                    
    }      

    var divObj2 = document.getElementById(objId2);  

    if(divObj2.style.display != 'none' || divObj2.style.display != "") {
        divObj2.style.display = 'none';          
    }

    var divObj3 = document.getElementById(objId3);  
    if(divObj3.style.display != 'none' || divObj3.style.display != "") {
        divObj3.style.display = 'none';          
    }
} 

function colorPickerArrowBtnClick() {        
    var colorValue = document.getElementById('colorHexText').value;      
    htmlEdit('contents', 'foreColor', colorValue);
}

function colorPickerBtnClick() {        
    var colorValue = document.getElementById('colorHexText').value;  
    document.getElementById('colorHexText').value = colorValue.toUpperCase();
    document.getElementById('colorBox').style.backgroundColor = colorValue;  
    showDiv('colorPickerArea', 'bgColorPickerArea', 'fontList');   
    htmlEdit('contents', 'foreColor', colorValue);
}

function colorPickerLinkClick(self) {    
    document.getElementById('colorHexText').value = rgb2hex(self.style.backgroundColor); 
    colorPickerBtnClick();
}

function bgColorPickerArrowBtnClick() {        
    var colorValue = document.getElementById('bgColorHexText').value;   
    htmlEdit('contents', 'backColor', colorValue);
}

function bgColorPickerBtnClick() {        
    var colorValue = document.getElementById('bgColorHexText').value;  
    document.getElementById('bgColorHexText').value = colorValue.toUpperCase();
    document.getElementById('bgColorBox').style.backgroundColor = colorValue;  
    showDiv('bgColorPickerArea', 'colorPickerArea', 'fontList');   
    htmlEdit('contents', 'backColor', colorValue);
}

function bgColorPickerWhiteFontClick(self) {    
    document.getElementById('bgColorHexText').value = rgb2hex(self.style.backgroundColor);   
    document.getElementById('contents').contentWindow.document.execCommand('foreColor', null, '#FFFFFF'); 
    bgColorPickerBtnClick();
}    

function bgColorPickerBlackFontClick(self) {    
    document.getElementById('bgColorHexText').value = rgb2hex(self.style.backgroundColor);   
    document.getElementById('contents').contentWindow.document.execCommand('foreColor', null, '#000000'); 
    bgColorPickerBtnClick();
}  

function bgColorPickerLinkClick(self) {    
    document.getElementById('bgColorHexText').value = rgb2hex(self.style.backgroundColor); 
    bgColorPickerBtnClick();
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);    
    return (rgb && rgb.length === 4) ? "#" +
           ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2).toUpperCase() +
           ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2).toUpperCase() +
           ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2).toUpperCase() : '';
}

function paletteBtnClick(self, area, label, img) {                        
    if(self.checked == true) {
        document.getElementById(label).innerHTML = '접기<img id=' + '"' + img + '"' + 'class="paletteLabel">';                    
        document.getElementById(img).src = "/static/img/sort-up.png"; 
        document.getElementById(area).style.display = "block";                        
    }
    else {
        document.getElementById(label).innerHTML = '더보기<img id=' + '"' + img + '"' + 'class="paletteLabel">';
        document.getElementById(img).src = "/static/img/sort-down.png"; 
        document.getElementById(area).style.display = "none";                        
    }
}

$(window).on("load", function() {  
    document.getElementById('colorBox').style.backgroundColor = '#000000';
    document.getElementById('bgColorBox').style.backgroundColor = '#000000';
});

$(window).on("load", function() {  
    var cp = {
        bar: null,
        barc: null,
        pal: null,
        palc: null,
        pallc: null,
        flag: false,

        init: function(bar, palette, colorBox, colorHex) {
            this.initBar(this, bar);                                    
            this.initPalette(this, palette, colorBox, colorHex);
            this.drawPalette(this, 255, 0, 0);
        },

        initBar: function(self, bar) {
            var bar = self.bar = document.getElementById(bar);
            var ctx = self.barc = bar.getContext('2d');
            
            bar.addEventListener("mousemove", function(e) {
                self.findxy(self, 'move', e);
            }, false);

            bar.addEventListener("mousedown", function(e) {
                self.findxy(self, 'down', e);
            }, false);

            bar.addEventListener("mouseup", function (e) {
                self.findxy(self, 'up', e);
            }, false);
            bar.addEventListener("mouseout", function (e) {
                self.findxy(self, 'out', e);
            }, false);

            var w = bar.width  = 20;
            var h = bar.height = 120;

            var grd = ctx.createLinearGradient(0, 0, w, h);
            grd.addColorStop(0, '#ff0000');
            grd.addColorStop(0.166, '#ffff00');
            grd.addColorStop(0.333, '#00ff00');
            grd.addColorStop(0.5, '#00ffff');
            grd.addColorStop(0.666, '#0000ff');
            grd.addColorStop(0.834, '#ff00ff');
            grd.addColorStop(1, '#ff0000');

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);

            bar.onclick = function(event) {
                var y = event.pageY - 281;
                var color = self.barc.getImageData(0, y, 1, 1).data;                                        
                
                self.drawPalette(self, color[0], color[1], color[2]);
            };
        },

        initPalette: function(self, paletteID, colorBoxID, colorHexID) {
            var pal = self.pal = document.getElementById(paletteID);
            self.palc = pal.getContext('2d');

            pal.width = 145;
            pal.height = 122;

            pal.addEventListener("mousemove", function(e) {
                self.paletteFindxy(self, 'move', e, colorBoxID, colorHexID);
            }, false);

            pal.addEventListener("mousedown", function(e) {
                self.paletteFindxy(self, 'down', e, colorBoxID, colorHexID);
            }, false);

            pal.addEventListener("mouseup", function (e) {
                self.paletteFindxy(self, 'up', e, colorBoxID, colorHexID);
            }, false);
            pal.addEventListener("mouseout", function (e) {
                self.paletteFindxy(self, 'out', e, colorBoxID, colorHexID);
            }, false)

            pal.onclick = function(event) {     
                var x = event.pageX - 614;
                var y = event.pageY - 281;                                        
                var color = self.palc.getImageData(x, y, 1, 1).data;          
                var colorHex = rgb2hex("rgb("+color[0]+','+color[1]+','+color[2]+')');                                                                      
                document.getElementById(colorBoxID).style.backgroundColor = colorHex;
                document.getElementById(colorHexID).value = colorHex;
            };
        },

        drawPalette: function(self, r, g, b) {
            var nowColor = (r + '-' +g + '-' + b);
            if(self.pallc == nowColor) {
                return;
            }
            else {
                self.pallc = nowColor;
            }

            var palc = self.palc;

            for(var i = 0; i < 255;) {
                var leftColor = 255 - i;                                        
 
                var grd = palc.createLinearGradient(0, 0, 80, 40);
                grd.addColorStop(0, 'rgb(' + leftColor + ',' + leftColor + ',' + leftColor + ')');                                        
                grd.addColorStop(1, 'rgb(' + r + ',' + g + ',' + b + ')');
                palc.fillStyle = grd;                               
                palc.fillRect(0, i++, 145, i);           

                if(r > 0) {
                    r -= 3;                                                                                                                                 
                }
                if(g > 0) {
                    g -= 3;                                  
                }
                if(b > 0) {                                                                                        
                    b -= 3;
                }
            }
        },

        findxy: function(self, action, event) { 
            var y = event.pageY - 281;
            var color = self.barc.getImageData(0, y, 1, 1).data;
            switch(action) {
                case "down":
                    self.flag = true;
                    break;

                case "move":
                    if(self.flag == true) {                                                                                      
                        self.drawPalette(self, color[0], color[1], color[2]);
                    } 
                    break;

                case "up":
                    self.flag = false;
                    break;

                case "out":
                    self.flag = false;
                    break;
            }                                    
        },

        paletteFindxy: function(self, action, event, colorBoxID, colorHexID) {
            var x = event.pageX - 614;
            var y = event.pageY - 281;
            var color = self.palc.getImageData(x, y, 1, 1).data;
            switch(action) {
                case "down":
                    self.flag = true;
                    break;

                case "move":
                    if(self.flag == true) {           
                        var colorHex = rgb2hex("rgb("+color[0]+','+color[1]+','+color[2]+')'); 
                        document.getElementById(colorBoxID).style.backgroundColor = colorHex;
                        document.getElementById(colorHexID).value = colorHex;                                                                                                                            
                    } 
                    break;

                case "up":
                    self.flag = false;
                    break;

                case "out":
                    self.flag = false;
                    break;
            } 
        },
    };
    
    cp.init('bar', 'palette', 'colorBox', 'colorHexText');

    var cp2 = {
        bar: null,
        barc: null,
        pal: null,
        palc: null,
        pallc: null,
        flag: false,

        init: function(bar, palette, colorBox, colorHex) {
            this.initBar(this, bar);                                    
            this.initPalette(this, palette, colorBox, colorHex);
            this.drawPalette(this, 255, 0, 0);
        },

        initBar: function(self, bar) {
            var bar = self.bar = document.getElementById(bar);
            var ctx = self.barc = bar.getContext('2d');
            
            bar.addEventListener("mousemove", function(e) {
                self.findxy(self, 'move', e);
            }, false);

            bar.addEventListener("mousedown", function(e) {
                self.findxy(self, 'down', e);
            }, false);

            bar.addEventListener("mouseup", function (e) {
                self.findxy(self, 'up', e);
            }, false);
            bar.addEventListener("mouseout", function (e) {
                self.findxy(self, 'out', e);
            }, false);

            var w = bar.width  = 20;
            var h = bar.height = 120;

            var grd = ctx.createLinearGradient(0, 0, w, h);
            grd.addColorStop(0, '#ff0000');
            grd.addColorStop(0.166, '#ffff00');
            grd.addColorStop(0.333, '#00ff00');
            grd.addColorStop(0.5, '#00ffff');
            grd.addColorStop(0.666, '#0000ff');
            grd.addColorStop(0.834, '#ff00ff');
            grd.addColorStop(1, '#ff0000');

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);

            bar.onclick = function(event) {
                var y = event.pageY - 385;
                var color = self.barc.getImageData(0, y, 1, 1).data;                                        
                
                self.drawPalette(self, color[0], color[1], color[2]);
            };
        },

        initPalette: function(self, paletteID, colorBoxID, colorHexID) {
            var pal = self.pal = document.getElementById(paletteID);
            self.palc = pal.getContext('2d');

            pal.width = 145;
            pal.height = 122;

            pal.addEventListener("mousemove", function(e) {
                self.paletteFindxy(self, 'move', e, colorBoxID, colorHexID);
            }, false);

            pal.addEventListener("mousedown", function(e) {
                self.paletteFindxy(self, 'down', e, colorBoxID, colorHexID);
            }, false);

            pal.addEventListener("mouseup", function (e) {
                self.paletteFindxy(self, 'up', e, colorBoxID, colorHexID);
            }, false);
            pal.addEventListener("mouseout", function (e) {
                self.paletteFindxy(self, 'out', e, colorBoxID, colorHexID);
            }, false)

            pal.onclick = function(event) {     
                var x = event.pageX - 648;
                var y = event.pageY - 385;                                        
                var color = self.palc.getImageData(x, y, 1, 1).data;          
                var colorHex = rgb2hex("rgb("+color[0]+','+color[1]+','+color[2]+')');                                                                      
                document.getElementById(colorBoxID).style.backgroundColor = colorHex;
                document.getElementById(colorHexID).value = colorHex;
            };
        },

        drawPalette: function(self, r, g, b) {
            var nowColor = (r + '-' +g + '-' + b);
            if(self.pallc == nowColor) {
                return;
            }
            else {
                self.pallc = nowColor;
            }

            var palc = self.palc;

            for(var i = 0; i < 255;) {
                var leftColor = 255 - i;                                        
 
                var grd = palc.createLinearGradient(0, 0, 80, 40);
                grd.addColorStop(0, 'rgb(' + leftColor + ',' + leftColor + ',' + leftColor + ')');                                        
                grd.addColorStop(1, 'rgb(' + r + ',' + g + ',' + b + ')');
                palc.fillStyle = grd;                               
                palc.fillRect(0, i++, 145, i);           

                if(r > 0) {
                    r -= 3;                                                                                                                                 
                }
                if(g > 0) {
                    g -= 3;                                  
                }
                if(b > 0) {                                                                                        
                    b -= 3;
                }
            }
        },

        findxy: function(self, action, event) { 
            var y = event.pageY - 385;
            var color = self.barc.getImageData(0, y, 1, 1).data;
            switch(action) {
                case "down":
                    self.flag = true;
                    break;

                case "move":
                    if(self.flag == true) {                                                                                      
                        self.drawPalette(self, color[0], color[1], color[2]);
                    } 
                    break;

                case "up":
                    self.flag = false;
                    break;

                case "out":
                    self.flag = false;
                    break;
            }                                    
        },

        paletteFindxy: function(self, action, event, colorBoxID, colorHexID) {            
            var x = event.pageX - 648;
            var y = event.pageY - 385;
            var color = self.palc.getImageData(x, y, 1, 1).data;
            switch(action) {
                case "down":
                    self.flag = true;
                    break;

                case "move":
                    if(self.flag == true) {           
                        var colorHex = rgb2hex("rgb("+color[0]+','+color[1]+','+color[2]+')'); 
                        document.getElementById(colorBoxID).style.backgroundColor = colorHex;
                        document.getElementById(colorHexID).value = colorHex;                                                                                                                            
                    } 
                    break;

                case "up":
                    self.flag = false;
                    break;

                case "out":
                    self.flag = false;
                    break;
            } 
        },
    };

    cp2.init('bgBar', 'bgPalette', 'bgColorBox', 'bgColorHexText');
});