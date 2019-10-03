var angle = 0.0;


function setup() {
  createCanvas(windowWidth,windowHeight);


}
function draw() {
 noStroke();
 // for(var x=0; x<255; x+20);{
   //   r++;
  //}
  //blue
  //rotate(angle);
  translate(mouseX,mouseY);
  fill(61,31,234);
  rect(0,0,50,30);
  //angle += 0.1;
  //red
  rotate(angle);
  translate(50,0);
  fill(237,28,36);
  rect(0,0,50,30);
  //angle += 0.1;
  //yellow
  rotate(angle);
  translate(50,0); 
  fill(249,244,47);
  rect(0,0,50,30);
  //angle += 0.1;
  //purple
  rotate(angle);
  translate(50,0);
  fill(173,71,234);
  rect(0,0,50,30);
  //angle += 0.1;
  //green
  rotate(angle);
  translate(50,0);
  fill(11,221,70);
  rect(0,0,50,30);
  //angle += 0.1;
  //orange
  rotate(angle);
  translate(50,0);  
  fill(234,128,37);
  rect(0,0,50,30);
  //angle += 0.1;
  

}