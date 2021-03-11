//var imgContainer = document.getElementsByClassName("slider");
const images = document.querySelectorAll("img");
let i = 0;

//function to slideshow through product pictures
setInterval(function(){ 

    if(i == 0) {
      images[i].style.display = 'block';
    } else if(i == images.length ) {
      images[i - 1].style.display = 'none';
      images[0].style.display = 'block';
      i = 0;
    } else {
      images[i - 1].style.display = 'none';
      images[i].style.display = 'block';
    }
    
   i++;
   
  }, 3000);

// a loop that switchs the active class when the counter hits 2 
//must add setInterval so that the it stays on a picture for a certain amount of seconds 