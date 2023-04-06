// Section-2

// Course tab switching behaviour

var tabContent1 = document.querySelector("#projectmanagement");
var tabContent2 = document.querySelector("#bankfinance");
var tabContent3 = document.querySelector("#qualman");
var tabContent4 = document.querySelector("#manag");
var tabContent5 = document.querySelector("#all");

var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");
var tab3 = document.querySelector("#tab3");
var tab4 = document.querySelector("#tab4");
var tab5 = document.querySelector("#tab5");
function projectManage(){

    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab4.classList.remove("active");
    tab5.classList.remove("active");

    tabContent1.style.opacity = "1";
    tabContent2.style.opacity = "0";
    tabContent3.style.opacity = "0";
    tabContent4.style.opacity = "0";
    tabContent5.style.opacity = "0";
    
    tab1.style.backgroundColor = "#DC3545";
    tab1.style.color="white";

    tab2.style.backgroundColor = "#F5F5F5";
    tab2.style.color="black";

    tab3.style.backgroundColor = "#F5F5F5";
    tab3.style.color="black";

    tab4.style.backgroundColor = "#F5F5F5";
    tab4.style.color="black";

    tab5.style.backgroundColor = "#F5F5F5";
    tab5.style.color="black";
}
function bankFinance(){

    tab2.classList.add("active");
    tab1.classList.remove("active");
    tab3.classList.remove("active");
    tab4.classList.remove("active");
    tab5.classList.remove("active");

    tabContent2.style.opacity = "1";
    tabContent1.style.opacity = "0";
    tabContent3.style.opacity = "0";
    tabContent4.style.opacity = "0";
    tabContent5.style.opacity = "0";
    
    tab1.style.backgroundColor = "#F5F5F5";
    tab1.style.color="black";

    tab2.style.backgroundColor = "#DC3545";
    tab2.style.color="white";

    tab3.style.backgroundColor = "#F5F5F5";
    tab3.style.color="black";

    tab4.style.backgroundColor = "#F5F5F5";
    tab4.style.color="black";

    tab5.style.backgroundColor = "#F5F5F5";
    tab5.style.color="black";
}
function qualityManage(){

    tab2.classList.add("active");
    tab2.classList.remove("active");
    tab1.classList.remove("active");
    tab4.classList.remove("active");
    tab5.classList.remove("active");

    tabContent3.style.opacity = "1";
    tabContent2.style.opacity = "0";
    tabContent1.style.opacity = "0";
    tabContent4.style.opacity = "0";
    tabContent5.style.opacity = "0";
    
    tab1.style.backgroundColor = "#F5F5F5";
    tab1.style.color="black";

    tab2.style.backgroundColor = "#F5F5F5";
    tab2.style.color="black";

    tab3.style.backgroundColor = "#DC3545";
    tab3.style.color="white";

    tab4.style.backgroundColor = "#F5F5F5";
    tab4.style.color="black";

    tab5.style.backgroundColor = "#F5F5F5";
    tab5.style.color="black";
}
function manage(){

    tab4.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab1.classList.remove("active");
    tab5.classList.remove("active");

    tabContent4.style.opacity = "1";
    tabContent2.style.opacity = "0";
    tabContent3.style.opacity = "0";
    tabContent1.style.opacity = "0";
    tabContent5.style.opacity = "0";
    
    tab1.style.backgroundColor = "#F5F5F5";
    tab1.style.color="black";

    tab2.style.backgroundColor = "#F5F5F5";
    tab2.style.color="black";

    tab3.style.backgroundColor = "#F5F5F5";
    tab3.style.color="black";

    tab4.style.backgroundColor = "#DC3545";
    tab4.style.color="white";

    tab5.style.backgroundColor = "#F5F5F5";
    tab5.style.color="black";
}
function All(){

    tab5.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab1.classList.remove("active");
    tab4.classList.remove("active");

    tabContent5.style.opacity = "1";
    tabContent2.style.opacity = "0";
    tabContent3.style.opacity = "0";
    tabContent1.style.opacity = "0";
    tabContent4.style.opacity = "0";
    
    tab1.style.backgroundColor = "#F5F5F5";
    tab1.style.color="black";

    tab2.style.backgroundColor = "#F5F5F5";
    tab2.style.color="black";

    tab3.style.backgroundColor = "#F5F5F5";
    tab3.style.color="black";

    tab4.style.backgroundColor = "#F5F5F5";
    tab4.style.color="black";

    tab5.style.backgroundColor = "#DC3545";
    tab5.style.color="white";
}

// section-5

// carousel behavior

var l1 = document.querySelector(".list-1");
var l2 = document.querySelector(".list-2");
var l3 = document.querySelector(".list-3");
function next(){
    if(l1.classList.contains("active")){
        moveForward(1);
    }
    else if(l2.classList.contains("active")){
        moveForward(2);
    }
    else{
        moveForward(3);
    }
}
function prev(){
    if(l1.classList.contains("active")){
        moveBackward(1);
    }
    else if(l2.classList.contains("active")){
        moveBackward(2);
    }
    else{
        moveBackward(3);
    }
}
// Forward Movement
function moveForward(n){
    switch(n){
        case 1:
            l1.style.transform = "translateX(100%)";
            l2.style.transform = "translateX(0)";
            l3.style.transform = "translateX(100%)";

            l1.classList.remove("active");
            l2.classList.add("active");
            l3.classList.remove("active");
            break;
        case 2:
            l1.style.transform = "translateX(100%)";
            l2.style.transform = "translateX(100%)";
            l3.style.transform = "translateX(0)";

            l1.classList.remove("active");
            l2.classList.remove("active");
            l3.classList.add("active");
            break;
        case 3:
            l1.style.transform = "translateX(0)";
            l2.style.transform = "translateX(100%)";
            l3.style.transform = "translateX(100%)";

            l1.classList.add("active");
            l2.classList.remove("active");
            l3.classList.remove("active");
            break;
        default:
            console.log(n);
    }
}
// Backward Movement
function moveBackward(n){
    switch(n){
        case 1:
            l1.style.transform = "translateX(100%)";
            l2.style.transform = "translateX(100%)";
            l3.style.transform = "translateX(0)";

            l1.classList.remove("active");
            l2.classList.remove("active");
            l3.classList.add("active");
            break;
        case 2:
            l1.style.transform = "translateX(0)";
            l2.style.transform = "translateX(100%)";
            l3.style.transform = "translateX(100%)";

            l1.classList.add("active");
            l2.classList.remove("active");
            l3.classList.remove("active");
            break;
        case 3:
            l1.style.transform = "translateX(100%)";
            l2.style.transform = "translateX(0)";
            l3.style.transform = "translateX(100%)";

            l1.classList.remove("active");
            l2.classList.add("active");
            l3.classList.remove("active");
            break;
        default:
            console.log(n);
    }
}

