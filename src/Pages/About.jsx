import React from 'react';

export const About = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>About Our Movie Guide App</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          Welcome to our Movie Guide App! We're passionate about movies and aim to help you discover, explore, and enjoy the best films out there. 
          Whether you're looking for the latest blockbusters, classic favorites, or hidden gems, our app provides personalized recommendations, 
          detailed reviews, and up-to-date information on showtimes and streaming options.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#777' }}>
          Built with React for a smooth, interactive experience, our app is designed for movie lovers by movie lovers. 
          Stay tuned for new features like user ratings, watchlists, and more!
        </p>
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#333' }}>Our Mission</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>
            To make movie discovery fun and accessible for everyone, bridging the gap between fans and the world of cinema.
          </p>
        </div>
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#333' }}>Contact Us</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>
            Have feedback? Reach out at <a href="mailto:support@movieguideapp.com" style={{ color: '#007bff' }}>support@movieguideapp.com</a>
          </p>
        </div>
      </div>
    </div>
  );
    };