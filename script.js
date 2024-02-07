// make the opacity of the navbar change

const primaryHeader = document.querySelector(".header")
const scrollwatcher = document.createElement("div");

scrollwatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollwatcher);

const navObserver = new IntersectionObserver((entries)=> 

{
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)

}   
);

navObserver.observe(scrollwatcher)

// change the navbar on mobile devices

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

//  adjust the scroll of the navbar 

const navigationHeight = document.querySelector('.header').offsetHeight;

document.documentElement.style.setProperty('--scroll-pading', navigationHeight+"px");

//  adjust the padding of her o section and the header on different screen size
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const headerHeight = header.offsetHeight;

    hero.style.paddingTop = headerHeight + 'px';
    hero.style.marginTop = -headerHeight + 'px';
    hero.style.height = `calc(90vh + ${headerHeight}px)`;
});

// button filter:
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class to the filtered elements, and remove from the others
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    if (arr1.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

// Hide elements not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    while (arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1);     
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("gallery");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Initially show all items
window.onload = function() {
    filterSelection('all');
}