document.addEventListener("DOMContentLoaded", () => {
    const btnMagic = document.getElementById("magicBtn");
    const secret = document.getElementById("secretMessage");
    const imgDisplay = document.getElementById("gallery");
    const btnNext = document.getElementById("nextImg");
    const toggleBtn = document.querySelector(".accordion-btn");
    const toggleContent = document.querySelector(".accordion-content");
    const inputEmail = document.getElementById("email");
    const emailHint = document.getElementById("emailFeedback");
    const inputPassword = document.getElementById("password");
    const passwordHint = document.getElementById("passwordFeedback");
    const formElement = document.getElementById("signupForm");
    const keyOutput = document.getElementById("keypressOutput");
  
    // On click, change button appearance and label
    btnMagic.addEventListener("click", () => {
      btnMagic.textContent = "Nice!";
      btnMagic.style.backgroundColor = "#90ee90";
    });
  
    // Double-click reveals secret
    btnMagic.addEventListener("dblclick", () => {
      secret.classList.remove("hidden");
    });
  
    // Image slideshow logic
    const galleryImages = [
      "https://via.placeholder.com/300x200?text=Slide+1",
      "https://via.placeholder.com/300x200?text=Slide+2",
      "https://via.placeholder.com/300x200?text=Slide+3",
    ];
    let currentSlide = 0;
  
    btnNext.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % galleryImages.length;
      imgDisplay.src = galleryImages[currentSlide];
    });
  
    // Toggle accordion content visibility
    toggleBtn.addEventListener("click", () => {
      toggleContent.style.display = 
        toggleContent.style.display === "block" ? "none" : "block";
    });
  
    // Display pressed key
    document.addEventListener("keydown", (event) => {
      keyOutput.textContent = `Key pressed: ${event.key}`;
    });
  
    // Email field live validation
    inputEmail.addEventListener("input", () => {
      emailHint.textContent = inputEmail.validity.valid ? "✓" : "Enter a valid email";
    });
  
    // Password strength check
    inputPassword.addEventListener("input", () => {
      passwordHint.textContent = inputPassword.value.length < 8
        ? "Minimum 8 characters"
        : "✓";
    });
  
    // Prevent actual form submission
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your form has been successfully submitted!");
    });
  });
  