function downloadweb(){
    div_functions.remove();
    editorObj.removeEditor();
    //downloads the user file
    let str="<!DOCTYPE html><html>";
    str+=document.getElementsByTagName('head')[0].outerHTML.replace("<link rel='stylesheet' href='/web.css'>","");
    str+="<body>"+web.outerHTML;
    str+="</body></html>"
downloadFile("website.html",str);
}














var web=document.getElementById('userweb');
var mover=document.createElement('div');
mover.innerHTML="mobe";
// mover.classList.add('mover');
//id's
var node_in_action=null;
var id_=0;
//~id's
function createText(){
var div=createNewDIV();
var p=document.createElement('P');
p.innerHTML="This is an Example";



div.appendChild(p);
web.appendChild(div);
}

function createLink(){
var div=createNewDIV();
var a=document.createElement('A');
a.innerHTML="Example";
a.href="#";


div.appendChild(a);
web.appendChild(div);
}

function createInput(){
    var div=createNewDIV();
var inp=document.createElement('Input');


div.appendChild(inp);
web.appendChild(div);
}
function createEmpty(){
    var div=createNewDIV();
var emp=document.createElement('div');
emp.style.width="400px";
emp.style.border="1px solid black";
emp.style.height="100px";

div.appendChild(emp);
web.appendChild(div);
}
function createImage(){
    var div=createNewDIV();
var img=document.createElement('img');
img.src="https://images.unsplash.com/photo-1599543552889-a5f37428e72c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3dhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
img.style.width="auto";
img.style.height="auto";

div.appendChild(img);
web.appendChild(div);
}

//                                                   DIV FUNCTIONS
var div_functions=document.createElement('div');
    div_functions.classList.add("div_functions");
var edit=document.createElement("button");
edit.id="div_functions_edit";
    div_functions.appendChild(edit);
    edit.onclick=function(){
        node_in_action=this.parentNode.previousElementSibling;
    editorObj.makechanges();//makes the changes
    editorObj.setPos();//sets the postion
        document.body.appendChild(editorObj.retEdit());
    console.log("editor called!");
}
//                                                   DIV FUNCTIONS

function createNewDIV(){
    //container for all things
    editorObj.removeEditor();
    div_functions.remove();
    //closed the editor menu
    let div=document.createElement('div');
    div.classList.add("div");
    div.id=id_++;
    div.oncontextmenu=function(){
        editorObj.removeEditor();
    this.appendChild(div_functions);
    dragElement(this,div_functions);
}
    return div;
}



