var  contact =document.getElementById("contact");
var plus = document.getElementById("plus");
plus.style.display="none";

contact.addEventListener("mouseover", () => {
    // Show the plus icon
    plus.style.display = "inline";

    // Set transition for margin-left
    contact.style.transition = "margin-left 0.5s linear, padding-left 0.1s linear";

    // Move the contact element to the right
    contact.style.marginLeft = "1px";

    // Add padding for smoother effect
    contact.style.paddingLeft = "5px";

    // Change text color
    contact.style.color = "tomato";
    plus.style.color = "tomato"
});

contact.addEventListener("mouseout", () => {
    // Hide the plus icon
    plus.style.display = "none";

    // Reset margin and padding
    contact.style.marginLeft = "0";
    contact.style.paddingLeft = "";

    // Reset text color
    contact.style.color = "white";
});
var menu =document.getElementById("menu");
var menuPage = document.getElementById("menu-page");
var menuIcon = document.getElementById("menu-icon");
var crossIcon = document.getElementById("cross-icon");
// const header = document.getElementById("header");


crossIcon.style.display="none"
menuPage.style.display="none";
var cond="true";
menu.addEventListener("click",()=>{

    if(cond=="true"){
    cond="false";
    menuPage.style.display="";
    menu.style.marginRight="480px";
    menuIcon.style.display="none";
   crossIcon.style.display="";
   menuPage.style.position="fixed"
   menu.style.position="fixed"
   menu.style.marginLeft="810px"
   menuPage.style.backgroundAttachment="scroll";


   }
   else{
        cond="true";
        menuPage.style.display="none";
        menu.style.marginRight="";
        menuIcon.style.display="";
        crossIcon.style.display="none"
        menuPage.style.position="none";
        menu.style.position="";
        menu.style.marginLeft=""
        menuPage.style.backgroundAttachment="none"

    }

    
})

var getintouchSpan = document.getElementById("getintouch-span");
var getintouchPara = document.getElementById("getintouch-para");
getintouchSpan.style.border="none"
getintouchPara.addEventListener("mouseover",()=>{
    getintouchPara.style.border="none"
    getintouchPara.style.backgroundColor="none"
    getintouchSpan.style.border="";
   getintouchSpan.style.backgroundColor="#dfdfdf"
    getintouchSpan.style.transition = " #dfdfdf 20s ease-in";
    // transition: color 0.5s ease-in-out;


})
getintouchPara.addEventListener("mouseout",()=>{
        getintouchSpan.style.backgroundColor="";


})

function validateForm() {
    let valid = true;
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const nameRegex = /^[a-zA-Z\s'-]+$/; 
    if (!name.trim()) {
      document.getElementById('nameError').textContent = 'Name cannot be empty.';
      valid = false;
    } else if (!nameRegex.test(name.trim())) {
      document.getElementById('nameError').textContent = 'Name can only contain letters, spaces, hyphens, or apostrophes.';
      valid = false;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email.trim()) {
      document.getElementById('emailError').textContent = 'Email cannot be empty.';
      valid = false;
    } else if (!emailRegex.test(email.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      valid = false;
    }

    var click = document.getElementById("click");
    click.addEventListener("click",()=>{
    view.style.display="";
    view.style.paddingLeft="20px"
    })

    return valid; 
  }



var view = document.getElementById("view");
view.style.marginBottom="0px";
view.style.marginRight="200px"
view.style.display="none";
view.style.color="green";



var varVariable = document.getElementById("var-variable");
varVariable.style.color="red"

var heart= document.getElementById("heart");
var star = document.getElementById("star");
var plane = document.getElementById("plane");

varVariable.innerHTML="heart";
varVariable.style.color="black"
heart.addEventListener("click",()=>{

    varVariable.innerHTML="heart";
    varVariable.style.color="red";
    varVariable.style.fontWeight="600"
})
star.addEventListener("click",()=>{

    varVariable.innerHTML="star";
    varVariable.style.color="red";
    varVariable.style.fontWeight="600"
    
})
plane.addEventListener("click",()=>{

    varVariable.innerHTML="plane";
    varVariable.style.color="red";
    varVariable.style.fontWeight="600"
})





