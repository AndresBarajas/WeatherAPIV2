importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPQ-zLPIBVKIOAPc9BUAll5JwyN6UPZO4",
    authDomain: "notifypush-5f6e0.firebaseapp.com",
    projectId: "notifypush-5f6e0",
    storageBucket: "notifypush-5f6e0.appspot.com",
    messagingSenderId: "449749052800",
    appId: "1:449749052800:web:3c98453d0034b4d925e565"
  };
  

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)


messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})