
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB439yjLcfQjIb7xGBu24sqIkmayOexkJI",
    authDomain: "birthday-wish-reminders.firebaseapp.com",
    projectId: "birthday-wish-reminders",
    storageBucket: "birthday-wish-reminders.appspot.com",
    messagingSenderId: "386549863964",
    appId: "1:386549863964:web:cb38285fc9898aa7e431d9",
    measurementId: "G-WXKT46FSBG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
