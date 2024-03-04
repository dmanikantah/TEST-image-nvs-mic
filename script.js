const images = {
    "image1": "",
    "image2": "",
    "image3": "",
    "image4": "",
    "image5": "",
   "image6": "",
    // Add more image names and paths as needed
};

function searchImage() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');

    if (images.hasOwnProperty(searchInput)) {
        const imagePath = images[searchInput];
        const imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } else {
        imageContainer.innerHTML = '<p>No image found</p>';
    }
}
