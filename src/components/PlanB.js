import React from 'react';
import '../styles/PlanA.css';

const PlanB = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Hide if not open

    return (
        <div className="planA-popup"> {/* Added this wrapper */}
            <div className="popup-overlay">
                <div className="popup-content">
                    <h2>Pay Using:</h2>
                    <div className="payment-options">
                        <button onClick={() => window.location.href = "https://paystack.com/pay/rkqm9zo5ta"}>
                            Bank Card
                        </button>
                        <button onClick={() => window.location.href = "https://paystack.com/pay/l5acnufrp6"}>
                            Mobile Money
                        </button>
                    </div>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PlanB;