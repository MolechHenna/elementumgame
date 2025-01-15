import { firebaseConfig } from '/js/firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"; 

initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    const loginItem = document.getElementById('loginItem'); // Replace with the actual ID
    const logoutItem = document.getElementById('logoutItem'); // Replace with the actual ID
    const profilelog = document.getElementById('profilelog'); // Replace with the actual ID
    const downloadButton = document.getElementById('downloadButton'); // Replace with the actual ID

    if (user) {
        if (loginItem) loginItem.style.display = 'none';
        if (logoutItem) logoutItem.style.display = 'block';
        if (profilelog) profilelog.style.display = 'block';
        // You can update your UI or perform actions for authenticated users here.
    } else {
        document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        document.cookie = 'lessonsData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        if (loginItem) loginItem.style.display = 'block';
        if (logoutItem) logoutItem.style.display = 'none';
        if (profilelog) profilelog.style.display = 'none';
        if (downloadButton) downloadButton.style.display = 'block';
    }
});