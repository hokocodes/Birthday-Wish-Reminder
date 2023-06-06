// Initialize Firebase (assuming you're using Firebase for the database)
// Make sure you have included the Firebase SDK in your HTML file
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
var database = firebase.database();

// Handle form submission
document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var birthday = document.getElementById("birthday").value;

  // Store user profile data in the database
  var userProfileRef = database.ref("userProfiles");
  userProfileRef.push().set({
    email: email,
    name: name,
    birthday: birthday
  });

  // Clear form inputs
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("birthday").value = "";

  alert("Profile saved successfully!");
});
