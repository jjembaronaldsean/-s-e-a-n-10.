
/*STICKY 
HEADER*/
//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onClick = ()  =>  {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


//scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




  //home , about ,education , skills , contact \\  active offset
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(otherLink => otherLink.classList.remove('active'));
      this.classList.add('active');
    });
  

});

    //activate sections for animation o n scroll//

   //sec.classList.add('show-animate');
   

   //ifwant to use animation that repeats on scroll use //
   //else {
    //sec.classList.remove('show-animate');
  
  //home , about ,education , skills , contact \\  active offset\\



  //sticky header
   window.onscroll = () => {
      


  
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    






    //sticky header\\




 //remove toggle icon and navbar when click navbar links (scroll)


 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');




/*
 // Get the button element (assuming the button has an ID)
const button = document.getElementById("about");  // Replace with actual button ID

// Get the element you want to show/hide (assuming it's inside the "About" section)
const targetElement = document.querySelector("#about .target-element-class");  // Replace with actual selector

// Define the event handler function
function onClick() {
  // Toggle visibility of the target element
  targetElement.classList.toggle("hidden");  // You can replace "hidden" with your desired class for hiding
}

// Add a click event listener to the button
button.addEventListener("click", onClick);
*/









//DOWNLOAD CV FUNCTION 

/*  try-out 1
const downloadButton = document.getElementById("button");

downloadButton.addEventListener("click", () => {
  fetch("/download-cv") // Replace with your server-side script URL
    .then(response => response.blob()) // Get the response as a blob
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "my-cv.pdf"; // Set the desired download filename
      link.click();
    })
    .catch(error => console.error(error));
});*/



  // try-out 2
function downloadFile(url, seanCV) {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = seanCV;

  // Simulate a click on the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Example usage:
 /*function downloadFile(url, seanCV) {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = seanCV;

  // Simulate a click on the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Example usage:
const fileUrl = 'https://seanthedude.com/seanCV.zip';
const fileName = 'seanCV_file.zip';

downloadFile(fileUrl, seanCV);
 

downloadFile(fileUrl, seanCV);
*/

//DOWNLOAD CV FUNCTION END










/*
//readmore with mouseover

const readMoreElement = document.getElementById("read_more");
const infoSpan = document.getElementById("read_more_info");

// Show the tooltip on mouse hover
readMoreElement.addEventListener("mouseover", () => {
  infoSpan.style.display = "block";
});

//Hide the tooltip on mouseout
readMoreElement.addEventListener("mouseout", () => {
  infoSpan.style.display = "none";
});

//readmore end//
*/



//readmore with onclick
//const readMoreBtn = document.getElementById('read_more');
//const readMoreInfo = document.getElementById('read_more_info');

//readMoreBtn.addEventListener('click', function() {
 // readMoreInfo.style.display = readMoreInfo.style.display === 'none' ? 'block' : 'none';
//});


}


/*scroll reveal */

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
  
});




ScrollReveal().reveal(' .heading', { origin:'top' });
ScrollReveal().reveal(' .projects,  .skills-box, .about, .contact-form',{ origin: 'bottom' });



// multi text
const typed = new Typed ('.multi', {
  strings: [  'Im a phone technician', ' Im a computer technician',  'Im a PC video game installer', 'Im a  PC software installer & APPS',  'Im a  video gamer', 'i love softwares', 'friend me at steam.com, we game',],
  typeSpeed:100,
  backSpeed:100,
  backDelay:100,
  loop: true
});

// end of multi text
