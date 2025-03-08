import logo from './logo.svg';
import './App.css';
import JwtLoginView from './pages/jwt';
import SignupForm from './pages/doctorSignup';
import PatientSignupForm from './pages/patientSignup';
import DoctorDashboard from './pages/doctorDashboard';

function App() {
  return (
    <div className="App">

      {/* <JwtLoginView /> */}
      {/* <SignupForm /> */}
      {/* <PatientSignupForm /> */}
      <DoctorDashboard />
    </div>
  );
}

export default App;
