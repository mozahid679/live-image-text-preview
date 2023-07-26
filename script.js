// Function to toggle the visibility of the section
function toggleSection() {
   const contentSection = document.getElementById("contentSection");

   // Check if the section is currently visible
   if (contentSection.style.display === "none") {
      // If hidden, show the section
      contentSection.style.display = "block";
   } else {
      // If visible, hide the section
      contentSection.style.display = "none";
   }
}

// Add an event listener to the button
document
   .getElementById("toggleButton")
   .addEventListener("click", toggleSection);

// Function to update the output field with live text input
function updateOutputField() {
   const inputField = document.getElementById("inputField");
   const outputField = document.getElementById("outputField");

   // Get the value from the input field and set it as the value of the output field
   outputField.value = inputField.value;
}
// Add an event listener to the input field
document
   .getElementById("inputField")
   .addEventListener("input", updateOutputField);

// 2nd output field

// Function to toggle the visibility of the section
function toggleSection1() {
   const contentSection1 = document.getElementById("contentSection1");

   // Check if the section is currently visible
   if (contentSection1.style.display === "none") {
      // If hidden, show the section
      contentSection1.style.display = "block";
   } else {
      // If visible, hide the section
      contentSection1.style.display = "none";
   }
}

document
   .getElementById("toggleButton1")
   .addEventListener("click", toggleSection1);

// Function to update the output field with live text input
function updateOutputField1() {
   const inputField1 = document.getElementById("inputField1");
   const outputField1 = document.getElementById("outputField1");

   // Get the value from the input field and set it as the value of the output field
   outputField1.value = inputField1.value;
}

// Add an event listener to the input field
document
   .getElementById("inputField1")
   .addEventListener("input", updateOutputField1);

// image preview
// Function to toggle the visibility of the section
function toggleSection2() {
   const contentSection2 = document.getElementById("contentSection2");

   // Check if the section is currently visible
   if (contentSection2.style.display === "none") {
      // If hidden, show the section
      contentSection2.style.display = "block";
   } else {
      // If visible, hide the section
      contentSection2.style.display = "none";
   }
}
// Add an event listener to the button
document
   .getElementById("toggleButton2")
   .addEventListener("click", toggleSection2);

// Function to handle image preview
function handleImagePreview(event) {
   const imageInput = event.target;
   const imagePreview = document.getElementById("imagePreview");

   // Check if a file was selected
   if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();

      // Read the selected image as a data URL and display it in the imagePreview
      reader.onload = function (e) {
         imagePreview.src = e.target.result;
      };

      reader.readAsDataURL(imageInput.files[0]);
   } else {
      // If no file was selected or the selection was canceled, reset the image preview
      imagePreview.src = "#";
   }
}

// Add an event listener to the image input
document
   .getElementById("imageInput")
   .addEventListener("change", handleImagePreview);

// for text alignment
// Function to change the text alignment
function changeTextAlignmentl() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.textAlign;

   // Toggle between center and left alignments
   if (changeTextAlignmentl) {
      outputText.style.textAlign = "left";
   }
}
function changeTextAlignmentr() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.textAlign;

   // Toggle between center and left alignments
   if (changeTextAlignmentr) {
      outputText.style.textAlign = "right";
   }
}
function changeTextAlignmentc() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.textAlign;

   // Toggle between center and left alignments
   if (changeTextAlignmentc) {
      outputText.style.textAlign = "center";
   }
}
// black
function changeTextAlignmentb() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.color;

   // Toggle between center and left alignments
   if (changeTextAlignmentblue) {
      outputText.style.color = "black";
   }
}
// blue
function changeTextAlignmentg() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.color;

   // Toggle between center and left alignments
   if (changeTextAlignmentblue) {
      outputText.style.color = "green";
   }
}
// blue
function changeTextAlignmentblue() {
   const outputText = document.getElementById("outputField");

   // Get the current text alignment
   const currentAlignment = outputText.style.color;

   // Toggle between center and left alignments
   if (changeTextAlignmentblue) {
      outputText.style.color = "blue";
   }
}

// Add an event listener to the button
document
   .getElementById("changeAlignmentButtonl")
   .addEventListener("click", changeTextAlignmentl);
document
   .getElementById("changeAlignmentButtonr")
   .addEventListener("click", changeTextAlignmentr);
document
   .getElementById("changeAlignmentButtonc")
   .addEventListener("click", changeTextAlignmentc);

document
   .getElementById("changeAlignmentButtonb")
   .addEventListener("click", changeTextAlignmentb);
document
   .getElementById("changeAlignmentButtonblue")
   .addEventListener("click", changeTextAlignmentblue);
document
   .getElementById("changeAlignmentButtong")
   .addEventListener("click", changeTextAlignmentg);
