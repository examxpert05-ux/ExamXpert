import React from 'react';
import RazorpayButton from './RazorpayButton';

export default function Payment({ amount, description }) {
    return <RazorpayButton amount={amount} description={description} />;
}