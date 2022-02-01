import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardDetails from 'components/CardDetails';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';

import styles from './App.module.css';
import ErrorBoundary from 'components/ErrorBoundary';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
      </div>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CardDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
