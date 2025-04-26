import React, { useState, useEffect } from 'react';
import '../styles/Plans.css'; // Importing the CSS file for styling
import PlanA from '../components/PlanA'; // Import PlanA popup
import PlanB from '../components/PlanB'; // Import PlanB popup
import PlanC from '../components/PlanC'; // Import PlanC popup

const Plans = () => {
    const calculateTimeLeft = () => {
        const countdownDate = new Date('May 5, 2025 23:59:59').getTime();
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        return {
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
            seconds: Math.floor((timeLeft / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, []);

    // Popup state for each plan
    const [isPlanAOpen, setPlanAOpen] = useState(false);
    const [isPlanBOpen, setPlanBOpen] = useState(false);
    const [isPlanCOpen, setPlanCOpen] = useState(false);

    return (
        <div className="plans-container">
            <h1>Choose Your Funded Plan 🚀</h1>

            <div className="plans-grid">
                {/* $25K Plan */}
                <div className="plan-card">
                    <h2>$25K Account</h2>
                    <p><strong> 15% Payout (From Challenge Phase):</strong> $188</p>
                    <p><strong> Profit Target:</strong> $1,250</p>
                    <p><strong> Daily Loss Limit (Soft Breach):</strong> $600</p>
                    <p><strong> Maximum Loss Limit:</strong> $1,250</p>
                    <p><strong> Activation Fee:</strong> Free</p>
                    <p><strong> Max Positions:</strong> 2 Minis, 20 Micros</p>
                    <p><strong> Consistency Rule:</strong> 40%</p>
                    <p><strong> Reset Fee:</strong> 10% Discount</p>
                    <button onClick={() => setPlanAOpen(true)}>
                        <span style={{ textDecoration: "line-through" }}>$99</span> <br />
                        <strong>$1.99 USD</strong>
                    </button>
                </div>

                {/* $50K Plan */}
                <div className="plan-card">
                    <h2>$50K Account</h2>
                    <p><strong> 15% Payout (From Challenge Phase):</strong> $375</p>
                    <p><strong> Profit Target:</strong> $2,500</p>
                    <p><strong> Daily Loss Limit (Soft Breach):</strong> $1,200</p>
                    <p><strong> Maximum Loss Limit:</strong> $2,500</p>
                    <p><strong> Activation Fee:</strong> Free</p>
                    <p><strong> Max Positions:</strong> 3 Minis, 30 Micros</p>
                    <p><strong> Consistency Rule:</strong> 40%</p>
                    <p><strong> Reset Fee:</strong> 10% Discount</p>
                    <button onClick={() => setPlanBOpen(true)}>
                        <span style={{ textDecoration: "line-through" }}>$199</span> <br />
                        <strong>$3.99 USD</strong>
                    </button>
                </div>

                {/* $100K Plan */}
                <div className="plan-card">
                    <h2>$100K Account</h2>
                    <p><strong> 15% Payout (From Challenge Phase):</strong> $900</p>
                    <p><strong> Profit Target:</strong> $6,000</p>
                    <p><strong> Daily Loss Limit (Soft Breach):</strong> $2,400</p>
                    <p><strong> Maximum Loss Limit:</strong> $3,000</p>
                    <p><strong> Activation Fee:</strong> Free</p>
                    <p><strong> Max Positions:</strong> 5 Minis, 50 Micros</p>
                    <p><strong> Consistency Rule:</strong> 40%</p>
                    <p><strong> Reset Fee:</strong> 10% Discount</p>
                    <button onClick={() => setPlanCOpen(true)}>
                        <span style={{ textDecoration: "line-through" }}>$399</span> <br />
                        <strong>$7.99 USD</strong>
                    </button>
                </div>
            </div>

            {/* Popups for Each Plan */}
            <PlanA isOpen={isPlanAOpen} onClose={() => setPlanAOpen(false)} />
            <PlanB isOpen={isPlanBOpen} onClose={() => setPlanBOpen(false)} />
            <PlanC isOpen={isPlanCOpen} onClose={() => setPlanCOpen(false)} />

            {/* Countdown Timer at the Bottom */}
            <div className="countdown-container">
                <h2> </h2>
                <div className="countdown-grid">
                    <div className="countdown-item">
                        <div className="flip-card">{timeLeft.days}</div>
                        <span>Days</span>
                    </div>
                    <div className="countdown-item">
                        <div className="flip-card">{timeLeft.hours}</div>
                        <span>Hours</span>
                    </div>
                    <div className="countdown-item">
                        <div className="flip-card">{timeLeft.minutes}</div>
                        <span>Minutes</span>
                    </div>
                    <div className="countdown-item">
                        <div className="flip-card">{timeLeft.seconds}</div>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
