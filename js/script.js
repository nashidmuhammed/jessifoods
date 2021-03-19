/*load*/
console.log("ready")


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mob_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mob_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 100){
        header.style.backgroundColor = '#fff';
        $("#header").css("box-shadow", "0 .125rem .25rem rgba(0, 0, 0, 0.350)");
    }else{
        header.style.backgroundColor = 'transparent'
        $("#header").css("box-shadow", "none");
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=> {
        hamburger.classList.toggle('active');
        mob_menu.classList.toggle('active');
    });
});

$(".caro").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });

  
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    console.log("Entered") 
    $("#cont .btn-std").hide()   
    $(".subload").show()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbw_WDn6uhFAlZ1IcJRM844fn8P644_5rpKQdNyFoYXNA_TvDVzOPHxoQg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
          $(".contact .btn-std").show()   
          $(".subload").hide()
          $("#success_alert").modal()
        },
        error:function (err){
          $(".contact .btn-std").show()   
          $(".subload").hide()
          $("#error_alert").modal()

        }
    })
  })

 $(document).ready(function(){
  $(".close").click(function(){
    window.location.reload()
  })
  $(".clos").click(function(){
    window.location.reload()
  })
 })
  console.log("end")