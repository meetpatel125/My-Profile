
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(() =>{

    document.querySelector(".preloader").style.display="none";

    },1000)
})




const filtercontainer = document.querySelector(".portfolio-filter"),
filterbtns = filtercontainer.children,
totalfilterbtn = filterbtns.length,
portfolioitems = document.querySelectorAll(".portfolio-item"),
totalportfolioitem = portfolioitems.length;

for (let i = 0; i < totalfilterbtn; i++) {
    
    filterbtns[i].addEventListener("click",function(){
        filtercontainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filtervalue = this.getAttribute("data-filter");
        for(let  k= 0;  k< totalportfolioitem; k++) {
            if (filtervalue === portfolioitems[k].getAttribute("data-category")) {
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");
                
            }
            else{
                portfolioitems[k].classList.remove("show");
                portfolioitems[k].classList.add("hide");
            }
            if (filtervalue === "all") {
                portfolioitems[k].classList.remove("hide");
                portfolioitems[k].classList.add("show");
            }
        }


    })
    
}



// Portfolio lightbox

const lightbox = document.querySelector(".lightbox"),
lightboximg = lightbox.querySelector(".lightbox-img"),
lightboxclose=lightbox.querySelector(".lightbox-close");
lightboxtext = lightbox.querySelector(".caption-text"),
lightboxcounter = lightbox.querySelector(".caption-counter");
let itemindex = 0;

for (let i = 0; i < totalportfolioitem; i++) {
    portfolioitems[i].addEventListener("click",function(){
        itemindex=i;
        changeitem();
        togglelightbox();
    })
    
    
}

function nextitem(){
    if (itemindex === totalportfolioitem-1) {
        itemindex = 0;
    } else {
        itemindex++;
    }
    changeitem();
}

function previtem(){
    if (itemindex === 0) {
        itemindex = totalportfolioitem-1;
    } else {
        itemindex--;
    }
    changeitem();
}

function togglelightbox(){
    lightbox.classList.toggle("open");
}

function changeitem(){
    imgsrc = portfolioitems[itemindex].querySelector(".portfolio-img img").getAttribute("src");
    lightboximg.src = imgsrc;
    lightboxtext.innerHTML = portfolioitems[itemindex].querySelector("h4").innerHTML;
    lightboxcounter.innerHTML=(itemindex+1) + "of" + totalportfolioitem;
}


// close lightbox

lightbox.addEventListener("click",function(event){

if (event.target === lightboxclose || event.target === lightbox) 
{   
    togglelightbox();
    
}

})

// Aside Navbar

const nav= document.querySelector(".nav"),
navlist = nav.querySelectorAll("li"),
totalnavlist = navlist.length,
allsection = document.querySelectorAll(".section"),
totalsection = allsection.length;

for (let i = 0; i < totalnavlist; i++) {
    const a = navlist[i].querySelector("a");

    // Reemove back section class

   removebacksectionclass();


    a.addEventListener("click", function(){
        for (let j = 0; j < totalnavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {

                // Add bakc section class
                addbacksectionclass(j);
            }
            navlist[j].querySelector("a").classList.remove("active");
            
        }

        this.classList.add("active");

        showsection(this);

        if (window.innerWidth < 1200) {
           asidesectiontogglerbtn();
            
        }
    })

}


function removebacksectionclass(){
    for (let i = 0; i < totalsection; i++) {
        
        allsection[i].classList.remove("back-section")
    }
}
                function addbacksectionclass(num){
                    allsection[num].classList.add("back-section");
                }
    function showsection(element){
        for (let i = 0; i < totalsection; i++) {
            
            allsection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];

        document.querySelector("#"+target).classList.add("active")

    }

    function updatenav(element){
for (let i = 0; i < totalnavlist; i++) {

            navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navlist[i].querySelector("a").classList.add("active");
        
    }
    
}
    }

    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionindex = this.getAttribute("data-section-index");
           showsection(this);
           updatenav(this);
           removebacksectionclass();
           addbacksectionclass(sectionindex);
    })
    


const navtogglerbtn = document.querySelector(".nav-toggler"),aside = document.querySelector(".aside");

navtogglerbtn.addEventListener("click",() =>{
    asidesectiontogglerbtn();
})


function asidesectiontogglerbtn(){
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for (let i = 0; i < totalsection; i++) {
            
        allsection[i].classList.toggle("open")
    }
}
