const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch (error) {
        console.error('Failed to get media stream:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button when clicked
    button.disabled = true;

    await videoElement.requestPictureInPicture(); // Start Picture-in-Picture mode
    
    // Reset button  
    button.disabled = false; 
});

// On Load
selectMediaStream();
