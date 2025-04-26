import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IntroPopup.css'; // Import styling

const IntroPopup = ({ onClose }) => {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if (page < 5) {
            setPage(page + 1);
        } else {
            onClose(); // Close the popup
            navigate('/plans'); // Redirect to Plans page
        }
    };

    // Popup page content
    const pages = [
    { text: "Hey, I'm Monique, your AI trading assistant. Noticed you’re new here, so let me walk you through!", button: "OKAY" },
    { text: "First, you'll pick a Funded Challenge of your choice from a variety of plans🎯", button: "OKAY" },
    { text: "📊 Then, You'll describe the trading strategy you wish to use for the selected challenge.", button: "OKAY" },
    { text: "Next, I'll backtest it over 10 years of historic data while simulating the challenge’s rules. 📈", button: "OKAY" },
    { text: "⚡ Finally, I'll suggest some modifications (if needed), we'll backtest the final version...then you just sit back & watch me do my thing!", button: "GOT IT" }
];


    return (
        <div className="popup-container">
            <div className="popup-content">
                <p>{pages[page - 1].text}</p>
                <button onClick={handleNext}>{pages[page - 1].button}</button>
            </div>
        </div>
    );
};

export default IntroPopup;
