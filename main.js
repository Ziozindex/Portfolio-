const music = document.getElementById('background-music');
const musicControl = document.querySelector('.music-control');
let isMusicPlaying = false;
let isMusicTriggeredByScroll = false;

function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
    musicControl.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    music.play();
    musicControl.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isMusicPlaying = !isMusicPlaying;
}

// Autoplay music when the user scrolls a bit
window.addEventListener('scroll', function() {
  if (!isMusicTriggeredByScroll && window.scrollY > 5) { // Adjust scroll distance as needed
    music.play().then(() => {
      isMusicPlaying = true;
      musicControl.innerHTML = '<i class="fas fa-pause"></i>';
      isMusicTriggeredByScroll = true;
    }).catch(error => {
      console.log("Autoplay was prevented. User interaction is required to start the music.");
    });
  }
});

// Stagger animation for projects and animate title on page load
window.onload = function() {
  const projects = document.querySelectorAll('.project');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
  });

  const titleChars = document.querySelectorAll('.animated-title span');
  titleChars.forEach((char, index) => {
    char.style.animationDelay = `${index * 0.1}s`;
  });
}
