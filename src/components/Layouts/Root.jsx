import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <h3>This is Root</h3>

            <Navbar ></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;