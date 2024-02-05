import createNavBar from "./createNavBar";
import createHomePage from "./createHomePage";
import createMenu from "./createMenu";
import createContact from "./CreateContact";
import "./styles.css";

createNavBar();
createHomePage();


document.addEventListener("click", (e) => {
    const target = e.target.closest(".home"); 
  
    if(target){
      let divContent = document.querySelector("#content");
      divContent.innerHTML = "";
      createHomePage(); 
    }
  });



  document.addEventListener("click", (e) => {
    const target = e.target.closest(".menu"); 
  
    if(target){
      let divContent = document.querySelector("#content");
      divContent.innerHTML = "";
      createMenu(); 
    }
  });


  document.addEventListener("click", (e) => {
    const target = e.target.closest(".contact"); 
  
    if(target){
      let divContent = document.querySelector("#content");
      divContent.innerHTML = "";
      createContact(); 
    }
  });