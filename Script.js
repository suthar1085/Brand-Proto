// script.js
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("knowMoreBtn")
    .addEventListener("click", redirectToOtherPage);

  const imageContainer = document.getElementById("imageContainer");

  const images = [
    "./assets/Campaign1.png",
    "./assets/Campaign2.png",
    "./assets/Campaign3.png",
    "./assets/Campaign4.png",
    "./assets/Campaign5.png",
    "./assets/Campaign6.png",
    "./assets/Campaign7.png",
  ];
  let currentIndex = 0;

  function changeImage() {
    const currentImage = imageContainer.querySelector(".image");

    // Set the opacity to 0 immediately
    currentImage.style.opacity = 0;

    // Change the image source
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];

    // Use a setTimeout to apply the fading effect after the image source has changed
    setTimeout(function () {
      // Fade in the new image
      currentImage.style.opacity = 1;
    }, 0);

    setTimeout(changeImage, 2000);
  }

  changeImage();
});

document.addEventListener("DOMContentLoaded", function () {
  const metric1Mini = document.getElementById("metric1-mini");
  const metric1 = document.getElementById("metric1");
  const metric2Mini = document.getElementById("metric2-mini");
  const metric2 = document.getElementById("metric2");
  const metric3Mini = document.getElementById("metric3-mini");
  const metric3 = document.getElementById("metric3");
  const metric4Mini = document.getElementById("metric4-mini");
  const metric4 = document.getElementById("metric4");
  const metric5Mini = document.getElementById("metric5-mini");
  const metric5 = document.getElementById("metric5");
  const metric6Mini = document.getElementById("metric6-mini");
  const metric6 = document.getElementById("metric6");
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");
  const circle1 = document.getElementById("filled-circle-1");
  const nonCircle1 = document.getElementById("non-filled-circle-1");
  const circle2 = document.getElementById("filled-circle-2");
  const nonCircle2 = document.getElementById("non-filled-circle-2");
  const circle3 = document.getElementById("filled-circle-3");
  const nonCircle3 = document.getElementById("non-filled-circle-3");
  const circle4 = document.getElementById("filled-circle-4");
  const nonCircle4 = document.getElementById("non-filled-circle-4");
  const circle5 = document.getElementById("filled-circle-5");
  const nonCircle5 = document.getElementById("non-filled-circle-5");
  const circle6 = document.getElementById("filled-circle-6");
  const nonCircle6 = document.getElementById("non-filled-circle-6");
  metric1Mini.style.display = "none";
  metric1.style.display = "flex";
  metric2.style.display = "none";
  metric2Mini.style.display = "flex";
  metric3.style.display = "none";
  metric3Mini.style.display = "flex";
  metric4.style.display = "none";
  metric4Mini.style.display = "none";
  metric5.style.display = "none";
  metric5Mini.style.display = "none";
  metric6.style.display = "none";
  metric6Mini.style.display = "none";
  backBtn.style.display = "none";
  nextBtn.style.display = "flex";
  circle1.style.display = "flex";
  nonCircle1.style.display = "none";
  nonCircle2.style.display = "flex";
  circle2.style.display = "none";
  nonCircle3.style.display = "flex";
  circle3.style.display = "none";
  nonCircle4.style.display = "flex";
  circle4.style.display = "none";
  nonCircle5.style.display = "flex";
  circle5.style.display = "none";
  nonCircle6.style.display = "flex";
  circle6.style.display = "none";

  var selectedCard = 0;
  document.getElementById("next-btn").addEventListener("click", toggleCards);
  document.getElementById("back-btn").addEventListener("click", toggleCards);
  function toggleCards() {
    if (selectedCard < 5) {
      selectedCard++;
    } else {
      selectedCard = 0;
    }
    console.log(selectedCard);

    switch (selectedCard) {
      case 0:
        metric1Mini.style.display = "none";
        metric1.style.display = "flex";
        metric2.style.display = "none";
        metric2Mini.style.display = "flex";
        metric3.style.display = "none";
        metric3Mini.style.display = "flex";
        metric4.style.display = "none";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "flex";
        backBtn.style.display = "none";
        nonCircle1.style.display = "none";
        circle1.style.display = "flex";
        nonCircle2.style.display = "flex";
        circle2.style.display = "none";
        nonCircle3.style.display = "flex";
        circle3.style.display = "none";
        nonCircle4.style.display = "flex";
        circle4.style.display = "none";
        nonCircle5.style.display = "flex";
        circle5.style.display = "none";
        nonCircle6.style.display = "flex";
        circle6.style.display = "none";
        break;
      case 1:
        metric1.style.display = "none";
        metric1Mini.style.display = "flex";
        metric2Mini.style.display = "none";
        metric2.style.display = "flex";
        metric3.style.display = "none";
        metric3Mini.style.display = "flex";
        metric4.style.display = "none";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "flex";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "flex";
        nonCircle2.style.display = "none";
        circle2.style.display = "flex";
        nonCircle3.style.display = "flex";
        circle3.style.display = "none";
        nonCircle4.style.display = "flex";
        circle4.style.display = "none";
        nonCircle5.style.display = "flex";
        circle5.style.display = "none";
        nonCircle6.style.display = "flex";
        circle6.style.display = "none";
        break;
      case 2:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "flex";
        metric3.style.display = "flex";
        metric3Mini.style.display = "none";
        metric4.style.display = "none";
        metric4Mini.style.display = "flex";
        metric5.style.display = "none";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "flex";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "flex";
        nonCircle2.style.display = "flex";
        circle2.style.display = "none";
        nonCircle3.style.display = "flex";
        circle3.style.display = "flex";
        nonCircle4.style.display = "none";
        circle4.style.display = "none";
        nonCircle5.style.display = "flex";
        circle5.style.display = "none";
        nonCircle6.style.display = "flex";
        circle6.style.display = "none";
        break;
      case 3:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "flex";
        metric4.style.display = "flex";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "flex";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "flex";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "flex";
        nonCircle2.style.display = "flex";
        circle2.style.display = "none";
        nonCircle3.style.display = "flex";
        circle3.style.display = "none";
        nonCircle4.style.display = "none";
        circle4.style.display = "flex";
        nonCircle5.style.display = "flex";
        circle5.style.display = "none";
        nonCircle6.style.display = "flex";
        circle6.style.display = "none";
        break;
      case 4:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "none";
        metric4.style.display = "none";
        metric4Mini.style.display = "flex";
        metric5.style.display = "flex";
        metric5Mini.style.display = "none";
        metric6.style.display = "none";
        metric6Mini.style.display = "flex";
        nextBtn.style.display = "flex";
        backBtn.style.display = "none";
        circle1.style.display = "none";
        nonCircle1.style.display = "flex";
        nonCircle2.style.display = "flex";
        circle2.style.display = "none";
        nonCircle3.style.display = "flex";
        circle3.style.display = "none";
        nonCircle4.style.display = "flex";
        circle4.style.display = "none";
        nonCircle5.style.display = "none";
        circle5.style.display = "flex";
        nonCircle6.style.display = "flex";
        circle6.style.display = "none";
        break;
      case 5:
        metric1.style.display = "none";
        metric1Mini.style.display = "none";
        metric2.style.display = "none";
        metric2Mini.style.display = "none";
        metric3.style.display = "none";
        metric3Mini.style.display = "none";
        metric4.style.display = "flex";
        metric4Mini.style.display = "none";
        metric5.style.display = "none";
        metric5Mini.style.display = "flex";
        metric6.style.display = "none";
        metric6Mini.style.display = "none";
        nextBtn.style.display = "none";
        backBtn.style.display = "flex";
        circle1.style.display = "none";
        nonCircle1.style.display = "flex";
        nonCircle2.style.display = "flex";
        circle2.style.display = "none";
        nonCircle3.style.display = "flex";
        circle3.style.display = "none";
        nonCircle4.style.display = "flex";
        circle4.style.display = "none";
        nonCircle5.style.display = "flex";
        circle5.style.display = "none";
        nonCircle6.style.display = "none";
        circle6.style.display = "flex";
        break;
    }
  }
});

