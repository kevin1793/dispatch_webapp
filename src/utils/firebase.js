// src/utils/firebase.js
import { doc, getDoc, addDoc, collection, serverTimestamp,updateDoc, arrayUnion,query,where,getDocs } from "firebase/firestore";

// Existing imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";



// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/* ---------- Auth Helpers ---------- */

export const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logout = async () => await signOut(auth);

/* ---------- Firestore User Helper ---------- */

// Get user role by UID
export const getUserRole = async (uid) => {
  const userDoc = await getDoc(doc(db, "Users", uid));
  if (userDoc.exists()) {
    return userDoc.data().role;
  } else {
    return null; // user document not found
  }
};

// Create a new job and initialize log
export async function createJob(jobObj) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const userName = `${user.displayName || user.email}`;
    const { description, pickupLocation, deliveryLocation, role } = jobObj;
    const now = new Date().toLocaleString();
    const logEntry = `${userName} (${role}) created a job on ${now}`;

    const docRef = await addDoc(collection(db, "jobs"), {
      description,
      pickupLocation,
      deliveryLocation,
      pickupDateTime: null,
      deliveryDateTime: null,
      assignedTo: null,
      status: "Created",
      log: [logEntry],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docRef.id; // return job ID
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
}

// Update job status and append to log
export async function updateJobStatus(jobId, newStatus, role) {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    const userName = `${user.displayName || user.email}`;
    const now = new Date().toLocaleString();
    const logEntry = `${userName} (${role}) changed status to ${newStatus} on ${now}`;

    await updateDoc(doc(db, "Jobs", jobId), {
      status: newStatus,
      updatedAt: serverTimestamp(),
      log: arrayUnion(logEntry),
    });
  } catch (error) {
    console.error("Error updating job status:", error);
    throw error;
  }
}

// Get number of jobs by status
export async function getJobsCountByStatus(status) {
  try {
    const q = query(collection(db, "jobs"), where("status", "==", status));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return 0;
  }
}