const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Login form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  const storedUser = JSON.parse(localStorage.getItem('user')); // Get from localStorage

  if (storedUser && username === storedUser.username && password === storedUser.password) {
    window.location.href = "dashboard.html"; 
  } else {
    alert("Invalid username or password!");
  }
});


  // Registration form submission
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
  
    // Basic check
    if (username && email.includes("@") && password.length >= 4) {
      // Save to localStorage
    const user = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
      alert("Registration successful!");
      window.location.href = "index.html";
    } else {
      alert("Please fill all fields correctly.");
    }
  });



//Footer show on scroll-to-bottom
const footer = document.getElementById('page-footer');

window.addEventListener('scroll', () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 2) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});