// var unselectCard = getElementById("back-btn-campaign");
// function backSection() {
//   if (
//     unselectCard == 2 ||
//     unselectCard == 3 ||
//     unselectCard == 4 ||
//     unselectCard == 5
//   ) {
//     unselectCard--;
//   } else {
//     unselectCard = 4;
//   }
//   console.log(unselectCard);
//   switch (unselectCard) {
//     case 0:
//       section1.style.display = "flex";
//       section2.style.display = "none";
//       section3.style.display = "none";
//       section4.style.display = "none";
//       section5.style.display = "none";
//       backBtnCamp.style.display = "none";
//       nextBtnCamp.style.display = "flex";
//       break;
//     case 1:
//       section1.style.display = "none";
//       section2.style.display = "flex";
//       section3.style.display = "none";
//       section4.style.display = "none";
//       section5.style.display = "none";
//       backBtnCamp.style.display = "flex";
//       nextBtnCamp.style.display = "flex";
//       break;
//     case 2:
//       section1.style.display = "none";
//       section2.style.display = "none";
//       section3.style.display = "flex";
//       section4.style.display = "none";
//       section5.style.display = "none";
//       backBtnCamp.style.display = "flex";
//       nextBtnCamp.style.display = "flex";
//       break;
//     case 3:
//       section1.style.display = "none";
//       section2.style.display = "none";
//       section3.style.display = "none";
//       section4.style.display = "flex";
//       section5.style.display = "none";
//       backBtnCamp.style.display = "flex";
//       nextBtnCamp.style.display = "flex";
//       break;
//     case 4:
//       section1.style.display = "none";
//       section2.style.display = "none";
//       section3.style.display = "none";
//       section4.style.display = "none";
//       section5.style.display = "flex";
//       backBtnCamp.style.display = "flex";
//       nextBtnCamp.style.display = "flex";
//       break;
//   }
// }

function redirectToOtherPage() {
  // Your redirection logic
  window.location.href = "./KnowMore.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbarContent = document.getElementById("navbar-content");

  menuIcon.addEventListener("click", () => {
    // Toggle the visibility of the navbar content and home container
    navbarContent.style.display =
      navbarContent.style.display === "flex" ? "none" : "flex";
    homeContainer.style.display =
      homeContainer.style.display === "flex" ? "none" : "flex";
  });
});

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-close").addEventListener("click", closefunc);
  function closefunc() {
    // Hide the navbar content
    const navbarContent = document.getElementById("navbar-content");
    navbarContent.style.display = "none";

    // Navigate to the specific ID based on the clicked li element
    const clickedLi = document.querySelector(".navbar-option li:hover"); // Get the hovered li element
    const targetId = clickedLi.textContent.toLowerCase(); // Get the lowercase text of the hovered li element

    // Switch based on the target ID to navigate to the corresponding section
    switch (targetId) {
      case "home":
        window.location.hash = "#home";
        break;
      case "campaign ideas":
        window.location.hash = "#campaign-ideas-container";
        break;
      case "metric measures":
        window.location.hash = "#metric-measures-container";
        break;
      case "campaign details":
        window.location.hash = "#campaign-details";

        break;
    }
  }
});
