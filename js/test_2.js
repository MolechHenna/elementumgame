import { firebaseConfig } from '/js/firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Data for the nested structure
const quizData = {
    quiz_code: {
        question: {
            answer: "Your answer here",
            // Add more properties if needed
        },
    },
};

// Get a reference to the "Gamemodes/identification_quiz" node in the database
const identificationQuizRef = ref(database, 'Gamemodes/identification_quiz');

// Set the data for the nested structure
set(identificationQuizRef, quizData)
    .then(() => {
        console.log('Nested structure under identification_quiz created successfully!');
    })
    .catch((error) => {
        console.error('Error creating nested structure under identification_quiz:', error);
    });