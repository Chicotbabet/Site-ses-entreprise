document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".product-video");

    videos.forEach(video => {
        video.parentElement.addEventListener("mouseenter", () => {
            video.play();
        });

        video.parentElement.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // Remet à zéro quand la souris sort
        });
    });
});
