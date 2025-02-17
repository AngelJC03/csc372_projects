
/*******
 * THE CODE BELOW IS FOR THE BURGER MENU
********/



// Select the burger menu
const burgerMenu = document.querySelector('.burger-menu');

// Select the button or element to show the menu
const toggleButton = document.querySelector('.btn'); // Adjust selector as needed

// Add an event listener to toggle the menu
function menutoggle() {
    var menu = document.getElementById("burger-menu-content");
    // Toggle the display of the dropdown
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide dropdown
    } else {
        menu.style.display = "block"; // Show dropdown
    }
}

// Hide the dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var menu = document.getElementById("burger-menu-content");
    var burger = document.querySelector(".burger"); // Burger icon (menu button)

    // Check if the click was outside the menu or burger icon
    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none"; // Hide dropdown if clicked outside
    }
});



/*******
 * JAVASCRIPT FOR VIOLAS STORY SLIDE SHOW
********/



let slideIndex = 0;
let timer;

function showSlides(n) {

    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Remove active class from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Update slide index and apply transform to shift slides
    slideIndex = n !== undefined ? n - 1 : slideIndex;
    if (slideIndex >= slides.length) slideIndex = 0;

    // Update the transform property to scroll through images
    const slideshowContainer = document.querySelector('.slideshow-images');
    slideshowContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Activate the corresponding dot
    dots[slideIndex].classList.add("active");

    // Reset timer for auto slide
    clearTimeout(timer);
    timer = setTimeout(() => showSlides(), 4000);
}

function currentSlide(n) {
    clearTimeout(timer); // Stop auto-cycling when user interacts
    showSlides(n);
}

// Initialize the slideshow
showSlides();



/*******
 * THE CODE BELOW IS FOR MAKING VIOLAS STORY RESPONSIVE 
********/



function toggleText() {
    var extraContent = document.getElementById("extra-content");
    var toggleBar = document.querySelector(".toggle-bar");

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        toggleBar.innerHTML = "Click to Hide";
    } else {
        extraContent.style.display = "none";
        toggleBar.innerHTML = "Click to View More";
    }
}

function handleResize() {
    var extraContent = document.getElementById("extra-content");
    var toggleBar = document.querySelector(".toggle-bar");

    if (window.innerWidth > 600) {
        // Show all text on larger screens
        extraContent.style.display = "block";
        toggleBar.style.display = "none";
    } else {
        // Hide extra text and enable toggle for small screens
        extraContent.style.display = "none";
        toggleBar.style.display = "block";
        toggleBar.innerHTML = "Click to View More";
    }
}

// Run once on page load
window.onload = handleResize;

// Run on window resize
window.onresize = handleResize;

function toggleText() {
            var toggleBar = event.target;  // Get the clicked toggle bar
            var staffMember = toggleBar.closest('.staff-member');  // Find the closest staff-member div
            var text = staffMember.querySelector('.text-content');  // Find the h1 inside this staff member
            
            if (text.style.display === "none" || text.style.display === "") {
                text.style.display = "block";  // Show the text
                toggleBar.innerHTML = "Click to Hide";  // Change the bar text
            } else {
                text.style.display = "none";  // Hide the text
                toggleBar.innerHTML = "Click to View More";  // Reset the bar text
            }
        }
        
        function handleResize() {
            var textElements = document.querySelectorAll('.text-content');  // Get all the text elements
        
            // Loop through each text element to handle its visibility
            textElements.forEach(function(text) {
                // Find the closest staff member div for the text element
                var staffMember = text.closest('.staff-member');  
        
                if (!staffMember) {
                    console.log("No staff member found for this text element");
                    return; // Skip this iteration if no staff member is found
                }
        
                // Find the corresponding toggle bar within this staff member
                var toggleBar = staffMember.querySelector('.toggle-bar');  
        
                if (!toggleBar) {
                    console.log("No toggle bar found for this staff member");
                    return; // Skip this iteration if toggle bar is not found
                }
        
                // Check if the screen width is greater than 475px
                if (window.innerWidth > 768) {
                    // If the text is hidden, show it and update the toggle bar text
                    if (text.style.display === "none" || text.style.display === "") {
                        text.style.display = "block";  // Show the text content
                        toggleBar.innerHTML = "Click to Hide";  // Update the toggle bar text
                    }
                }
        
                // If the screen width is less than or equal to 475px, hide the text and update the toggle bar
                if (window.innerWidth <= 768) {
                    // If the text is visible, hide it and update the toggle bar text
                    if (text.style.display === "block") {
                        text.style.display = "none";  // Hide the text content
                        toggleBar.innerHTML = "Click to View More";  // Update the toggle bar text
                    }
                }
            });
        }
        
        // Add an event listener to trigger handleResize when the window is resized
        window.addEventListener('resize', handleResize);
        
        // Optionally, you can call handleResize initially to apply the correct layout on page load
        handleResize();



        /**************
         * 
         * THE CODE BELOW IS FOR FOUNDATION STAFF PAGE
         * 
         *******/

        function toggleText() {
            var toggleBar = event.target;  // Get the clicked toggle bar
            var staffMember = toggleBar.closest('.staff-member');  // Find the closest staff-member div
            var text = staffMember.querySelector('.text-content');  // Find the h1 inside this staff member
            
            if (text.style.display === "none" || text.style.display === "") {
                text.style.display = "block";  // Show the text
                toggleBar.innerHTML = "Click to Hide";  // Change the bar text
            } else {
                text.style.display = "none";  // Hide the text
                toggleBar.innerHTML = "Click to View More";  // Reset the bar text
            }
        }
        
        function handleResize() {
            var textElements = document.querySelectorAll('.text-content');  // Get all the text elements
        
            // Loop through each text element to handle its visibility
            textElements.forEach(function(text) {
                // Find the closest staff member div for the text element
                var staffMember = text.closest('.staff-member');  
        
                if (!staffMember) {
                    console.log("No staff member found for this text element");
                    return; // Skip this iteration if no staff member is found
                }
        
                // Find the corresponding toggle bar within this staff member
                var toggleBar = staffMember.querySelector('.toggle-bar');  
        
                if (!toggleBar) {
                    console.log("No toggle bar found for this staff member");
                    return; // Skip this iteration if toggle bar is not found
                }
        
                // Check if the screen width is greater than 475px
                if (window.innerWidth > 768) {
                    // If the text is hidden, show it and update the toggle bar text
                    if (text.style.display === "none" || text.style.display === "") {
                        text.style.display = "block";  // Show the text content
                        toggleBar.innerHTML = "Click to Hide";  // Update the toggle bar text
                    }
                }
        
                // If the screen width is less than or equal to 475px, hide the text and update the toggle bar
                if (window.innerWidth <= 768) {
                    // If the text is visible, hide it and update the toggle bar text
                    if (text.style.display === "block") {
                        text.style.display = "none";  // Hide the text content
                        toggleBar.innerHTML = "Click to View More";  // Update the toggle bar text
                    }
                }
            });
        }
        
        // Add an event listener to trigger handleResize when the window is resized
        window.addEventListener('resize', handleResize);
        
        // Optionally, you can call handleResize initially to apply the correct layout on page load
        handleResize();