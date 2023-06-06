// Initialize Firebase (assuming you're using Firebase for authentication)
// Make sure you have included the Firebase SDK in your HTML file
firebase.initializeApp(firebaseConfig);

// Handle registration form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Register user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Registration successful
      var user = userCredential.user;
      // Redirect to user profile page or perform other actions
    })
    .catch(function(error) {
      // Registration failed
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Registration failed. Error: " + errorMessage);
    });

  // Clear form inputs
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
});
