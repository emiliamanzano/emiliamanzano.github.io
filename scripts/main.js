const myImage = document.querySelector("img");
//ISSO É UM COMENTÁRIO JAVA//
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/imagem_emilia.png") {
    myImage.setAttribute("src" = "images/mario_luigi.png");
  } else {
    myImage.setAttribute("src" = "images/imagem_emilia.png");
  }
});
