#User Management Dashboard
This project is a User Management Dashboard built using Next.js and Firebase Firestore. The dashboard allows you to add, view, delete, and manage user data.

#Features
Add User: Add a new user with ID, Name, Email, Mobile, and City details.
View Users: Display a list of all users from Firestore.
Delete User: Remove a user from the Firestore database.
Responsive UI: Optimized for different screen sizes.
Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js: v14.x or later
Next.js: Latest version
Firebase Project: Setup a Firebase project and enable Firestore.

#Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install Dependencies
Run the following command to install the required packages:

#bash
Copy code
npm install
3. Firebase Configuration
Set up a Firebase project by visiting the Firebase Console.
Enable Firestore Database for the project.
Create a file named firebaseConfig.ts in the root directory and add your Firebase configuration:
js
Copy code
// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
4. Run the Development Server
After configuring Firebase, start the development server:

#bash
Copy code
npm run dev
Open http://localhost:3000 to view the application.

5. Adding a User
#To add a new user:

Navigate to the Add User section in the sidebar.
Fill in the details such as ID, Name, Email, Mobile, and City.
Click the "Add User" button to submit.
6. Viewing Users
To view all users:

Click on View Users in the sidebar to display a list of all users from Firestore.
7. Deleting a User
To delete a user:

Click the Delete User button in the sidebar.
A prompt will ask for the user ID to delete.
Enter the user ID, and the user will be deleted from Firestore.
#Project Structure
components/: Contains reusable UI components like AddUser and AllUsers.
pages/: Defines the main pages for the dashboard.
firebaseConfig.ts: Firebase initialization and configuration.
styles/: Global styles for the project.
Future Enhancements
User Update: Implement a feature to update user information.
Error Handling: Add better error handling and validation for user inputs.
#Contributing
Feel free to contribute by opening an issue or submitting a pull request. Make sure to follow the project’s code of conduct.
