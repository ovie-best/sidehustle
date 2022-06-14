//enabling slide movement on click of any of the slider buttons
var slidebutton = document.getElementsByClassName("bar");
var slide = document.getElementById("sliderow");
var testiback = document.getElementById("testiback");

slidebutton[0].onclick = function () {
    slide.style.transform = "translateX(0)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[1].onclick = function () {
    slide.style.transform = "translateX( " + (-5) + "%)"; //incrementing translateX Y poition in js
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[2].onclick = function () {
    slide.style.transform = "translateX(-10%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[3].onclick = function () {
    slide.style.transform = "translateX(-15%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[4].onclick = function () {
    slide.style.transform = "translateX(-20%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[5].onclick = function () {
    slide.style.transform = "translateX(-25%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[6].onclick = function () {
    slide.style.transform = "translateX(-30%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[7].onclick = function () {
    slide.style.transform = "translateX(-35%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[8].onclick = function () {
    slide.style.transform = "translateX(-40%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[9].onclick = function () {
    slide.style.transform = "translateX(-45%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[10].onclick = function () {
    slide.style.transform = "translateX(-50%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[11].onclick = function () {
    slide.style.transform = "translateX(-55%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[12].onclick = function () {
    slide.style.transform = "translateX(-60%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[13].onclick = function () {
    slide.style.transform = "translateX(-65%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[14].onclick = function () {
    slide.style.transform = "translateX(-70%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[15].onclick = function () {
    slide.style.transform = "translateX(-75%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[16].onclick = function () {
    slide.style.transform = "translateX(-80%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

slidebutton[17].onclick = function () {
    slide.style.transform = "translateX(-85%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(0, 190, 126)";
}

slidebutton[18].onclick = function () {
    slide.style.transform = "translateX(-90%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(3, 84, 173)";
}

slidebutton[19].onclick = function () {
    slide.style.transform = "translateX(-95%)";
    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    this.classList.add("active");
    testiback.style.backgroundColor = "rgb(65, 155, 218)";
}

//animating slides in js
var position = 0;
var animate = setInterval(frame, 5000);

//assigning slide number values for each of the 2 background colours, any diff value from them gets the 3rd backgrd
var backgd1 = [0,3,6,9,12,15,18];
var backgd2 = [1,4,7,10,13,16,19];

//assigning arrow buttons to var

function frame() {
    if (position == 19) {
        
        position = position - 19;
        slide.style.transform = "translateX(" + (position * -5) + "%)";

        //removes active class from all sliderbar
        for (i = 0; i < 20; i++) {
            slidebutton[i].classList.remove("active");
        }
        //adds active class to current sliderbar given current position variable value
        slidebutton[position].classList.add("active");

        //testing which slide position is currently in veiw and assigning background
        if (backgd1.includes(position)) {
            testiback.style.backgroundColor = "rgb(3, 84, 173)";
        } else if (backgd2.includes(position)) {
            testiback.style.backgroundColor = "rgb(65, 155, 218)";
        } else {
            testiback.style.backgroundColor = "rgb(0, 190, 126)";
        }

    } else {
        position++;
        slide.style.transform = "translateX(" + (position * -5) + "%)";

        //removes active class from all sliderbar
        for (i = 0; i < 20; i++) {
            slidebutton[i].classList.remove("active");
        }
        //adds active class to current sliderbar given current position variable value
        slidebutton[position].classList.add("active");

        //testing which slide position is currently in veiw and assigning background
        if (backgd1.includes(position)) {
            testiback.style.backgroundColor = "rgb(3, 84, 173)";
        } else if (backgd2.includes(position)) {
            testiback.style.backgroundColor = "rgb(65, 155, 218)";
        } else {
            testiback.style.backgroundColor = "rgb(0, 190, 126)";
        }
    
    }
     
}

