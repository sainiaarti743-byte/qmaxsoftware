function HideDialog() {
    $("#popupOverlay").fadeOut(400), $("#onload_popup").fadeOut(300);
}
$(document).ready(function() {
    // Check if the popup has already been shown in this session
    if (!JSON.parse(sessionStorage.getItem("popupShown"))) {
        if (!$(".thankyou-content-wrapper").hasClass("has-thank-you")) {
            // Show the popup
            $("#popupOverlay").delay(1800).fadeIn(400);
            $("#onload_popup").delay(2000).fadeIn(400);

            // Set the sessionStorage flag to indicate the popup has been shown
            sessionStorage.setItem("popupShown", "true");

            // Close the popup when the close button is clicked
            $("#btnClose").click(function(e) {
                HideDialog();
                e.preventDefault();
            });
        }
    }
});

// country

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


//   faq
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
        faq.classList.toggle("active");

        // Close others when one opens
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });
    });
});


// owl slider

$(document).ready(function() {
    const $carousel = $("#testimonialCarousel");

    $carousel.owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 18,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 600,
        nav: false, // we'll use custom nav
        dots: true,
        responsive: {
            0: {
                items: 1,
                center: false,
            }, // single item on small screens (no center mode)
            640: {
                items: 1,
                center: true,
            },
            900: {
                items: 3,
                center: true,
            },
        },
    });

    // Hook custom prev/next buttons
    $("#prevBtn").on("click", function() {
        $carousel.trigger("prev.owl.carousel");
    });
    $("#nextBtn").on("click", function() {
        $carousel.trigger("next.owl.carousel");
    });

    // Ensure blur classes update (Owl adds/updates 'center' automatically).
    // Small safety: after init, force a refresh so classes settle
    $carousel.on("initialized.owl.carousel changed.owl.carousel", function(e) {
        // no-op here because CSS targets .center automatically, but this is a good spot
        // for additional JS-based tweaks if you need.
    });
});

// read more faqs