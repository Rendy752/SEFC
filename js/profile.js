var number=0;
function set(increment){
    number+=increment;
    if(number%2!=0){
        document.body.style.backgroundColor="#000000";
        document.body.style.color="#FFFFFF";
        document.getElementById("mode").src="img/darkmode.png";
    }
    else{
        document.body.style.backgroundColor="#FFFFFF";
        document.body.style.color="#000000";
        document.getElementById("mode").src="img/lightmode.png";
    }
    number
}

var slideIndex=1;
var imgList=document.getElementsByClassName("banner");
imgList[0].style.display="block";
function slide(index){
    slideIndex+=index;
    if(slideIndex>imgList.length) slideIndex=1
    else if(slideIndex<1) slideIndex=imgList.length;
    
    for(var i=0;i<imgList.length;i++){
        imgList[i].style.display="none";
    }

    imgList[slideIndex-1].style.display="block";
}


setInterval(()=>{
    slide(1);
},5000)