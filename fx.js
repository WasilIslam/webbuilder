//some useful variables
var abc="abcdefghijklmnopqrstuvwxyz";    
var int="0123456789";
//**********************************COMMANDS******************************* */
function copyToClipboard(text) {
    //copies certain text to the cilpboard!
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  }



//**********************_1. Create and Download*************_
function download(nod){
    //converts a node to image
    // domtoimage.toPng(node)
    domtoimage.toPng(nod)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          //document.body.appendChild(img);
          downloadimg(img);
        })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
        }
        function downloadimg(img){
            //downloads a image
            var link = document.createElement('a');
        link.href = img.src;
        link.download = 'Download.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
function downloadFile(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
          
            element.style.display = 'none';
            document.body.appendChild(element);
          
            element.click();
          
            document.body.removeChild(element);
          }
          













//*****************_DOM NODE******************
function createoptions(arr){
    //create select and return options from arr
    var select=document.createElement('select');
for(var i=0,len=arr.length;i<len;i++){
    var option_=document.createElement('option');
   option_.innerHTML=arr[i];
    select.appendChild(option_);
}
return select;
}



//****************_INTEGERS AND HASHES**********_
function numfromtext(text,range=-1){
    //returns a hash number from a text within a range
    var sum=0;
    for(var i=0,len=text.length;i<len;i++){
        sum+=text.charCodeAt(i);
    }
    if(range!=-1)
    return sum%range;

    return sum;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//***************GOOGLE***************_
function googlefont(font){//creates a google font and return its link
   var links=document.getElementsByTagName('link');
   for(var i=0,len=links.length;i<len;i++)
   if(links[i].href=="https://fonts.googleapis.com/css?family="+font){
   return "already present";
}
    var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.crossOrigin="anonymous";
        link.href="https://fonts.googleapis.com/css?family="+font;
        document.getElementsByTagName('head')[0].appendChild(link);
    return "<link rel='stylesheet' href='"+link.href+"'>";
    
}



function focusit(what){
    document.getElementsByClassName(what)[0].scrollIntoView();
}



//**********************Classes*AND*_DISPLAY***********_
function shownext(divsname,activediv,direction){
    //function used for looping the activediv in divsname by direction
        var alldivs=document.getElementsByClassName(divsname);
    var i;
    for(i=0;i<alldivs.length;i++)
    {
        if(alldivs[i].classList.contains(activediv))
        {
            alldivs[i].classList.remove(activediv);
        break;
        }
    }
    if(direction)
    i++;
    else
    i--;
    if(i>=alldivs.length)
    {
        i=0;
    }
    if(i==-1)
    {
        i=alldivs.length-1;
    }
    alldivs[i].classList.add(activediv);
    //also sets the index to the index
    document.getElementsByClassName('index')[0].innerHTML=(i+1)+"/"+(alldivs.length);
    //window.setTimeout(shownext,3000,divsname,activediv,direction);
    }

    function onoff(className,toggler)
    {
        //if a className has toggler then toggler is removed and viceversa
        var x=document.getElementsByClassName(className)[0];
        if(x.classList.contains(toggler)){
    x.classList.remove(toggler);
        }
        else{
    x.classList.add(toggler);
    }
    }
    function onoff_me(x,toggler)
    {
         //if x has toggler then toggler is removed and viceversa
         if(x.classList.contains(toggler)){
     x.classList.remove(toggler);
         }
         else{
     x.classList.add(toggler);
     }
    }
    function removeclass(div, classtoadd){
    //adds the class to the div if it already doesnot contains that
        div.classList.remove(classtoadd);
    }
function addclass(div,classtoadd){
    //adds the class to the div if it already doesnot contains that
    if(!div.classList.contains(classtoadd)){
        div.classList.add(classtoadd);
    }
}
function activateme(me,activatename,deactivate="")
{
    //activates me and deactivates other of the same kind
    if(deactivateclasses!=""){
 var deactivateclasses=document.getElementsByClassName(deactivate);
 var len=deactivateclasses.length;
 
 for(var i=0;i<len;i++)
 {
     if(deactivateclasses[i].classList.contains(activatename)){
        deactivateclasses[i].classList.remove(activatename);
        break;
     }
 }   
}
 me.classList.add(activatename);
}
function toggle_display(me){
    //displays me on and off
    if(me.style.display=="none"){
        me.style.display="unset";
    }
    else{
        me.style.display="none";
    }
}


//activateme

function changebg(div,imgURL){
    //changes the div img bg url to imgURL
    div.style.backgroundImage="url('"+imgURL+"')";
}
//******************NODES FUNCTIONS*********************
function addinp(pset,addto=""){
    //creates input for the div pset having class addto
var node=document.createElement('input');
if(addto!="")
node.classList.add(addto);
pset.appendChild(node);
}

function tagsoftype(him,type){
    //return no of childs of type type in him
    var childrn=him.childNodes;    
    var sum=0;
    for(var i=0,len=childrn.length;i<len;i++)
    if(childrn[i].tagName==type)
    sum++;
    return sum;
    }
    function duplicateLast(bigdiv){
        /*
        Releatively Shorter Solution but we have to filter the inputs generated
        */
        var clone=bigdiv.lastElementChild.cloneNode('true');
        fillinputs(clone);
        bigdiv.appendChild(clone);
    }
    function fillinputs(bigdiv,filler=""){
//fills all the inputs in a bigdiv with filler
for(var i=0,children=bigdiv.childNodes,len=children.length;i<len;i++)
{
    if(children[i].tagName=='INPUT'){
        children[i].value=filler;
    }
}
    }

//******************Filter and stuff******************************
//OPTIONS
function selectOption(selectDiv, optiontxt){
//selects a option txt from select element
selectDiv.selectedIndex=-1;//deselect all
for(var i=0,childs=selectDiv.options,len=childs.length;i<len;i++){
    if(childs[i].innerHTML==optiontxt){
    selectDiv.selectedIndex=i;
    return;
}
}
}







//*******************COLOR ****************************/
function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }




    //******************NODES FUNCTIONS*********************












function dragElement(elmnt,header) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (header) {
      // if present, the header is where you move the DIV from:
      header.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
    //   if(elmnt.style.top.replace("px","")<0)
    //   elmnt.style.top=0;
    //   if(elmnt.style.left.replace("px","")<0)
    //   elmnt.style.left=0;

      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

    function clp(futher){
var childrs=futher.childNodes;
for(var i=0;i<childrs.length;i++)
{
    if(childrs[i].id=="clps")
    {
        if(childrs[i].style.display="none")
        childrs[i].style.display="initial";
        else
        childrs[i].style.display="none"
        return;
    }
}
}




/*NODES*/
function hidenextnode(t)
{
    
}

function hide_me(me)
{
    me.style.display="none";
}
function hide_class(classn)
{
    document.getElementsByClassName(classn)[0].style.display="none";
}
function randomtext(len){
    //returns junk text of length len
    var txt="";
    for(var i=0;i<len;i++)
    {
        txt+=ascii(Math.floor(Math.random()*50)+45);
    }
    return txt;
}
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
/*Taken FROM BASECHANGER******_ */
function beforeDelim(str,delim)
{
var index=my_search(str,delim);
if(index!=-1)
return str.slice(0,index);
return str;
}
//---------------------------------------------------------------------
function afterDelim(str,delim)
{
var index=my_search(str,delim);
if(index!=-1)
return str.slice(index+1,str.length);
return '';
    //------------------------------------------------------
}
    function my_search(str,delim)
{
str=str.slice("");
for(var i=0;i<str.length;i++)
if(str[i]==delim)
return i;

return -1;
}
//ascii
function ascii(a)
        {
        return a.codePointAt(0);          
        }
//EVENT LISTENERS
function hideme(me){
    me.style.display="none";
}
function showme(me){
    me.style.display="initial";
}
function swap(a,b){
var x=a;
a=b;
b=x;
}
function swapinnerhtml(a,b){
    var x=a.innerHTML;
a.innerHTML=b.innerHTML;
b.innerHTML=x;
}
function swapdisplay(one,two)
{//if one is visible hide it and make the second visible
one=document.getElementById(one);
two=document.getElementById(two);  
if(one.style.display="none")
{
two.style.display="none";
one.style.display="initial";
}
else
{
    one.style.display="none";
    two.style.display="initial";
}
}

function visible(man)
{//hides or shows a man
if(man.style.visibility="hidden")
{
 man.style.visibility="initial";   
}
else{
    man.style.visibility="hidden";
}
}
function onlycontains(txt,contins){
    contins=contins.toString();
//if txt is made only of letters in contins then return 1
for(var i=0,len=txt.length;i<len;i++){
    if(contins.search(txt[i])==-1){
return 0;
    }
}
return 1;
}
//reverse
function reverse(s)
        {
            var o='';
            for(var i=s.length-1;i>=0;i--)
                {
                    o+=s[i];
                }
            return o;
        }

//**_CROSS_PLATFORM******_




//**********_string*********_Hashes*********_
function arraytostring(arr){
    var newarr="";
for(var i=0,len=arr.length-1;i<len;i++){
newarr+=arr[i]+" ";
}
newarr+=arr[arr.length-1];
return newarr;
}
function isinrange(num,r1,r2){
    //checks if num contains all numbers
    var flag=1;
    for(var i=0;i<num.length;i++)
    {
    if(num.charCodeAt(i)<r1.charCodeAt(0)||num.charCodeAt(i)>r2.charCodeAt(0)){
    flag=0;
    break;
    }
    }
    if(flag==1)
    return true;
    return false;
}
function isinrange_2(num1,r1arr,r2arr){
    for(var k=0;k<num1.length;k++){
var flag=0;
        for(var i=0;i<r1arr.length;i++){
    if(isinrange(num1[k],r1arr[i],r2arr[i]))
{
    flag=1;
}
    }
    if(flag!=1)
    return 0;
}
return 1;
}



//**************_mobile********_
function mobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};


//*************************************DIRTY CHUNK*************************************** */
/*
function max_widthFlex(imagename){
    var images=document.getElementsByClassName(imagename);
    var len=images.length;
    for(var i=0;i<len;i++)
    {
        images[i].style.maxWidth="100"/(len)+"%";
        images[i].style.minWidth="100"/(len)+"%";
    }
    //changing the length for uclhr
    if(len>=5)
        document.getElementsByClassName('boxes')[0].style.width=(len)*10+"%";
    
    }
    //Css Related Functions
function sizeplus(div){
//incereases size of the div
console.log(div.style.fontSize);
var size=div.style.fontSize;
var sizenew="";
for(var i=0,len=size.length;i<len;i++)
sizenew+=size[i];
console.log(sizenew);
}
function swap(x, y) {
        var t = x;
        x = y;
        y = t;
        return [x, y];
    }
    */