import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <h2>Current user: {user ? user.displayName : 'No body'}</h2>
        </div>
    );
};

export default Home;