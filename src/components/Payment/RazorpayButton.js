import React, { useState } from 'react';
import { t } from '../../utils/translations.js';
import './Payment.css';
import '../../App.css';

const RAZORPAY_KEY = 'YOUR_RAZORPAY_TEST_KEY';

function loadRazorpayScript() {
    return new Promise((resolve) => {
        if (document.getElementById('razorpay-sdk')) return resolve(true);
        const script = document.createElement('script');
        script.id = 'razorpay-sdk';
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export default function RazorpayButton({ amount = 1000, description = 'Test Purchase', lang = 'en' }) {
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        setLoading(true);
        const ok = await loadRazorpayScript();
        if (!ok) {
            alert('Razorpay SDK failed to load');
            setLoading(false);
            return;
        }
        const options = {
            key: RAZORPAY_KEY,
            amount,
            currency: 'INR',
            name: 'ExamXpert',
            description,
            handler: function (response) {
                alert('Payment success (demo). Payment id: ' + response.razorpay_payment_id);
            },
            prefill: { name: 'Demo User', email: 'demo@example.com', contact: '9999999999' },
            theme: { color: '#0b72ff' }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoading(false);
    };

    return (
        <button className="btn btn-purple" onClick={handlePay} disabled={loading}>
            {loading ? 'Loading...' : t('buy', lang)}
        </button>
    );
}