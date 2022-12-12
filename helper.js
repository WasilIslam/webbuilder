window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        //read file
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
               var toUpdate=(reader.result);
            web.innerHTML=(toUpdate.slice(toUpdate.search("<section"),toUpdate.search("</section>")));//!!!sections are only used for the user web not in inside            ;
            document.getElementsByTagName('head')[0].innerHTML=(toUpdate.slice(toUpdate.search("<head"),toUpdate.search("</head>")));
var divs=document.getElementsByClassName('div');
for(var i=0;i<divs.length;i++)
{
    divs[i].oncontextmenu=function(){
        editorObj.removeEditor();
    this.appendChild(div_functions);
    dragElement(this,div_functions);
}
}
            }

            reader.readAsText(file);	
        } else {
           console.log( "File not supported!")
        }
    });
}
