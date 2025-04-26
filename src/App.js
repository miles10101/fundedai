import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans'; // Importing the Plans page

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plans" element={<Plans />} /> {/* New Plans page route */}
        </Routes>
    );
}

export default App;
