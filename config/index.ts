// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBgG1l6JetkqegFtu3WA3DZ372yL2JYvEo',

  authDomain: 'wordy-a77ee.firebaseapp.com',

  projectId: 'wordy-a77ee',

  storageBucket: 'wordy-a77ee.appspot.com',

  messagingSenderId: '456421671289',

  appId: '1:456421671289:web:5f15c8eed95bd973936fa8',

  measurementId: 'G-873BPDBHFF',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
