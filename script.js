const iframe = document.getElementById('myIframe');

function adjustIframeHeight() {
  const windowHeight = window.innerHeight;
  const newIframeHeight = windowHeight * 0.4; // Adjust the multiplier as needed
  iframe.style.height = newIframeHeight + 'px';
}

// Initial adjustment
adjustIframeHeight();

// Adjust on window resize
window.addEventListener('resize', adjustIframeHeight);
