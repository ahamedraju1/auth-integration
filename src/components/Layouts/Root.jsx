import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            
            <Navbar ></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;