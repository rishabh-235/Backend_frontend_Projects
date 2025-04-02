import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '10rem' }}>
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been placed and will be delivered as soon as possible.</p>
            <button 
                onClick={handleContinueShopping} 
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default Confirmation;