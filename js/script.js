




//scroll sections
window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}



// START OF VIEWER COUNT
 // Initialize viewerCount 
  let viewerCount = 0; 

  // Check if there's a stored count in local storage
  if (localStorage.getItem('viewerCount')) {
    viewerCount = parseInt(localStorage.getItem('viewerCount'));
    document.getElementById("viewer-count").textContent = viewerCount; 
  }

  // Update viewer count on page load
  updateViewerCount();

  // Function to update the viewer count
  function updateViewerCount() {
    viewerCount++;
    document.getElementById("viewer-count").textContent = viewerCount;
    localStorage.setItem('viewerCount', viewerCount); 
  }

  // You can remove this if you don't need real-time updates
  // setInterval(updateViewerCount, 1000); // Update every second 
// END OF VIEWER COUNT