var editor=function(){//node is the node to edit

    var editorincheif=document.createElement('div');
    editorincheif.id="editorincheif";
/*Header Editor*/
var headereditor=document.createElement('div');
headereditor.id="headereditor";

var crossSign=document.createElement('div');
var idshower=document.createElement('div');
crossSign.id="cross_sign";
crossSign.innerHTML="X";
crossSign.onclick=function(){
   div_functions.remove();
    editorincheif.remove();
}
editorincheif.appendChild(headereditor);
headereditor.appendChild(idshower);
headereditor.appendChild(crossSign);
dragElement(editorincheif,headereditor);

/*~Header Editor*/

//                                                   Div Remove
var bottomeditor=document.createElement("div");
bottomeditor.id="bottom_editor";
var button_remove=document.createElement("button");button_remove.innerHTML="<i class='far fa-trash-alt'></i>";
button_remove.onclick=function(){
    node_in_action.parentNode.remove();
editorincheif.remove();
}
var button_duplicate=document.createElement("button");button_duplicate.innerHTML="Duplicate";
button_duplicate.onclick=function(){
var newclone=node_in_action.parentNode.cloneNode(true);
newclone.id=id_++;    
web.appendChild(newclone);
console.log(newclone);
}
bottomeditor.appendChild(button_remove);
// bottomeditor.appendChild(button_duplicate);
editorincheif.appendChild(bottomeditor);
//                                                   Div Remove







/*Buttons*/
var buttondiv=document.createElement('div');
buttondiv.id="buttondiv";
var buttonHTML=document.createElement('button');buttonHTML.innerHTML="HTML"; buttondiv.appendChild(buttonHTML);

buttonHTML.onclick=function(){
   editorincheif.lastElementChild.remove();
   this.style.backgroundColor="ivory";
buttonJS.style.backgroundColor="initial";
buttonCSS.style.backgroundColor="initial";
    editorincheif.appendChild(HTML);
}

var buttonCSS=document.createElement('button');buttonCSS.innerHTML="CSS";buttondiv.appendChild(buttonCSS);
buttonCSS.onclick=function(){
   editorincheif.lastElementChild.remove();
this.style.backgroundColor="ivory";
buttonJS.style.backgroundColor="initial";
buttonHTML.style.backgroundColor="initial";
   editorincheif.appendChild(CSS);
}
this.removeEditor=function(){
    editorincheif.remove();
}
var buttonJS=document.createElement('button');buttonJS.innerHTML="JS";buttondiv.appendChild(buttonJS);
buttonJS.onclick=function(){
   editorincheif.lastElementChild.remove();
   editorincheif.appendChild(JS);
   this.style.backgroundColor="ivory";
buttonHTML.style.backgroundColor="initial";
buttonCSS.style.backgroundColor="initial";
}



editorincheif.appendChild(buttondiv);
/*~Buttons*/

/*Pages*/
var HTML=document.createElement('div');
var CSS=document.createElement('div');
CSS.id="CSS";
var JS=document.createElement('div');
editorincheif.appendChild(HTML);

/*~Pages*/


function makechangesHTML(){
    while(HTML.firstChild){//pehle ke ilawa sab remove kardo
    HTML.removeChild(HTML.lastElementChild);
}
    idshower.innerHTML="Editing Elem No: "+node_in_action.parentNode.id;
    
    if(node_in_action.tagName=="P"||node_in_action.tagName=="A"){
    HTML.appendChild(textarea);
    if(node_in_action.tagName=='A'){
        HTML.appendChild(hrefdiv);
    }
    textarea.value=node_in_action.innerHTML;
    }
    else if(node_in_action.tagName=="IMG"){
        src.value=node_in_action.src;
HTML.appendChild(srcdiv);
    }
    else{
    HTML.appendChild(textareainp);
    HTML.appendChild(placeholderdiv);
    textareainp.value=node_in_action.innerHTML;
    }
    if(node_in_action.parentNode.style.zIndex!="auto")
    indexINPUT.value=node_in_action.parentNode.style.zIndex;
    HTML.appendChild(indexdiv);
}



this.makechanges=function(){
makechangesHTML();
makechangesCSS();
}
this.setPos=function(){
    console.log(node_in_action.parentNode.style.top);
editorincheif.style.top=node_in_action.parentNode.style.top;
// editorincheif.style.left="615px";
}
this.retEdit=function(){
    return editorincheif;
}

    //gives each button a purpose in life


//_____****************************************************************creating elements
//!!!!!!!!!!!!!!!textarea!!!!!!!!!!!!!!!!
var textarea=document.createElement('textarea');
textarea.placeholder="Enter Text Here...";
textarea.oninput=function(){
    node_in_action.innerHTML=textarea.value;
}

var textareainp=document.createElement('textarea');
textareainp.placeholder="Enter Text Here...";
textareainp.oninput=function(){
    node_in_action.value=textareainp.value;
}
//!!!!!!!!!!!!!!!HREF!!!!!!!!!!!!!!!!
var hrefdiv=document.createElement('div');
hrefdiv.innerHTML="Link: ";
var href=document.createElement('input');
href.oninput=function(){
    node_in_action.href=this.value;
}
hrefdiv.appendChild(href);
//__________________________________________________________________________PLACEHOLDER_
var placeholderdiv=document.createElement('div');
placeholderdiv.innerHTML="Place Holder: ";
var placeholder=document.createElement('input');
placeholder.oninput=function(){
    node_in_action.placeholder=this.value;
}
placeholderdiv.appendChild(placeholder);

//_______________________________________________________________________SRC__
var srcdiv=document.createElement('div');
srcdiv.innerHTML="Image Adress: ";
var src=document.createElement('input');
src.oninput=function(){
    node_in_action.src=this.value;
}
srcdiv.appendChild(src);
//order
var indexdiv=document.createElement('div');
indexdiv.innerHTML="Index: ";
var indexINPUT=document.createElement('input');
indexINPUT.placeholder="auto";
indexINPUT.oninput=function(){
    if(indexINPUT.value==""){
        node_in_action.parentNode.style.zIndex="auto";
    return;
    }
    node_in_action.parentNode.style.zIndex=this.value;
}
indexdiv.appendChild(indexINPUT);
/*CSS_SECTION*/
function makechangesCSS(){
makechangesCSS_font();
makechangesCSS_scale();
makechangesCSS_border();
makechangesCSS_background();
makechangesCSS_text();
}


/*CSS PAGES*/
var css_font=document.createElement('div');
var css_bg=document.createElement('div');
var css_border=document.createElement('div');
var css_scale=document.createElement('div');
var css_text=document.createElement('div');

/*CSS BUTTONS*/
var css_div=document.createElement("div");css_div.id="css_div";
var css_font_button=document.createElement('button');css_font_button.innerHTML="font";css_font_button.classList.add("cssbutton");css_div.appendChild(css_font_button);css_font_button.onclick=function(){CSS.lastElementChild.remove();CSS.appendChild(css_font)}
var css_bg_button=document.createElement('button');css_bg_button.innerHTML="background";css_bg_button.classList.add("cssbutton");css_div.appendChild(css_bg_button);css_bg_button.onclick=function(){CSS.lastElementChild.remove();CSS.appendChild(css_bg)}
var css_border_button=document.createElement('button');css_border_button.innerHTML="border";css_border_button.classList.add("cssbutton");css_div.appendChild(css_border_button);css_border_button.onclick=function(){CSS.lastElementChild.remove();CSS.appendChild(css_border)}
var css_scale_button=document.createElement('button');css_scale_button.innerHTML="scale";css_scale_button.classList.add("cssbutton");css_div.appendChild(css_scale_button);css_scale_button.onclick=function(){CSS.lastElementChild.remove();CSS.appendChild(css_scale)}
var css_text_button=document.createElement('button');css_text_button.innerHTML="text";css_text_button.classList.add("cssbutton");css_div.appendChild(css_text_button);css_text_button.onclick=function(){CSS.lastElementChild.remove();CSS.appendChild(css_text)}

/*First Kam First*/
CSS.appendChild(css_div);
CSS.appendChild(css_font);




/*CSS pages Functions*/
function makechangesCSS_text(){
    selectOption(textdecorationSelect,node_in_action.style.textDecoration);
//                                                                                   
    css_text.appendChild(textdecorationDiv);
}
function makechangesCSS_scale(){
zoom.value=node_in_action.style.zoom;
widthINPUT.value=node_in_action.style.width.replace("px","");
heightINPUT.value=node_in_action.style.height.replace("px","");
paddingINPUT.value=node_in_action.style.padding.replace("px","");
//                                                                                   
css_scale.appendChild(zoomdiv);
css_scale.appendChild(paddingDIV);
css_scale.appendChild(scalingPage);

}
function makechangesCSS_font(){
    color.value=RGBToHex(node_in_action.style.color);
    console.log(RGBToHex(node_in_action.style.color));
    selectOption(select,node_in_action.style.fontFamily);
    sizeINPUT.value=node_in_action.style.fontSize.replace("px","");
    //old done
css_font.appendChild(colorDIV);
css_font.appendChild(sizeDIV);
css_font.appendChild(googleFontsDiv);
}
function makechangesCSS_border(){

borderRadiusINPUT.value=node_in_action.style.borderRadius.replace("px","");
borderWidthINPUT.value=node_in_action.style.borderWidth.replace("px","");
borderColorINPUT.value=RGBToHex(node_in_action.style.borderColor);
//old done
css_border.appendChild(borderColorDIV);
css_border.appendChild(borderRadiusDIV);
css_border.appendChild(borderWidthDIV);
}

function makechangesCSS_background(){
bgcol.value=RGBToHex(node_in_action.style.backgroundColor);
opacityINPUT.value=node_in_action.style.opacity;
    //old done    
css_bg.appendChild(bgcolorDIV);
css_bg.appendChild(opacityDIV);
}








































/*CSS ELEMENTS
*/
/*        ZOOM       */
var zoom=document.createElement('input');
zoom.placeholder="100%";
zoom.oninput=function(){
    if(this.value==""){
    node_in_action.style.zoom="100%";return;}
node_in_action.style.zoom=this.value+"%";
}

var zoomdiv=document.createElement('div');
zoomdiv.appendChild(createdivP("Zoom: "));
zoomdiv.appendChild(zoom);
/*        ~ZOOM       */
/*textdecoration*/

/*Opacity*/
var opacityDIV=document.createElement('div');
opacityDIV.appendChild(createdivP("Opacity: "));
var opacityINPUT=document.createElement('input');
opacityINPUT.placeholder="100%";
opacityINPUT.type="number";
opacityDIV.appendChild(inDiv(opacityINPUT));
opacityINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.opacity="100%";return;}
node_in_action.style.opacity=this.value+"%";
}

