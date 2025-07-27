// Sample JavaScript file for static file serving demonstration

console.log('🎉 Static JavaScript file loaded successfully!');

// Add some interactive functionality
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, static files are working!');

  // Add a simple click handler to demonstrate JavaScript functionality
  const statusElement = document.querySelector('.status');
  if (statusElement) {
    statusElement.addEventListener('click', function () {
      this.style.transform = 'scale(1.05)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  }

  // Add timestamp to show the file is being served dynamically
  const timestamp = new Date().toLocaleString();
  const footer = document.createElement('p');
  footer.innerHTML = `<small>Page loaded at: ${timestamp}</small>`;
  footer.style.textAlign = 'center';
  footer.style.marginTop = '20px';
  footer.style.color = '#666';

  document.body.appendChild(footer);
});
