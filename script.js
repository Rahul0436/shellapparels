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
const menu =document.getElementById("menu");
const menuPage = document.getElementById("menu-page");
const menuIcon = document.getElementById("menu-icon");
const crossIcon = document.getElementById("cross-icon");


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
        crossIcon.style.display="none";
        menuPage.style.position="none";
        menu.style.position="";
        menu.style.marginLeft=""
        menuPage.style.backgroundAttachment="none"
    }

    
})

