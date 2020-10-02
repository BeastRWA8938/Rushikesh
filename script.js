
// Get the navbar
var navbar = document.getElementById("head");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;



window.onscroll = function() {
    if ( window.pageYOffset > 800 ) {
        // nav.classList.add("navbar1");
        console.log("pagecorss")
        navbar.classList.add("spread")
    } else {
        navbar.classList.remove("spread")
    }
}

// var about_active = document.getElementById("about_m");

// // Get the offset position of the navbar
// var sticky_a = about_active.offsetTop;



// window.onscroll = function() {
//     if ( window.pageYOffset > 1000 ) {
//         // nav.classList.add("navbar1");
//         console.log("pagecorss")
//         about_active.classList.add("about_text_active")
//     } else {
//         about_active.classList.remove("about_text_active")
//     }
// }