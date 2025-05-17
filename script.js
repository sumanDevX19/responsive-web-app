const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


const element_container = document.querySelector(".elem-container");
// console.log(element_container);

const fix = document.querySelector("#fixedimage")


element_container.addEventListener('mouseenter', function(){
    fix.style.display = 'block';
})
element_container.addEventListener('mouseleave', function(){
    fix.style.display = 'none';
})








// Image giving

const elems  =  document.querySelectorAll('.element');

elems.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        let image = elem.getAttribute('data-image');
        fix.style.backgroundImage = `url(${image})`
    })
})

// Page 4 image section

let design = document.querySelector("#Design");
let adesign = document.querySelector("#design");

let execution = document.querySelector('#Execution')
let aexecution  = document.querySelector('#execution')

let project = document.querySelector('#Project');
let aproject = document.querySelector("#project")

let imageContainer = document.querySelector(".righthalf");

let desc= document.querySelector('.desc')

project.addEventListener('click', function(){
    let image  = project.getAttribute("data-image")
    console.log(image);
    imageContainer.style.backgroundImage = `url(${image})`

    project.style.right = "2vw";
    aproject.style.color = "white";

    design.style.right = '0';
    adesign.style.color = '#504A45';

    execution.style.right = '0';
    aexecution.style.color = '#504A45';

    desc.innerHTML = '<p>Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.</p>'
})


design.addEventListener('click', function(){
    let image  = design.getAttribute("data-image")
    console.log(image);
    imageContainer.style.backgroundImage = `url(${image})`

    project.style.right = "0";
    aproject.style.color = '#504A45';

    design.style.right = '2vw';
    adesign.style.color = 'white';

    execution.style.right = '0';
    aexecution.style.color = '#504A45';

    desc.innerHTML = '<p>Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</p>'
})


execution.addEventListener('click', function(){
    let image  = execution.getAttribute("data-image")
    console.log(image);
    imageContainer.style.backgroundImage = `url(${image})`

    project.style.right = "0";
    aproject.style.color = "#504A45";

    design.style.right = '0';
    adesign.style.color = '#504A45';

    execution.style.right = '2vw';
    aexecution.style.color = 'white';

    desc.innerHTML = '<p>We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.</p>'
})



// Swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });



  // Mobile Nav Menu

  var menu = document.querySelector('#menu')
  var scr = document.querySelector('.full-scr-mobile')
  var nav_img = document.querySelector('.nav img')
  var flag = 0



  menu.addEventListener('click', function(){
    if(flag===0){
        scr.style.top = '0%'
        nav_img.style.opacity = '0'
        flag++
    } else{
        scr.style.top = '-100%'
        nav_img.style.opacity = 1
        flag--
    }


  })