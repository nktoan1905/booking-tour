import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA_p6wuHYG9rcJFA82VZzX6If3Y-ZtXSPI',
	authDomain: 'booking-tour-2ef4d.firebaseapp.com',
	projectId: 'booking-tour-2ef4d',
	storageBucket: 'booking-tour-2ef4d.appspot.com',
	messagingSenderId: '1059559493897',
	appId: '1:1059559493897:web:14e039868e6b5c95c043d8',
	measurementId: 'G-09FXDJJ1J6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return <div className='App'>Hello</div>;
}

export default App;
