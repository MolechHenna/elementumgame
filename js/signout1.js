// Initialize Firebase Authentication and get the auth instance (assuming you have Firebase Auth initialized in "your-firebase-auth-setup.js").
import { firebaseConfig } from '/js/firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { signOut, getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"; 


document.addEventListener('DOMContentLoaded', () => {
    initializeApp(firebaseConfig);
    const auth = getAuth();

    // Get the "Sign Out" button elements
    const logoutItem = document.getElementById('logoutItem');
    const logoutAdmin = document.getElementById('logOutAdmin');
    const logoutAdmin2 = document.getElementById('logOutAdmin2');

    // Function to show SweetAlert2 confirmation dialog
    const showSignOutConfirmation = (callback) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be signed out.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                callback(); // Call the callback function if the user confirms
            }
        });
    };

    // Function to handle sign out with confirmation
    const handleSignOutWithConfirmation = (callback) => {
        showSignOutConfirmation(() => {
            signOut(auth)
                .then(() => {
                    // Sign-out successful
                    callback(); // Callback to perform additional actions after sign-out
                })
                .catch((error) => {
                    // Handle sign-out errors (if any)
                    console.error('Sign-out error:', error);
                    // You can display an error message to the user.
                });
        });
    };

    // Add click event listeners to the "Sign Out" buttons
    if (logoutItem) {
        logoutItem.addEventListener('click', () => {
            // Handle sign out with confirmation
            handleSignOutWithConfirmation(() => {
                // Redirect the user after sign-out
                window.location.href = 'index.html';
            });
        });
    }

    if (logoutAdmin) {
        logoutAdmin.addEventListener('click', () => {
            // Handle sign out with confirmation
            handleSignOutWithConfirmation(() => {
                // Redirect the user after sign-out
                window.location.href = 'register_UIAdmin/index.html';
            });
        });
    }

    if (logoutAdmin2) {
        logoutAdmin2.addEventListener('click', () => {
            // Handle sign out with confirmation
            handleSignOutWithConfirmation(() => {
                // Redirect the user after sign-out
                window.location.href = 'register_UIAdmin/index.html';
            });
        });
    }
});