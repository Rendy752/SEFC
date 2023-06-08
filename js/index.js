var name=prompt("Input your name");
if(name==""){
    document.getElementById("nama").innerText="Anonymous";
}
else{
    document.getElementById("nama").innerText=name;
}


function validateForm(){
    var name=document.forms["form"]["name"].value;
    var date=document.forms["form"]["birth_date"].value;
    var gender=document.forms["form"]["gender"].value;
    var message=document.forms["form"]["message"].value;

    if(name==''||date==''||gender==''||message==''){
        alert("Input can't be empty");
        return false; 
    }
    else{
        var confirm=prompt("Do you want us to display your information ? (yes/no)");
        if(confirm=="no"){
            alert("Okay");
            return false;
        }
        else if(confirm=="yes"){
            document.getElementById("show_name").innerText=name;
            document.getElementById("show_birth_date").innerText=date;
            document.getElementById("show_gender").innerText=gender;
            document.getElementById("show_message").innerText=message;
            document.getElementById("show_current_time").innerText=new Date();
            return false;
        }
        else{
            alert("Input doesn't valid");
            return false;
        } 
    }
}

var slideIndex=1;
var imgList=document.getElementsByClassName("gambar");
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
},10000)