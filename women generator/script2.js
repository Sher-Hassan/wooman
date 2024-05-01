function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }
  
  function changeImage(imageSrc, event) {
    event.preventDefault(); // Prevent the default behavior of anchor tag
    var mainImage = document.getElementById("main-image");
    mainImage.src = imageSrc;
    toggleDropdown(); // Hide the dropdown after selecting an image
  }
