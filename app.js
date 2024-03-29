const menuToggle = document.querySelector('.toggle');
const hamCheckbox = document.getElementById('ham');
const navMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('nav a');
const lis = document.querySelectorAll('#menu ul li');

menuToggle.addEventListener('click', () =>{
    if (!navMenu.classList.contains("active")) {
        navMenu.classList.add("active");
        navMenu.style.transform = 'translateY(0)';
        menuToggle.querySelector('span:nth-child(1)').style.width = '40px';
        menuToggle.querySelector('span:nth-child(1)').style.transform = 'translateY(0px) rotate(45deg)';
        menuToggle.querySelector('span:nth-child(2)').style.width = '40px';
        menuToggle.querySelector('span:nth-child(2)').style.transform = 'translateY(0px) rotate(315deg)';
        menuToggle.querySelector('span:nth-child(3)').style.transform = 'translateX(60px)';
        navLinks.forEach(link => {
        link.style.opacity = 1;
        // link.style.transition = 'ease-in-out 2s';
        });
        lis.forEach(function(li) {
          setTimeout(function() {
          li.classList.add('slide-from-right');
        }, 300);
      });
      } else {
        setTimeout(function() {
        menu.classList.remove("active");
        navMenu.style.transform = 'translateY(-200%)';
        menuToggle.querySelector('span:nth-child(1)').style.width = '';
        menuToggle.querySelector('span:nth-child(1)').style.transform = '';
        menuToggle.querySelector('span:nth-child(2)').style.width = '';
        menuToggle.querySelector('span:nth-child(2)').style.transform = '';
        menuToggle.querySelector('span:nth-child(3)').style.transform = '';
      }, 600);
        navLinks.forEach(link => {
        // link.style.opacity = 0;
        // link.style.transition = 'ease-in-out 2s';
        });
        lis.forEach(function(li) {
          li.classList.remove('slide-from-right');
      });
      }
})

