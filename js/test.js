import { firebaseConfig } from '/js/firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Define an array of strings representing lessons
const lessonsData = [
    'Lesson 1 Content',
    'Lesson 2 Content',
    'Lesson 3 Content',
    // Add more lessons as needed
];

// Get a reference to the "lessons" node in the database
const lessonsRef = ref(database, 'lessons');

// Set the data in the "lessons" node
set(lessonsRef, lessonsData)
    .then(() => {
        console.log('Lessons node with string values created successfully!');
    })
    .catch((error) => {
        console.error('Error creating lessons node:', error);
    });
