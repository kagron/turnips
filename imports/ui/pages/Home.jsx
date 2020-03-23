import React from 'react';
import { Link } from 'react-router-dom';

export default Home = () => {
    return (
        <>
            <div>yo home page</div>
            <Link to="/logout">Logout</Link>
        </>
    )
}