import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import db from "./firebase";
import './i18n';
import { collection, getDocs, addDoc } from "firebase/firestore";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CommunityStandards from "./components/Footer/CommunityStandards/CommunityStandards";
import TermsOfService from "./components/Footer/TermsOfService/TermsOfService";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const snapshot = await getDocs(collection(db, "testimonials"));
        const fetchedTestimonials = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async (newTestimonial) => {
    try {
      const docRef = await addDoc(
        collection(db, "testimonials"),
        newTestimonial
      );
      setTestimonials((prevTestimonials) => [
        ...prevTestimonials,
        { id: docRef.id, ...newTestimonial },
      ]);
    } catch (error) {
      console.error("Error adding testimonial: ", error);
    }
  };

  const HomePage = () => (
    <>
      <TestimonialSection testimonials={testimonials} />
      <FeedbackForm addTestimonial={addTestimonial} />
    </>
  );

  return (
    <Router>
    <div className="apps">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community-standards" element={<CommunityStandards />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
