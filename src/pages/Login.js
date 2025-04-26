import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import the new styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); // New username field
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (isSignUp) {
            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords don't match! Please try again.");
                return;
            }

            // Sign-up logic
            const { data, error } = await supabase.auth.signUp({ email, password });

            if (error) {
                alert(error.message);
            } else if (data.user) { // Ensuring data.user exists
                // Insert user into Supabase 'users' table
                const { error: insertError } = await supabase.from('users').insert([{ 
                    id: data.user.id,  // Properly accessing user ID
                    email, 
                    username
                }]);

                if (insertError) {
                    console.error('Failed to add user:', insertError.message);
                } else {
                    alert('Sign-up successful! You can now log in.');
                    setIsSignUp(false); // Switch back to login after sign-up
                }
            } else {
                console.error("User data missing from Supabase response.");
            }
        } else {
            // Login logic
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                alert(error.message);
            } else {
                navigate('/dashboard');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                {isSignUp && <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />}
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                {isSignUp && <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />}
                
                <button className="login-btn" onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Login'}</button>
                
                <p>
                    {isSignUp ? "Already have an account? " : "Don't have an account? "}
                    <span onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
                        {isSignUp ? "Log in" : "Sign up"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
