import firebase from "firebase/app";
import "firebase/auth";
import { expo } from "../app.json";

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(expo.web.config.firebase);
}

export const auth = firebase.auth();

export const loginWithEmail = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password);

export const passwordReset = (email: string) =>
  auth.sendPasswordResetEmail(email);

export const logout = () => auth.signOut();
