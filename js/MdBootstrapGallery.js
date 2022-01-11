const mdGallery = document.getElementById("mdGalleryModal");
const mdGalleryImage = document.getElementById("mdGalleryImage");

const openMdGallery = (imagePath) => {
  mdGalleryImage.setAttribute("src", imagePath);
  mdGallery.style = "display: flex;";
};

const closeMdGallery = () => {
  mdGallery.style = "display: none;";
  mdGalleryImage.setAttribute("src", "");
};
