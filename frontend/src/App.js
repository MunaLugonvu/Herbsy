import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import SignIn from './Auth/signIn.jsx';
import SignUp from './Auth/signup.jsx';
import Home from './Pages/Home.jsx';

const App = () => {
  return (
    <Router basename="/Herbsy">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h2>Products Page</h2>} />
        <Route path="/about" element={<h2>About Herbsy</h2>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  </Router>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes that should NOT have a header or footer
  const noHeaderFooterRoutes = ['/signin', '/signup'];

  return (
    <div className="flex flex-col min-h-screen">
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
