import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../firebase';

const Dashboard: React.FC = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // To prevent redirects before Firebase finishes checking
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName || 'User');
        setLoading(false);
      } else {
        // No user is logged in, redirect to login page
        router.push('/portallogin');
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [router]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/portallogin'); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Hey, {displayName}!</h1>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
