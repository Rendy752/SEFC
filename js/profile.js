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