// deleteUser function that can be used across components
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Function to delete user from Firestore
export async function deleteUserFromFirestore(id: string) {
    try {
        console.log("Attempting to delete user with ID:", id);
        await deleteDoc(doc(db, "users", id));  // Ensure "users" is the correct collection name
        return id;
    } catch (error) {
        console.error("Error deleting user:", error);
        return null;
    }
}
