import IUserService from "./IUserService";
import { authService, db } from '@/backend/firebaseConfig';
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export class UserService implements IUserService{

    async createAccount(username: string, email: string, password: string): Promise<string | undefined> {
        try {
            // Create account in firebase authentication
            const userCredentials = await createUserWithEmailAndPassword(authService, email, password);
            const user = userCredentials.user;
    
            // Create user with their info in firestore db
            await setDoc(doc(db, "users", username), {
                username: username,
                password: password,
                email: email,
                color: '#fa7a70',
                wins: 0,
                loss: 0,
                ko: 0
            });
    
            // If everything succeeds, return undefined (no error)
            return;
        } catch (error: any) {
            // Handle authentication errors
            switch (error.code) {
                case 'auth/invalid-email':
                    return 'Invalid email';
                case 'auth/missing-password':
                    return 'Invalid Password';
                case 'auth/weak-password':
                    return 'Weak Password, 6 characters required';
                default:
                    return 'Error ' + error.code + ' : ' + error.message;
            }
        }
    }
    
    

}