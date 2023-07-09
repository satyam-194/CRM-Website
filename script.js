// Get references to the navigation links
const dashboardLink = document.querySelector('a[href="#dashboard"]');
const contactsLink = document.querySelector('a[href="#contacts"]');
const tasksLink = document.querySelector('a[href="#tasks"]');
const settingsLink = document.querySelector('a[href="#settings"]');

// Get references to the sections
const dashboardSection = document.getElementById('dashboard');
const contactsSection = document.getElementById('contacts');
const tasksSection = document.getElementById('tasks');
const settingsSection = document.getElementById('settings');

// Hide all sections except the dashboard on page load
contactsSection.style.display = 'none';
tasksSection.style.display = 'none';
settingsSection.style.display = 'none';

// Event listeners for navigation links
dashboardLink.addEventListener('click', () => {
  showSection(dashboardSection);
});

contactsLink.addEventListener('click', () => {
  showSection(contactsSection);
});

tasksLink.addEventListener('click', () => {
  showSection(tasksSection);
});

settingsLink.addEventListener('click', () => {
  showSection(settingsSection);
});

// Function to show a specific section and hide the others
function showSection(section) {
  // Hide all sections
  dashboardSection.style.display = 'none';
  contactsSection.style.display = 'none';
  tasksSection.style.display = 'none';
  settingsSection.style.display = 'none';

  // Show the selected section
  section.style.display = 'block';
}

// ... previous code ...

// Get references to the contact form and form fields
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Event listener for form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Validate form fields
  if (validateForm()) {
    // Get form values
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Perform form submission (you can customize this part)
    submitForm(name, email, message);
  }
});

// Function to validate the form
function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value.trim() === '') {
    isValid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }

  return isValid;
}

// Function to submit the form (you can customize this part)
function submitForm(name, email, message) {
  // Display a confirmation message or send the form data to the server
  alert('Thank you for contacting us!');
  contactForm.reset(); // Reset the form after submission
}




