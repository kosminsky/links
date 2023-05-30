function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light');

  //pegar a tag img
  const img = document.querySelector("#profile img")

   if(html.classList.contains('light')){
     //com light mode
     img.setAttribute("src", "./assets/avatar-light.png")
   } else {
     //sem light mode
     img.setAttribute("src", "./assets/avatar.png")
   }

}