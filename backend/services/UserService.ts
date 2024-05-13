import IUserService from "./IUserService";
import { authService, db } from '@/backend/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { user } from "@/config";

export class UserService implements IUserService{

    async createAccount(username: string, email: string, password: string): Promise<string | undefined> {
        if (email.length == 0){
            return ('Please enter an email');  
        }
        else if (username.length < 3){
            return ('Username must be at least 3 characters long');
        }
        else if (username.length > 15){
            return ('Username cannot exceed 15 characters');
        }
        else if (username.includes('@')){
            return ('Username cannot include @ symbol');
        }
        else if (password.length < 6){
            return ('Password must be at least 6 characters long');
        }
        else if (false){                                                      // TODO: Create case where username already exists in database
            return ('This username already exists')
        }  
        else {
            try {
                // Create account in firebase authentication
                const userCredentials = await createUserWithEmailAndPassword(authService, email, password);
                //TODO: See if userCredentials.user can come in handy

                // Create user with their info in firestore db
                let initialUser = user.getAllProps()
                initialUser.username = username;
                initialUser.email = email;
                initialUser.password = password;
                await setDoc(doc(db, "users", email), initialUser);
        
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

    async signIn(email: string, password: string): Promise<string | undefined> {
        try {
            // Sign into firebase authentication
            await signInWithEmailAndPassword(authService, email, password);
            // Successful sign in
            // Retrieve all properties from db and udpate the user instance accordingly
            const userDocSnapshot = await getDoc(doc(db, "users", email));
            const userDocData = userDocSnapshot.data()
            const username: string = userDocData!.username;
            const characterChoice: number = userDocData!.characterChoice;
            const themeChoice: string = userDocData!.themeChoice;
            const audioChoice: boolean = userDocData!.audioChoice;
            const wins: number = userDocData!.wins;
            const losses: number = userDocData!.losses;
            const ko: number = userDocData!.ko;
            user.setAllProps(username, email, password, characterChoice, themeChoice, audioChoice, wins, losses, ko);
            return;
        }
        catch (error: any) {
            // TODO: Handle sign in errors
            console.warn(error.code, ':-', error.message);
            return error.message
        }
    }
    
    

}