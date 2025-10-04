//get the current year

function currentyear(){
    var date = new Date();
    var year = date.getFullYear();
    document.querySelector("#displayYear").innerHTML = year;
}
function smooth(){
 //smooth scrolling

const navLinks = document.querySelector('.space');//Select all navigation links with class "space"

navLinks.forEach(link=> {
    link.addEventListener('click', function(event){
        event.preventDefault();//prevent deault jumping behaviour
        
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
                targetElement.scrollIntoView({ behaviour:'smooth'});// Smooth scroll to target element
            }
    });
   
});
}


currentyear()
smooth()