import React from 'react';
import '../styles/PlanA.css';

const PlanA = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Hide if not open

    return (
        <div className="planA-popup"> {/* Added this wrapper */}
            <div className="popup-overlay">
                <div className="popup-content">
                    <h2>Pay Using:</h2>
                    <div className="payment-options">
                        <button onClick={() => window.location.href = "https://paystack.com/pay/t0zf4js3ln"}>
                            Bank Card
                        </button>
                        <button onClick={() => window.location.href = "https://paystack.com/pay/xh9w-xyqtq"}>
                            Mobile Money
                        </button>
                    </div>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PlanA;