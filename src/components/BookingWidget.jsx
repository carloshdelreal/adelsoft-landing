import React, { useEffect } from 'react';

export const BookingWidget = () => {
  useEffect(() => {
    // Load the external script for the booking widget
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Append script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="booking-widget-container" style={{ 
      width: '100%', 
      maxWidth: '900px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      marginTop: '40px',
      marginBottom: '40px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ 
          color: '#333', 
          fontSize: '2rem', 
          fontWeight: '600',
          marginBottom: '10px'
        }}>
          Schedule Your Appointment
        </h2>
        <p style={{ 
          color: '#666', 
          fontSize: '1.1rem',
          marginBottom: '0'
        }}>
          Choose a convenient time that works for you
        </p>
      </div>
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/qXAvUCrNfIvgyf4u14y7" 
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          minHeight: '500px'
        }} 
        scrolling="no" 
        id="qXAvUCrNfIvgyf4u14y7_1757377886295"
        title="Booking Widget"
      />
    </div>
  );
};
