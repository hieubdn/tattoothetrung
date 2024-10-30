// Import các hàm cần thiết từ Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXDufpv9M0gqLKTO3Gzx2ur2-pKRpcUX0",
  authDomain: "tattothetrung.firebaseapp.com",
  projectId: "tattothetrung",
  storageBucket: "tattothetrung.appspot.com",
  messagingSenderId: "870589023967",
  appId: "1:870589023967:web:f9f93a172494aeb70c4b6a",
  measurementId: "G-0VLQMBK74J"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Analytics (nếu cần)
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

// Khởi tạo Firestore
const db = getFirestore(app);

export default db;
