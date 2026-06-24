const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            element.classList.add("active");
        }

    });

});