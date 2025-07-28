importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDnNMz2w_zknidD7onkD2VmgFJwoLGbUcs",
  authDomain: "absensi-notification-f258e.firebaseapp.com",
  projectId: "absensi-notification-f258e",
  storageBucket: "absensi-notification-f258e.appspot.com",
  messagingSenderId: "947604462103",
  appId: "1:947604462103:web:fd347142d074069ddc9a52",
  measurementId: "G-QKGJC4235D"
});

const messaging = firebase.messaging();