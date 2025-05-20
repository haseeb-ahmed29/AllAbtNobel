// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      this.classList.remove('active');
    });
    
     // Close menu when clicking on a nav link (except dropdown parent)
const navLinks = document.querySelectorAll('nav ul li:not(.dropdown) > a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// Dropdown functionality for mobile
const dropdownToggle = document.querySelector('.dropdown > a');
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) { // Only for mobile
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
  });
}
});

  // Toggle between Login and Signup forms
  document.getElementById('showSignup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
    clearFormErrors('loginForm');
  });

  document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    clearFormErrors('signupForm');
  });

  // Function to clear form errors
  function clearFormErrors(formId) {
    const form = document.getElementById(formId);
    const errorElements = form.querySelectorAll('.error');
    errorElements.forEach(error => {
      error.textContent = '';
    });
  }

  // Common validation functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    // At least 8 characters, one uppercase, one lowercase, one number, one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return re.test(password);
  }

  function validateName(name) {
    // Only letters and spaces, at least 2 characters
    const re = /^[a-zA-Z ]{2,}$/;
    return re.test(name);
  }

  // Password strength indicator
  function updatePasswordStrengthIndicator(password, indicatorId) {
    const strengthIndicator = document.getElementById(indicatorId);
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    let strengthText = '';
    let strengthClass = '';
    
    if (password.length === 0) {
      strengthText = '';
    } else if (strength <= 2) {
      strengthText = 'Weak password';
      strengthClass = 'weak';
    } else if (strength <= 4) {
      strengthText = 'Medium strength';
      strengthClass = 'medium';
    } else {
      strengthText = 'Strong password';
      strengthClass = 'strong';
    }
    
    if (strengthIndicator) {
      strengthIndicator.className = `password-strength ${strengthClass}`;
      strengthIndicator.innerHTML = `
        <i class="fas fa-${strengthClass === 'weak' ? 'exclamation-triangle' : 
                          strengthClass === 'medium' ? 'check-circle' : 'shield-alt'}"></i>
        ${strengthText}
      `;
    }
  }

  // Setup password strength indicators
  document.getElementById('signupPassword').addEventListener('input', function() {
    updatePasswordStrengthIndicator(this.value, 'signupPasswordStrength');
  });

  document.getElementById('loginPassword').addEventListener('input', function() {
    updatePasswordStrengthIndicator(this.value, 'loginPasswordStrength');
  });

  // Show custom alert
  function showCustomAlert(title, message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    
    let icon = 'fa-check-circle';
    let color = '#2ecc71';
    
    if (type === 'error') {
      icon = 'fa-exclamation-circle';
      color = '#e74c3c';
    }
    
    alertDiv.style.borderLeftColor = color;
    alertDiv.innerHTML = `
      <div class="alert-content">
        <div class="alert-icon">
          <i class="fas ${icon}" style="color: ${color}"></i>
        </div>
        <div class="alert-message">
          <h3 style="color: ${color}">${title}</h3>
          <p>${message}</p>
        </div>
        <button class="alert-close">&times;</button>
      </div>
    `;
    document.body.appendChild(alertDiv);
    
    // Close alert functionality
    alertDiv.querySelector('.alert-close').addEventListener('click', () => {
      alertDiv.remove();
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.remove();
      }
    }, 5000);
  }

  // Login Form Validation
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    let isValid = true;

    // Clear previous errors
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    // Email validation
    if (!email) {
      document.getElementById('loginEmailError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Email is required
      `;
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById('loginEmailError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter a valid email address
      `;
      isValid = false;
    }

    // Password validation
    if (!password) {
      document.getElementById('loginPasswordError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Password is required
      `;
      isValid = false;
    } else if (!validatePassword(password)) {
      document.getElementById('loginPasswordError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Password must contain at least 8 characters with one uppercase, one lowercase, one number and one special character
      `;
      isValid = false;
    }

    if (isValid) {
      showCustomAlert(
        'Login Successful!',
        `Welcome back! You've successfully logged in to your account.`,
        'success'
      );
    }
  });

  // Signup Form Validation
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('signupFirstName').value.trim();
    const lastName = document.getElementById('signupLastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
    let isValid = true;

    // Clear previous errors
    document.getElementById('signupFirstNameError').textContent = '';
    document.getElementById('signupLastNameError').textContent = '';
    document.getElementById('signupEmailError').textContent = '';
    document.getElementById('signupPasswordError').textContent = '';
    document.getElementById('signupConfirmPasswordError').textContent = '';

    // First Name validation
    if (!firstName) {
      document.getElementById('signupFirstNameError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        First Name is required
      `;
      isValid = false;
    } else if (!validateName(firstName)) {
      document.getElementById('signupFirstNameError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter a valid name (letters only)
      `;
      isValid = false;
    }

    // Last Name validation
    if (!lastName) {
      document.getElementById('signupLastNameError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Last Name is required
      `;
      isValid = false;
    } else if (!validateName(lastName)) {
      document.getElementById('signupLastNameError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter a valid name (letters only)
      `;
      isValid = false;
    }

    // Email validation
    if (!email) {
      document.getElementById('signupEmailError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Email is required
      `;
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById('signupEmailError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter a valid email address
      `;
      isValid = false;
    }

    // Password validation
    if (!password) {
      document.getElementById('signupPasswordError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Password is required
      `;
      isValid = false;
    } else if (!validatePassword(password)) {
      document.getElementById('signupPasswordError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Password must contain at least 8 characters with one uppercase, one lowercase, one number and one special character
      `;
      isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      document.getElementById('signupConfirmPasswordError').innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Passwords do not match
      `;
      isValid = false;
    }

    if (isValid) {
      showCustomAlert(
        'Registration Successful!',
        `Welcome to AllAbtNobel, ${firstName}! Your account has been created successfully.`,
        'success'
      );
    }
  });