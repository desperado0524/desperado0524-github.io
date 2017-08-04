var links = [
"https://cdn.pixabay.com/photo/2016/05/25/13/55/horses-1414889_960_720.jpg",

"http://www.thedigitalhorse.com/wp-content/uploads/2016/08/download.jpeg",

"https://s-media-cache-ak0.pinimg.com/736x/5d/07/1b/5d071bf9d804c0b4b563e19f0d7e7b74--adidas-shoes-nmds-adidas.jpg",
  
"https://i.ytimg.com/vi/Kdj2tTyhpjc/hqdefault.jpg", 
  
"https://s3-us-west-1.amazonaws.com/niusnews-imgs/52017_1.jpg", 
  
];
var titles = ["Horses", "Dressage", "Sneaker Collection", "Frogs", "Gaspard et Lisa"];
var index = 0;
var autoplay = false;
 
function nextPic() {
  console.log("nextPic: " + index);
  let img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
}
function prevPic() {
  console.log("prevPic: " - index);
  let img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
}
