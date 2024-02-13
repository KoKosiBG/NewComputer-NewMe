document.addEventListener('DOMContentLoaded', function() {
    let backButton = document.getElementById("back");
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        goBack();
    });
});

function goBack() {
    let previousPageURL = document.referrer;
    if (previousPageURL) {
        window.location.href = previousPageURL;
    } else {
        // If there is no referrer, go to the home page or any default page
        window.location.href = "index.html";
    }
}