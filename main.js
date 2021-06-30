canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width = 100;
car_height = 80;

car_x = 10;
car_y = 10;

car2_x = 10;
car2_y = 110;

background_image = "racing.gif";
car_image = "car1.png";
car2_image = "car2.png";
function add() {
    bg_img = new Image();
    bg_img.onload = upload_bg;
    bg_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src = car_image;

    rover_img1 = new Image();
    rover_img1.onload = upload_rover_2;
    rover_img1.src = car2_image;

    
}

function upload_bg() {
    ctx.drawImage(bg_img,0,0, canvas.width, canvas.height);

}

function upload_rover() {
    ctx.drawImage(rover_img, car_x, car_y, car_width, car_height);
}

function upload_rover_2() {
    ctx.drawImage(rover_img1, car2_x, car2_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keypressed == "87"){ 
        c2_up();
         console.log("key W"); 
        }
     if(keypressed == "88"){
          c2_down();
           console.log("key X");
         }
      if(keypressed == "68"){
           c2_right();
            console.log("key D");
         }
       if(keypressed == "65"){
            c2_left();
             console.log("key A");
             }
}

function up() {
    if (car_y >= 0 ) {
        car_y = car_y - 10;
        console.log("when up arrow is pressed, x ="+ car_x  +" and y =" + car_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function down() {
    if (car_y <= 500) {
        car_y = car_y + 10;
        console.log("when down arrow is pressed, x ="+ car_x + " and y =" + car_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function left() {
    if (car_x >= 0 ) {
        car_x = car_x - 10;
        console.log("when left arrow is pressed, x ="+ car_x + " and y =" + car_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function right() {
    if (car_x<= 700 ) {
        car_x = car_x + 10;
        console.log("when right arrow is pressed, x ="+ car_x + " and y =" + car_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}


function c2_up() {
    if (car2_y >= 0 ) {
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x ="+ car2_x + " and y =" + car2_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function c2_down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("when down arrow is pressed, x ="+ car2_x + " and y =" + car2_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function c2_left() {
    if (car2_x >= 0 ) {
        car2_x = car2_x - 10;
        console.log("when left arrow is pressed, x ="+ car2_x + " and y =" + car2_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}

function c2_right() {
    if (car2_x<= 700 ) {
        car2_x = car2_x + 10;
        console.log("when right arrow is pressed, x ="+ car2_x + " and y =" + car2_y);
        upload_bg();
        upload_rover();
        upload_rover_2();
    }
}
