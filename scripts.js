//////////////// CURTAIN MENU /////////////////////////////////
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


//////// BACK TO TOP BUTTON //////////////////////////

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//////////////// CHARTS /////////////////////////////////
  //   var ctx = document.getElementById('myChart').getContext('2d');
  //   var chart = new Chart(ctx, {
  //   // The type of chart we want to create
  //   type: 'line',
  //
  //   // The data for our dataset
  //   data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //       datasets: [{
  //           label: 'My First dataset',
  //           backgroundColor: 'rgb(255, 99, 132)',
  //           borderColor: 'rgb(255, 99, 132)',
  //           data: [0, 10, 5, 2, 20, 30, 45]
  //       }]
  //   },
  //
  //   // Configuration options go here
  //   options: {}
  // });
