let timeoutID;

function add()
{   
  
    document.querySelector(".js-added").innerHTML = "Added";
    
    //passing invalid ID to clearTimeout simply does nothing, no exception is thrown
    clearTimeout(timeoutID);

    timeoutID = setInterval(function(){
        document.querySelector(".js-added").innerHTML = " ";
    } , 2000);

    
}