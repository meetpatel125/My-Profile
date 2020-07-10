const filterButton = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallary").children;
// console.log(items);

for(let i=0; i<filterButton.length; i++){
    filterButton[i].addEventListener("click",function(){
for (let j = 0; j < filterButton.length; j++) {
   
    filterButton[j].classList.remove("active");
}
this.classList.add("active");
// console.log(this.getAttribute("data-target"))

const target = this.getAttribute("data-target")

for (let k = 0; k < items.length; k++) {
    //  items[K].style.display="none";
        items[k].style.display="none";
    
        if (target == items[k].getAttribute("data-id")) {
        items[k].style.display="block";
    }
    if (target == "all") {
        items[k].style.display="block";

        
    }
    
}



    })
}





const closelightbox = document.querySelector(".close-lightbox");

const lightbox = document.querySelector(".lightbox");

const lightboximg = lightbox.querySelector("img");

lightbox.addEventListener("click",function(){
    if (event.target != lightboximg) {
        lightbox.classList.remove("show");
    lightbox.classList.add("hide");
    }
})

closelightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");

})


const gallary = document.querySelector(".portfolio-gallary");
const gallaryitem = gallary.querySelectorAll(".item");

gallaryitem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboximg.src=element.querySelector("img").getAttribute("src");
    })
})




// testimonial slider 
// const sliderContainer=document.querySelector(".testi-slider");

//  const slides=sliderContainer.children; 
//  console.log(slides)

//  const containerWidth = sliderContainer.offsetWidth; 
//  console.log(containerWidth)


//  const margin = 30;
//  let itemPerSlide = 0; 
 
// responsive 

// const responsive= [
//      {breakPoint:{width:0,item:1}}, {breakPoint:{width:991, item:2}}
//       ]

// function load(){ 
//     // console.log("call") 
//     for (let i=0; i<responsive.length; i++){
//     if(window.innerWidth>responsive[i].breakPoint.width){
//           itemPerSlide=responsive[i].breakPoint.item;
//     }
    // console.log(window.innerWidth)
// }
// console.log("item:" + itemPerSlide)

// start();
// // }

// function start(){
//     totalwidth = 0;
//     for (let i = 0; i < slides.length; i++) {
        // console.log(slides)
    //     slides[i].style.width= (containerWidth/itemPerSlide)-margin + "px";
    //     slides[i].style.margin = margin/2 +  "px";

    //     totalwidth += containerWidth/itemPerSlide + "px";
    // }
    // sliderContainer.style.width = totalwidth + "px";

    // const slideDots = Math.ceil(slides.length/itemPerSlide);
//    console.log(slideDots);


//     for (let i = 0; i < slideDots; i++) {
//         const div = document.createElement("div");
//         div.id=i;
//         div.setAttribute("onclick","controlSlide(this)")
//         if (i==0) {
//             div.classList.add("active");
            
//         }
//         document.querySelector(".slide-controls").appendChild(div);
//     }

// }

// let currentSlide = 0;

// function controlSlide(element){
//     currentSlide=element.id;
//     changeSlide(currentSlide)
// }

// function changeSlide(currentSlide) {
//     controlButtons =document.querySelector(".slide-controls").children;

//     for (let i = 0; i < controlButtons.length; i++) {
//      if (controlButtons[i].id==currentSlide) {
//         controlButtons[i].classList.add("active")
//      }else{
//         controlButtons[i].classList.remove("active")

//      }

//     controlButtons[i].classList.remove("active")
        
//     }

//     controlButtons[i].classList.add("active")

// }

// window.onload = load();



// header fixed


window.onscroll=function(){
    // console.log(document.documentElement.scrollTop);


    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth>991) {
        if (docScrollTop>100) {
            document.querySelector("header").classList.add("fixed")
        }else{
            document.querySelector("header").classList.remove("fixed")
        }
        
    }
}

const navbar = document.querySelector(".navbar");

a = navbar.querySelectorAll ("a");

a.forEach(function(element){
    element.addEventListener("click",function(){
        for (let i = 0; i < a.length; i++) {
           a[i].classList.remove("active");
            
        }
        this.classList.add("active")

        document.querySelector(".navbar").classList.toggle("show");
    })
})


// hab burger

const hamburger = document.querySelector(".ham-burger");

hamburger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})



// 


mybutton = document.getElementById("mybtn");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






