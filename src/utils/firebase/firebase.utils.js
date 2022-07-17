import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    doc, // helps us to retrive docs from db meaning whole obj
    getDoc, // helps us to retrive data (get objects fields and values)
    setDoc  // helps us to write data (set objects fields and values)
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjuXIQRzWl_idYwDjDzQnK611jZ-24cZg",
    authDomain: "crwn-clothing-db-a92c7.firebaseapp.com",
    projectId: "crwn-clothing-db-a92c7",
    storageBucket: "crwn-clothing-db-a92c7.appspot.com",
    messagingSenderId: "340265327906",
    appId: "1:340265327906:web:cdda3045d981fa6bbfd97b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid) // takes 3 args: db, collection, unique id

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}