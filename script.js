const { text } = require("express");

function showDetails(){
    let details = document.getElementById("form");
  
    alert("The From is Submitted")
    let a =confirm("Do you wish to show the details here?");
    if (a){

        let text="";
        for(let i=0;i<details.length-1;i++){
            text = text+ details[i].value+"\n";
        }
        alert(text)


    }

}