function showDownloadAnimation() {
  const overlay = document.getElementById('animation-overlay');

  // Show the loading overlay
  overlay.style.display = 'flex';

  // Simulate download preparation (5 seconds)
  setTimeout(() => {
    overlay.style.display = 'none'; // Hide spinner
    showCustomAlert(); // Show custom alert instead of browser alert
  }, 5000);
}

function showCustomAlert() {
  const alertBox = document.getElementById('custom-alert');
  alertBox.style.display = 'flex'; // Show the custom alert
}

function closeCustomAlert() {
  const alertBox = document.getElementById('custom-alert');
  alertBox.style.display = 'none'; // Hide the custom alert
  // Redirect to the download link
  window.location.href = 'https://www.mediafire.com/file/mrcz8aa7ji05a2m/Quick_Hack_-_Beginners_Ethical_Hacking_Course_%2528White_Hat%2529.zip/file'; // Replace with your actual link
}
