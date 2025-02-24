

$(document).ready(function() {

    $(".burger img").click(function(event) {
        var menu = $("#burger-menu-content");
        
        // Toggle the menu visibility
        if (menu.is(":visible")) {
            menu.hide(); // Hide the menu if it's already visible
        } else {
            menu.show(); // Show the menu if it's hidden
        }

        event.stopPropagation(); // Prevent event from bubbling up and triggering the document click
    });

    // Close the burger menu when clicking outside of it
    $(document).click(function(event) {
        var menu = $("#burger-menu-content");
        var burger = $(".burger"); // Burger icon (menu button)

        // Check if the click was outside the menu or burger icon
        if (!burger.is(event.target) && !burger.has(event.target).length && !menu.is(event.target) && !menu.has(event.target).length) {
            menu.hide(); // Hide the menu if clicked outside
        }
    });

    // Viola's Story Slideshow
    let slideIndex = 0;
    let timer;

    function showSlides(n) {
        const slides = $(".mySlides");
        const dots = $(".dot");

        // Remove active class from dots
        dots.removeClass("active");

        // Update slide index and apply transform to shift slides
        slideIndex = n !== undefined ? n - 1 : slideIndex;
        if (slideIndex >= slides.length) slideIndex = 0;

        $(".slideshow-images").css("transform", `translateX(-${slideIndex * 100}%)`);

        // Activate the corresponding dot
        dots.eq(slideIndex).addClass("active");

        // Reset timer for auto slide
        clearTimeout(timer);
        timer = setTimeout(showSlides, 4000);
    }

    // Show the specific slide
    $(".dot").click(function() {
        clearTimeout(timer);
        showSlides($(this).index() + 1);
    });

    // Initialize slideshow
    showSlides();

    // Handle Text Toggle for Responsive Design
        function toggleText() {
            const extraContent = $("#extra-content");
            const toggleBar = $(".toggle-bar");

            extraContent.toggle();
            toggleBar.text(extraContent.is(":visible") ? "Click to Hide" : "Click to View More");
        }

        // Bind the click event to toggleText using jQuery
        $(".toggle-bar").click(toggleText);

    // Resize Handling for Displaying Extra Text
    function handleResize() {
        const extraContent = $("#extra-content");
        const toggleBar = $(".toggle-bar");

        if ($(window).width() > 600) {
            extraContent.show();
            toggleBar.hide();
        } else {
            extraContent.hide();
            toggleBar.show().text("Click to View More");
        }
    }

    // Initial resize handling
    handleResize();

    // Update on window resize
    $(window).resize(handleResize);

    $(".toggle-bar-foundation-staff").click(function() {
        const staffMember = $(this).closest('.staff-member');
        const text = staffMember.find('.text-content-staff-page');
        
        text.toggle();
        $(this).text(text.is(":visible") ? "Click to Hide" : "Click to View More");
    });

    // Handle Resize for Foundation Staff Page
    function handleFoundationResize() {
        const textElements = $(".text-content-staff-page");

        textElements.each(function() {
            const staffMember = $(this).closest('.staff-member');
            const toggleBar = staffMember.find('.toggle-bar');

            if ($(window).width() > 768) {
                if ($(this).is(":hidden")) {
                    $(this).show();
                    toggleBar.text("Click to Hide");
                }
            } else {
                if ($(this).is(":visible")) {
                    $(this).hide();
                    toggleBar.text("Click to View More");
                }
            }
        });
    }

    // Initial resize handling for Foundation Staff Page
    handleFoundationResize();

    // Update on window resize for Foundation Staff Page
    $(window).resize(handleFoundationResize);
});
