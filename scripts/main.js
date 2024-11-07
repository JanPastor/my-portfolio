
// Get the modal
var modal = document.getElementById('imageModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");
// Selects all <img> elements that are children of elements with the class "gallery-item"
document.querySelectorAll('.gallery-item img').forEach(image => {
    // This is a click event listener that listens for a user click input on any image in the gallery
    image.onclick = function() {
        // Modal is made visible by changing its display type to "block"
        modal.style.display = "block";
        // The src attribute modalImg is then changes to the current image source that has been clicked
        modalImg.src = this.src;
        // The alt text for the image is set as the inner caption text in the modal
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal (this is another click event listener) that closes the modal container
// or window when the user clicks on the X button to close it
span.onclick = function() {
    // This hides or "exits" the modal.
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
