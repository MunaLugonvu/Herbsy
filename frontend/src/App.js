import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<h2>Welcome to Herbsy</h2>} />
            <Route path="/products" element={<h2>Products Page</h2>} />
            <Route path="/about" element={<h2>About Herbsy</h2>} />
            <Route path="/signin" element={<h2>Sign In Page</h2>} />
            <Route path="/signout" element={<h2>Sign Out Page</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
