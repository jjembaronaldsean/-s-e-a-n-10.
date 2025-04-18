


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





//STARTOF NAV BAR @MEDIA
const toggleButton = document.getElementById('responsivemenuToggleButton');
const navbarLinks = document.querySelector('.navbar-links');
const openIcon = document.querySelector('.openIcon');
const closeIcon = document.querySelector('.closeIcon');

if (toggleButton && navbarLinks && openIcon && closeIcon) {
  toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('open');
    toggleButton.classList.toggle('open'); // Toggle 'open' class on the button itself

    // Toggle visibility of icons based on whether navbarLinks has 'open' class
    if (navbarLinks.classList.contains('open')) {
      openIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
}
//ENDOF NAV BAR @MEDIA





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



//VIEWERS START

fetch('/get_views')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("viewer-count").textContent = data.count;
  })
  .catch(err => console.error('Error loading count:', err));

// Update count (only once per session)
if (!sessionStorage.getItem('viewCounted')) {
  fetch('/update_views', { method: 'POST' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("viewer-count").textContent = data.count;
      sessionStorage.setItem('viewCounted', 'true');
    })
    .catch(err => console.error('Error updating count:', err));
}

/*CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0
);

-- Insert initial value
INSERT INTO views (count) VALUES (0);*/

 // You can remove this if you don't need real-time updates
 // setInterval(updateViewerCount, 1000); // Update every second 

// END OF VIEWERS







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






//START OF GAMES

//search

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
      // Perform the search action here
      console.log('Searching for:', searchTerm);
      // Example: Redirect to a search results page
      // window.location.href = '/search?q=' + encodeURIComponent(searchTerm);
    }
  });

    searchInput.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            searchButton.click();
        }
    });

});
//search

  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('image-slider');
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Set the interval for auto-rotation (e.g., every 3 seconds)
    setInterval(nextSlide, 3000); // 3000 milliseconds = 3 seconds
  });


//END OF GAMES






/*function add(a, b) {
  return a + b; 
}

let sum = add(5, 3); // sum will be 8
Get a value from a data lookup:

JavaScript

function getUser(id) {
  // (Simplified example)
  if (id === 1) {
    return { name: "John Doe", age: 30 };
  } else {
    return null; 
  }
}

let user = getUser(1); 
Control program flow:

JavaScript

function isEven(num) {
  if (num % 2 === 0) {
    return true; 
  } else {
    return false; 
  }
} */



  // JSON data  START
  let text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// Parse the JSON data
let obj = JSON.parse(text);

// Access the object properties
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;


// JSON data  END








/* opt 1

const detailsLinks = document.querySelectorAll('.details-link');

detailsLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from actually navigating

    const productId = event.target.dataset.productId;
    // Here, you would use JavaScript to fetch more details 
    // for the product with the ID 'productId' (e.g., 'senbono').
    // You could then redirect to a details page, open a modal, etc.
    console.log("Showing details for product ID: " + productId);
    // Example redirect:
    // window.location.href = `/product_details.html?id=${productId}`;
  });
});
*/


  // opt 2  START
function showDetails(productId) {
  // Fetch details for productId (like 'senbono')
  // window.location.href = `/product_details.html?id=${productId}`;
}
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    // Fetch product details based on productId (e.g., using fetch or XMLHttpRequest)
    fetch(`/"https://www.sean10.com/products/${productId}`) // Replace with your API endpoint
      .then(response => response.json())
      .then(product => {
        // Display the product details
        const productDetailsDiv = document.getElementById('product-details');
        productDetailsDiv.innerHTML = `
          <h2>${product.name}</h2>
          <img src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
          `;
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
        const productDetailsDiv = document.getElementById('product-details');
        productDetailsDiv.innerHTML = "<p>Error loading product details.</p>";
      });
  } else {
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = "<p>Product ID not provided.</p>";
  }
// ... (Your existing code)







/* OPT 1 return   <a href="[RETURN_URL]">
<img src ="[IMAGE_SRC]" alt="[ALT_TEXT]"*/
// Window.location.href = '[RETURN_URL]';

/* OPT 2  <img src="[IMAGE_SRC]">  alt "[ALT_TEXT]" onclick="window.location.href = '[RETURN_URL]';">
document.getElementById('myImage').addEventListener('click',function(){
  window.location.href = '[RETURN]';
});*/







