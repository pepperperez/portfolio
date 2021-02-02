// Get an array of all <span> close(X) buttons
var closeBtn = document.getElementsByClassName("close");

//SSO
// Get the modal
var modal1 = document.getElementById("ssoModal");

// Get the button that opens the modal
var btn1 = document.getElementById("ssoBtn");

//var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn[0].onclick = function(){
    modal1.style.display = "none";
}


//SOAP vs Rest
var modal2 = document.getElementById("svrModal");

// Get the button that opens the modal
var btn2 = document.getElementById("svrBtn");

// When the user clicks on the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn[1].onclick = function(){
    modal2.style.display = "none";
}


//Tic-Tac-Toe
var modal3 = document.getElementById("tttModal");
var btn3 = document.getElementById("tttBtn");

btn3.onclick = function() {
    modal3.style.display = "block";
}

closeBtn[2].onclick = function(){
    modal3.style.display = "none";
}


//Bubbie
var modal4 = document.getElementById("nybkModal");
var btn4 = document.getElementById("nybkBtn");

btn4.onclick = function() {
    modal4.style.display = "block";
}

closeBtn[3].onclick = function(){
    modal4.style.display = "none";
}

//Just Desserts
var modal5 = document.getElementById("jdModal");
var btn5 = document.getElementById("jdBtn");

btn5.onclick = function() {
    modal5.style.display = "block";
}

closeBtn[4].onclick = function(){
    modal5.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal4.style.display = "none";
    }
    else if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

/////////////////////
//Responsive navigation
function myFunction() {
    var myNav = document.getElementById("myNavigation");
    if (myNav.className === "navigation") {
        myNav.className += " responsive";
    } else {
        myNav.className = "navigation";
    }
}
