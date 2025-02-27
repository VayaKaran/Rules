$(document).ready(function() {
    // Fade in each rule one by one with a bounce effect
    $(".fade-item").each(function(index) {
        $(this).hide().delay(500 * index).fadeIn(1000).css("animation", "bounce 1.5s ease-in-out");
    });
});

/* Additional Bounce Animation */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
