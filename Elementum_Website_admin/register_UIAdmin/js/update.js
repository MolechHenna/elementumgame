const firebaseConfig = {
    apiKey: "AIzaSyDxpoPoJLbsZLUW-a0SWaNtaOO8FebpsuY",
    authDomain: "elementum-db669.firebaseapp.com",
    databaseURL: "https://elementum-db669-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "elementum-db669",
    storageBucket: "elementum-db669.appspot.com",
    messagingSenderId: "692575712786",
    appId: "1:692575712786:web:ca9a1f062326c585124acb",
    measurementId: "G-T9GGW7Q7X7"
  };

  const app = initializeApp(firebaseConfig);

const database = getDatabase();

// Function to handle the profile picture update
        window.updateProfilePicture = async function () {
            const profilePictureInput = document.querySelector('input[name="profilePicture"]');
            const newProfilePictureFile = profilePictureInput.files[0];

            // Upload and update the profile picture in storage
            if (newProfilePictureFile) {
                try {
                    const storage = getStorage();
                    const profilePictureRef = storageRef(storage, `profilePictures/${userData.email}/${newProfilePictureFile.name}`);
                    await uploadBytes(profilePictureRef, newProfilePictureFile);
                    console.log("Profile picture uploaded successfully");
                } catch (error) {
                    console.error("Error updating profile picture:", error);
                }
            }
        };

        async function update() {
            console.log("Update function called");

            const newusername = document.getElementById('username').value;
            const newprofilepicture = document.getElementById('inputGroupFile01').value;

            const updates = {
                username: newusername,
                profilePicture: newprofilepicture
            }

            try {
                console.log("Before database update");
                await database.ref('users/' + userData.uid).update(updates);
                console.log("Username updated successfully");
            } catch (error) {
                console.error("Error updating username:", error);
            }
        }