const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
});

document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click',()=>{
        navLinks.classList.remove('open');
    });
});


const sections=document.querySelectorAll('section[id]');

window.addEventListener('scroll',()=>{
    let current='';
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-100;
        if(window.scrollY>=sectionTop){
            current=section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link=>{
        link.classList.remove('active');
        if(link.getAttribute('href')===`#${current}`){
            link.classList.add('active');
        }
    });
});



document.getElementById('contactForm').addEventListener('sumbit',function(e){
    e.preventDefault();
    alert('Thank you for your message!  I will get back to you soon.');
    this.reset();
});


