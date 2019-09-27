window.addEventListener('scroll', function(){
var video=document.getElementById("video");
    var posVideo=video.offsetTop;
    var currentScroll=window.pageYOffset;
    var windowHeight=window.innerHeight;
    var alturaVideo=video.height;
    
    if(posVideo + alturaVideo < currentScroll+windowHeight &&
       posVideo > currentScroll 
      ){
        video.classList.add("play");
        
    }else{
        video.classList.remove("play");
    };
    
    
    
    //conasole.log("posVideo", posVideo);
    //console.log("currentScroll", currentScroll);
    //console.log("windowHeight", windowHeight);
});