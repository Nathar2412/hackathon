import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import SignupForm from './pages/doctorSignup';
import PatientSignupForm from './pages/patientSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './pages/doctorDashboard';
import Tests from './pages/tests'
import DiseaseList from './pages/disese';
import Patient from './pages/patient';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/doctor-signup" element={<SignupForm />} />
          <Route path="/patient-signup" element={<PatientSignupForm />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/disease" element={<DiseaseList />} />
          <Route path="/patient" element={<Patient />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;