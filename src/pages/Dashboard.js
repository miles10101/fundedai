import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import '../styles/Dashboard.css'; // Importing the CSS file for styling
import IntroPopup from '../components/IntroPopup'; // Importing the new popup component

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // Delay pop-up initially

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true); // Show pop-up after 3 seconds
        }, 3000);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error(error.message);
                return;
            }

            if (user) {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', user.id);

                if (error) {
                    console.error("Database fetch error:", error.message);
                } else if (data.length === 0) {
                    console.warn("No user found in 'users' table.");
                } else {
                    setUserData(data[0]);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="dashboard-container">
            {showPopup && <IntroPopup onClose={() => setShowPopup(false)} />} {/* Popup appears after a delay */}

            {/* Sidebar Navigation */}
            <aside className="sidebar">
                <h2>FundedAI</h2>
                <nav>
                    <a href="#">My Strategies</a>
                    <a href="#">Funded Challenge Progress</a>
                    <a href="#">Account Details</a>
                    <a href="#">Notifications</a>
                </nav>
                <p className="support-email">Support: <a href="mailto:support@funded-ai.com">support@funded-ai.com</a></p>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-content">
                <h1>Welcome, {userData ? userData.username : "..."}!</h1> {/* Username now displayed! */}

                {/* My Strategies Section */}
                <section className="dashboard-card">
                    <h2>📈 My Strategies</h2>
                    <p>Your automated trading strategies will show up here once finalized.</p>
                </section>

                {/* Funded Challenge Progress Section */}
                <section className="dashboard-card">
                    <h2>💰 Funded Challenge Progress</h2>
                    <p>No Currently Active Funded Challenges to Display.</p>
                </section>

                {/* Account Details Section */}
                <section className="dashboard-card">
                    <h2>⚙️ Account Details</h2>
                    {userData ? (
                        <div>
                            <p><strong>Username:</strong> {userData.username}</p> {/* Username added here */}
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Joined:</strong> {new Date(userData.created_at).toLocaleDateString()}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </section>

                {/* Notifications Section */}
                <section className="dashboard-card">
                    <h2>🔔 Notifications</h2>
                    <p>No new notifications.</p>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
