let player;
const button = document.getElementById('surprise-btn');
const balloonContainer = document.getElementById('balloon-container');
const videoContainer = document.getElementById('video-container');

// Disable the button initially
button.disabled = true;

// Function called when the IFrame Player API is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'MtRAWUGEo', // Replace with your desired video ID
    playerVars: {
      autoplay: 0, // Autoplay is disabled until triggered
      controls: 1, // Show player controls
      modestbranding: 1, // Minimal YouTube branding
    },
    events: {
      onReady: onPlayerReady,
    }
  });
}

// Enable the button when the video player is ready
function onPlayerReady() {
  button.disabled = false;
}

button.addEventListener('click', () => {
  // Release balloons
  for (let i = 0; i < 20; i++) {
    createBalloon();
  }

  // Show the video and play it
  videoContainer.classList.remove('hidden');
  player.playVideo(); // Use the API to play the video
  button.disabled = true; // Disable the button after clicking
});

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // Randomize balloon position and animation delay
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 2;

  balloon.style.left = `${randomX}vw`;
  balloon.style.animationDelay = `${randomDelay}s`;

  balloonContainer.appendChild(balloon);

  // Remove the balloon after the animation
  setTimeout(() => {
    balloon.remove();
  }, 20000);
}
