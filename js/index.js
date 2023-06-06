var name=prompt("Masukkan nama kamu");
document.getElementById("nama").innerText=name;

function validateForm(){
    var name = document.forms["form"]["name"].value;
    var date=document.forms["form"]["birth_date"].value;
    var gender=document.forms["form"]["gender"].value;
    var message=document.forms["form"]["message"].value;
    console.log({name,date,gender,message});
    console.log("Hello");

    if(name==''||date==''||gender==''||message==''){
        alert('Input tidak boleh kosong');
        return false; 

    }

    document.getElementById("show_name").innerText=name;
    document.getElementById("show_birth_date").innerText=date;
    document.getElementById("show_gender").innerText=gender;
    document.getElementById("show_message").innerText=message;
    return false;
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
    plusDivs(1);
},100000000)