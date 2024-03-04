const images = {
    "Aclasta": "https://github.com/dmanikantah/TEST-image-nvs-mic/blob/main/Aclasta.jpg",
    "Adelphane": "https://github.com/dmanikantah/TEST-image-nvs-mic/blob/main/Adelphane.jpg",
    "Afinitor": "https://github.com/dmanikantah/TEST-image-nvs-mic/blob/main/Afinitor.jpeg",
    "Amturnide": "https://github.com/dmanikantah/TEST-image-nvs-mic/blob/main/Amturnide.jpg",
    "Anafranil": "https://github.com/dmanikantah/TEST-image-nvs-mic/blob/main/Anafranil.jpg",

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
