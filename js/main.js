
let x = document.querySelector(".logo");
x.onclick =function (){
    nav =document.querySelector(".content-area aside")
    nav.classList.toggle("actives");
    document.getElementById("navs").style.cssText="display: block";
    nav.classList.toggle('none');

    section11 =document.querySelector(".right-section11")
    section11.classList.toggle("actives");
    document.getElementById("section11").style.cssText="display: flex";
    section11.classList.toggle('none');


    section1 =document.querySelector(".right-section")
    section1.classList.toggle("actives");
    document.getElementById("right-section1").style.cssText="display: flex";
    section1.classList.toggle('none');


}
function dark (){
    document.body.style.cssText="background-color:#0000004a";
    document.getElementById("colorpage1").style.cssText = "background-color:#0000004a";
    document.getElementById("right1").style.cssText = "color:white";
    document.getElementById("right2").style.cssText = "color:white";
    document.body.querySelector("input").classList.add("blue-pl");
    
}
function lite (){
    document.body.style.backgroundColor="white";
    document.getElementById("activecolor").style.cssText = "background-color:white";
    document.getElementById("colorpage1").style.cssText = "background-color:white";
    document.getElementById("colorpage2").style.cssText = "background-color:white";
    document.getElementById("colorpage3").style.cssText = "background-color:white";
    document.body.querySelector("input").classList.remove("blue-pl");
    document.getElementById("right1").style.cssText = "color: #065fd4a6";
    document.getElementById("right2").style.cssText = "color: #065fd4";
}



