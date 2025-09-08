// ===== Custom Form Validation =====

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorDisplay = document.getElementById('form-error');

  // Reset previous error
  errorDisplay.textContent = '';

  // Basic custom validation
  if (name === '' || email === '' || message === '') {
    errorDisplay.textContent = 'All fields are required.';
    return;
  }

  if (!validateEmail(email)) {
    errorDisplay.textContent = 'Please enter a valid email address.';
    return;
  }

  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset();
});

// Helper function to validate email format
function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===== Interactive Feature 1: Counter =====

let count = 0;
const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// Increments the counter when the button is clicked
incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// Resets the counter
resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

// ===== Interactive Feature 2: Toggle Content =====

const toggleBtn = document.getElementById('toggle-btn');
const toggleContent = document.getElementById('toggle-content');

// Toggles visibility of the content section
toggleBtn.addEventListener('click', () => {
  toggleContent.classList.toggle('hidden');
});
