'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let nbImg= 0;

const imagesSlider = [
                    ["/1.jpg", "Fresque"], 
                    ["/2.jpg", "pont"],
                    ["/3.jpg", "building"],
                    ["/4.jpg", "immeuble"],
                    ["/5.jpg", "cyberpunk"],
                    ["/6.jpg", "paris"]
                ];

let img = document.getElementById("slider-img");
let imgdesc = document.getElementById("img-desc");

let autoSlider = false;

let timer;

var previousBtn = document.querySelector("#slider-previous");

var nextBtn = document.querySelector("#slider-next");

var toggleBtn = document.querySelector("#slider-toggle");

var randomBtn = document.querySelector("#slider-random");

var barreoutils = document.querySelector(".toolbar-toggle")

var outilsBtn = document.querySelector(".toolbar-btn");

var flecheBtn = document.querySelector(".bo-arrow")

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function playImgSlider(){
    timer = setInterval(function(){
        if(autoSlider){
            if(nbImg == imagesSlider.length-1){
                nbImg = 0;
            }else{
                nbImg++;
            }
            img.src = "images" + imagesSlider[nbImg][0]
            imgdesc.innerHTML = imagesSlider[nbImg][1]
            
        }
    }, 2000)
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
playImgSlider();

// $(document).ready(function () {
//     $(".toolbar-toggle").click(function () {
//       $(".toolbar-btn").toggleClass("hidden");
//       $(".bo-arrow").toggleClass("fa-arrow-down");
//       $(".bo-arrow").toggleClass("fa-arrow-up");
//     });
//   });

barreoutils.addEventListener('click', function(){
    if(outilsBtn.classList.contains('hidden')){
        outilsBtn.classList.remove('hidden')
        flecheBtn.classList.remove('fa-arrow-down')
        flecheBtn.classList.add('fa-arrow-up')
    }else{
        outilsBtn.classList.add('hidden')
        flecheBtn.classList.add('fa-arrow-down')
        flecheBtn.classList.remove('fa-arrow-up')
    }
})

  document.addEventListener('keydown', (e) =>{
    switch(e.key){
        case "ArrowLeft":
            previousImgSlider()
            break;
        case "ArrowRight":
            nextImgSlider()
            break;
        case " ":
            btnTogglePlayStop()
            break;
    }
  })

nextBtn.addEventListener('click', function(){
    
    for (let i = 0; i < imagesSlider.length; i++) {
        let tempsrc = img.src
        tempsrc = tempsrc.substring(tempsrc.lastIndexOf('/'))
        if(imagesSlider[i] == tempsrc){
            nbImg = i;
        }
    }

    if(nbImg == imagesSlider.length-1){
        nbImg = 0;
    }else{
        nbImg++;
    }

    img.src = "images" + imagesSlider[nbImg][0]
    imgdesc.innerHTML = imagesSlider[nbImg][1]
})

previousBtn.addEventListener('click', function(){

    for (let i = 0; i < imagesSlider.length; i++) {
        let tempsrc = img.src
        tempsrc = tempsrc.substring(tempsrc.lastIndexOf('/'))

        if(imagesSlider[i] == tempsrc){
            nbImg = i;
        }

    }

    if(nbImg == 0){
        nbImg = imagesSlider.length-1;
    }else{
        nbImg--;
    }

    img.src = "images" + imagesSlider[nbImg][0]
    imgdesc.innerHTML = imagesSlider[nbImg][1]
})

toggleBtn.addEventListener('click', function(){
    $(".bo-playstop").toggleClass("fa-play");
    $(".bo-playstop").toggleClass("fa-stop");
    if(autoSlider == false){
        autoSlider = true;
    }else{
        autoSlider = false;
    }
})

randomBtn.addEventListener('click', function(){
    let tempImg = Math.floor(Math.random() * imagesSlider.length)
    while(imagesSlider[nbImg][0] == tempImg){
        tempImg = Math.floor(Math.random() * imagesSlider.length)
    }
    img.src = "images" + imagesSlider[tempImg][0]
    imgdesc.innerHTML = imagesSlider[tempImg][1]
})