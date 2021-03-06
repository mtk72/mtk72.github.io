// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let currentClass = "current";
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function (thumbnail) {
    largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;
    thumbnail.addEventListener("click", function () {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.dataset.description);

      // Change which image is current
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info
      let galleryInfo       = document.querySelector("#gallery-info");
      let title             = galleryInfo.querySelector(".title");
      let description       = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;

    });
  });
}