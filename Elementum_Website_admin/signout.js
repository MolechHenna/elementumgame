// Initialize Firebase Authentication and get the auth instance (assuming you have Firebase Auth initialized in "your-firebase-auth-setup.js").
import { firebaseConfig } from '../js/firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { signOut, getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"; 

document.addEventListener('DOMContentLoaded', () => {
    initializeApp(firebaseConfig);
    const auth = getAuth();

    // Get the "Sign Out" button elements
    const logoutAdmin = document.getElementById('logOutAdmin');
    const logoutAdmin2 = document.getElementById('logOutAdmin2');

    if (logoutAdmin) {
        logoutAdmin.addEventListener('click', () => {
            // Sign the user out using Firebase Authentication
            signOut(auth)
                .then(() => {
                    // Sign-out successful
                    console.log('User signed out (button)');
                    window.location.href = 'register_UIAdmin/index.html';
                    // You can redirect the user to a different page or show a sign-out success message.
                    // Example: window.location.href = "login.html";
                })
                .catch((error) => {
                    // Handle sign-out errors (if any)
                    console.error('Sign-out error:', error);
                    // You can display an error message to the user.
                });
        });
    }

    if (logoutAdmin2) {
        logoutAdmin2.addEventListener('click', () => {
            // Sign the user out using Firebase Authentication
            signOut(auth)
                .then(() => {
                    // Sign-out successful
                    console.log('User signed out (button)');
                    window.location.href = 'register_UIAdmin/index.html';
                    // You can redirect the user to a different page or show a sign-out success message.
                    // Example: window.location.href = "login.html";
                })
                .catch((error) => {
                    // Handle sign-out errors (if any)
                    console.error('Sign-out error:', error);
                    // You can display an error message to the user.
                });
        });
    }
});