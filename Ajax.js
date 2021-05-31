function ejecutarAjax() 
{
    
     var resultado = document.getElementById("info");
     var arr = [];


     if(window.XMLHttpRequest) {
         xmlhttp=new XMLHttpRequest();
     } else {
         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }

     xmlhttp.onreadystatechange = function() {
         if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            if( xmlhttp.responseXML !== null){
                arr[0] = xmlhttp.responseXML.getElementByTagName("ISBN").item(0);
                arr[1] = xmlhttp.responseXML.getElementByTagName("nivelProfundidad").item(0);
                arr[2] = xmlhttp.responseXML.getElementByTagName("editorial").item(0);

                resultado.innerHTML = arr[0].firstChild.nodeValue + " "+ 
                                      arr[1].firstChild.nodeValue;



            }
         }
     }

     xmlhttp.open("GET","libros.xml", true);
     xmlhttp.send();
}
