import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ConatactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Counter from "./components/counter";
function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
        <Counter />
      </main>
    </div>
  );
}

export default App;
