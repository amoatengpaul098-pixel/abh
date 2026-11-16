import
{
    initializeApp
}
from"https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import{
    getAuth
}
from"https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import
{
    getFirestore
}
from"https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import{
    getStorage
}
from"https://www.gstatic.com/firebasejs/12.3.0/firebase-storage.js";
const firebaseConfig={
    apiKey:"YOUR_FIREBASE_API_KEY",authDomain:"african-business-hub.firebaseapp.com",projectId:"african-business-hub",storageBucket:"african-business-hub.firebasestorage.app",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_FIREBASE_APP_ID"};

const app=initializeApp(firebaseConfig);export 
const auth=getAuth(app);export 
const db=getFirestore(app);export
 const storage=getStorage(app);
