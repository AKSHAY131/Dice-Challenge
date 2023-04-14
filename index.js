function answer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  var randomNumber1 = answer(1,6);
  var image1 = "dice"+randomNumber1+".png";

  var randomNumber2 = answer(1,6);
  var image2 = "dice"+randomNumber2+".png";

  document.querySelector(".img1").setAttribute("src" ,image1);
  document.querySelector(".img2").setAttribute("src" ,image2);

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 wins";
  }
  else if(randomNumber2> randomNumber1)
  {
    document.querySelector("h1").innerHTML="Player 2 wins";
  }
  else
  {
    document.querySelector("h1").innerHTML="Draw";
  }