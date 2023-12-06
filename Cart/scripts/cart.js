let timeoutID;

function add()
{   
  
    document.querySelector(".js-added").innerHTML = "Added";
    
    clearTimeout(timeoutID);

    timeoutID = setInterval(function(){
        document.querySelector(".js-added").innerHTML = " ";
    } , 2000);

    
}