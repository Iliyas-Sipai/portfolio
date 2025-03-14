
// function toggleMenu(){
//   const menu = document.querySelector(".menu-link");
//   const icon = document.querySelector(".hamburger-icon");

  
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

function toggleMenu() {
  const menu = document.querySelector('.menu-link');
  menu.classList.toggle('active');
}


  
  



// Project part***********************////
const  tabCotainer = document.querySelector(".container-project")
const tabButtons = document.querySelectorAll(".tab-button")
const tabContent = document.querySelectorAll(".project-part")
// console.log(tabCotainer,tabButtons ,tabContent);


tabCotainer.addEventListener('click', (event) => {
  //  console.log(event.target.dataset);

   const currentId = event.target.dataset.id;

   if(currentId){
     tabButtons.forEach(btn=> {
        btn.classList.remove('active')
     })
     event.target.classList.add('active')
   }

   tabContent.forEach(content=>{
     content.classList.remove('active');
   })

   const currentElement = document.getElementById(currentId)
     currentElement.classList.add('active')
   
})