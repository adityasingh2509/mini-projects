const imageContainer = document.getElementById('id-image-container');
const loader = document.getElementById('id-loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'ryyqQvDkbzlk85fHOP7HYsf8z-oVk3QjgwnDpzMitRE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create Elements for Links & Photos and ADD to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}


// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
        console.log('ERROR');
    }
}

// On load 
getPhotos();