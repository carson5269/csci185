const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];

let idx = 0;

/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/

const currentPhotoContainer = document.querySelector('.current-photo img');
const captionParagraph = document.querySelector('.caption');

function showImage() {
    console.log('Show image');
    currentPhotoContainer.src = photos[idx];
    const currentImageIndex = idx + 1;
    const totalImages = photos.length;
    captionParagraph.textContent = 'Image ' + currentImageIndex + ' of ' + totalImages;
}

/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/

function forward() {
    console.log('forward');
    idx++;
    if (idx >= photos.length) {idx = 0;}
    showImage();
}

/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/

function back() {
    console.log('back');
    idx--;
    if (idx < 0) {idx = photos.length - 1;}
    showImage();
}