/*color*/
var colorDIV=document.createElement("div");
var color=document.createElement("input");
color.type="color";
color.oninput=function(){
    node_in_action.style.color=this.value;
}
colorDIV.appendChild(createdivP("Color: "));
colorDIV.appendChild(inDiv(color));
var bgcolorDIV=document.createElement("div");
var bgcol=document.createElement("input");
bgcol.type="color";
bgcol.oninput=function(){
    node_in_action.style.backgroundColor=this.value;
}
bgcolorDIV.appendChild(createdivP("BG color: "));
bgcolorDIV.appendChild(inDiv(bgcol));



/*size*/
var sizeDIV=document.createElement('div');
sizeDIV.appendChild(createdivP("Font Size: "));
var sizeINPUT=document.createElement('input');
sizeINPUT.placeholder="auto";
sizeINPUT.type="number";
sizeDIV.appendChild(inDiv(sizeINPUT));
sizeINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.fontSize="auto";return;}
node_in_action.style.fontSize=this.value+"px";
}
/*padding*/
var paddingDIV=document.createElement('div');
paddingDIV.appendChild(createdivP("Padding: "));
var paddingINPUT=document.createElement('input');
paddingINPUT.placeholder="auto";
paddingINPUT.type="number";
paddingDIV.appendChild(inDiv(paddingINPUT));
paddingINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.padding="auto";return;}
node_in_action.style.padding=this.value+"px";
}
/*border_width */
var borderWidthDIV=document.createElement('div');
borderWidthDIV.appendChild(createdivP("Border Width: "));
var borderWidthINPUT=document.createElement('input');
borderWidthINPUT.placeholder="auto";
borderWidthINPUT.type="number";
borderWidthDIV.appendChild(inDiv(borderWidthINPUT));
borderWidthINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.borderWidth="auto";return;}
node_in_action.style.borderWidth=this.value+"px";
}
/*border_radius*/
var borderRadiusDIV=document.createElement('div');
borderRadiusDIV.appendChild(createdivP("Border Radius: "));
var borderRadiusINPUT=document.createElement('input');
borderRadiusINPUT.placeholder="auto";
borderRadiusINPUT.type="number";
borderRadiusDIV.appendChild(inDiv(borderRadiusINPUT));
borderRadiusINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.borderRadius="auto";return;}
node_in_action.style.borderRadius=this.value+"px";
}
/*border color*/
var borderColorDIV=document.createElement('div');
borderColorDIV.appendChild(createdivP("Border Color: "));
var borderColorINPUT=document.createElement('input');
borderColorINPUT.placeholder="auto";
borderColorINPUT.type="color";
borderColorDIV.appendChild(inDiv(borderColorINPUT));
borderColorINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.borderColor="auto";return;}
node_in_action.style.borderColor=this.value;
}
/*google_font_options*/
var googleFontArr=["Roboto","Sacramento","Vibes","Ruthie","Hachi Maru Pop", "Lora","Chakra Petch","Lobster","Sofia","Amatic SC"];
var googleFontsDiv=document.createElement('div');
googleFontsDiv.appendChild(createdivP("Font: "));
var select=createoptions(googleFontArr);selectOption(select,"Roboto");
select.onchange=function(){
    googlefont(this.value);
    node_in_action.style.fontFamily=this.value;
}
googleFontsDiv.appendChild(select);


