const menuOpenButton=document.querySelector("#menu-open-button");
const  menuCloseButton=document.querySelector("#menu-close-button");
const body=document.body;

function openMenu(){
    body.classList.add("show-mobile-menu");//“Add a class named show-mobile-menu to the <body> tag.”
    if(menuOpenButton)menuOpenButton.setAttribute("arial-expanded","true");
    if(menuCloseButton)menuCloseButton.setAttribute("arial-expanded","true");
    console.log("Menu opened");
}
function closeMenu(){
 body.classList.remove("show-mobile-menu");
    if(menuOpenButton)menuOpenButton.setAttribute("arial-expanded","false");
    if(menuCloseButton)menuCloseButton.setAttribute("arial-expanded","false");
    console.log("Menu closed");
}
if(menuOpenButton) menuOpenButton.addEventListener("click",openMenu);
if(menuCloseButton) menuCloseButton.addEventListener("click",closeMenu);