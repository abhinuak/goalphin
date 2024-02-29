function replaceImages() {
    var viewportWidth = window.innerWidth;
    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = "";
    var imageSrc = "";
    if (viewportWidth < 500) {
      imageSrc = "Graduation-hat-icon.png";

    } 
    else {
      imageSrc = "books-and-graduation-hat-obj.png";
    }
    var newImage = document.createElement("img");
    newImage.src = imageSrc;
    imageContainer.appendChild(newImage);
    newImage.style.width=200
  }
  replaceImages();
    window.addEventListener("resize", replaceImages);

    function replcePara(){
      var viewportWidth = window.innerWidth;
      var paracontainer=document.getElementById("para-container")
  
      paracontainer.innerHTML=""
  
      var para=""
      if(viewportWidth >500){
          para="keynote.jpg"
          var newpara=document.createElement("img")
      newpara.src= para
      paracontainer.appendChild(newpara)
      }
      else{
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus scelerisque amet, fermentum tellus pellentesque metus, eleifend. Ullamcorper interdum tellus turpis aliquam amet sit posuere. Ullamcorper nec risus nec at. Mauris, amet, quisque risus, tellus. Nisl, nullam sit id malesuada amet, ultrices odio. to Nunc laoreet vulputate at enim."
          var newparag=document.createElement("p")
      newparag.innerText=para
      paracontainer.appendChild(newparag)
      }
     
  newparag.style.textAlign="center"
  newparag.style.fontSize="23px"
     
  
    }
    replcePara()
    window.addEventListener("resize",replcePara)


    function replaceGirl() {
      var viewportWidth = window.innerWidth;
      var imageContainer = document.getElementById("girl");
    
      imageContainer.innerHTML = "";
    
      var imageSrc = "";
      if (viewportWidth > 500) {
        imageSrc = "Group-5.png";
      } else {
        imageSrc = "girrl.png";
      }
    
      var newImage = document.createElement("img");
      newImage.src = imageSrc;
      imageContainer.appendChild(newImage);
    }
    
    replaceGirl();
      window.addEventListener("resize", replaceGirl);
  
  