/*text decoration*/
var textdecorationArr=["none","underline","overline","line-through"];
var textdecorationDiv=document.createElement('div');
var textdecorationSelect=createoptions(textdecorationArr);
textdecorationSelect.onchange=function(){
    node_in_action.style.textDecoration=this.value;
}
textdecorationDiv.appendChild(textdecorationSelect);











var scalingPage=document.createElement('div');
scalingPage.id="scalingPage";
var widthDIV=document.createElement('div');
widthDIV.appendChild(createdivP("Width: "));
var widthINPUT=document.createElement('input');
widthINPUT.placeholder="auto";
widthINPUT.type="number";
widthDIV.appendChild(inDiv(widthINPUT));
widthINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.width="auto";return;}
node_in_action.style.width=this.value+"px";
}

var heightDIV=document.createElement('div');
heightDIV.appendChild(createdivP("Height:"));
var heightINPUT=document.createElement('input');
heightINPUT.placeholder="auto";
heightINPUT.type="number";
heightDIV.appendChild(inDiv(heightINPUT));
heightINPUT.oninput=function(){
    if(this.value==""){
    node_in_action.style.height="auto";return;}
node_in_action.style.height=this.value+"px";
}
var x=document.createElement('div');
scalingPage.appendChild(widthDIV);
scalingPage.appendChild(heightDIV);
function createdivP(txt){
//creates a div and then creates a p and then adds txt to the p and returns it
let div=document.createElement('div');
let p=document.createElement('p');
p.innerHTML=txt;
div.appendChild(p);
return div;
}
function inDiv(elem){
    //creates a div and add this div inside of the 
    let div=document.createElement('div');
    div.appendChild(elem);
    return div;
}
//________________________________________~Scaling________________________















}

var editorObj=new editor;
//Creating editing elements

