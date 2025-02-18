
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
  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
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




//  START OF viewers
 // Initialize viewerCount 
// Server (Node.js with Express)
const express = require('express');
const app = express();
const db = require('./db'); // Your database connection

app.get('/update_views', (req, res) => {
  db.query('UPDATE views SET count = count + 1', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating count');
    } else {
      db.query('SELECT count FROM views', (err, result) => { // Get the updated count
        if (err) {
          console.error(err);
          res.status(500).send('Error getting count');
        } else {
          res.json({ count: result[0].count }); // Send back the count as JSON
        }
      });
    }
  });
});

// Client-side JavaScript
fetch('/update_views')
  .then(response => response.json())
  .then(data => {
    document.getElementById("viewer-count").textContent = data.count;
  });

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
  console.log("Showing details for " + productId);
  // You could redirect, open a modal, etc. here.
  // Example redirect:
  // window.location.href = `/product_details.html?id=${productId}`;
}

// ... (Your existing code)

// after the details page
function showDetails(productId) {
  // Redirect to the details page, passing the product ID as a query parameter
  window.location.href = `/product_details.html?id=${productId}`;
}

// ... (Rest of your code)



// server side
const express = require('express');
const app = express();
const port = 3000; // Choose a port

// Sample product data (replace with database query)
const products = {
  "senbono": {
    "name": "SDNWAY Camera",
    "image": "/images/tool box/SDNWAY handheld thermal imaging cam .jpg",
    "description": "Detailed description...",
    "price": 1000000
  },
  // ... more products
};

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products[productId];

  if (product) {
    res.json(product); // Send the product data as JSON
  } else {
    res.status(404).json({ message: 'Product not found' }); // Send a 404 error
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});






// xmel
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();