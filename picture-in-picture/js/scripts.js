const videoElement = document.getElementById('id-video');
const button = document.getElementById('id-button');


// Prompt to select Media Stream
// Pass to video element
// Play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        // Catch Error 
    }
}


button.addEventListener('click', async() => {
    //Disable Button
    button.disabled = true;

    //Start Picture-in-Picture
    await videoElement.requestPictureInPicture();

    //Resest the Button
    button.disabled = false;
});

//On Load
selectMediaStream();