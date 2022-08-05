import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { default as Layout } from './layouts';
import * as Pages from './pages';

function App() {
    return (
        <>
            <div className="App">
                <Layout />
                <Routes>
                    <Route path="/" element={<Pages.Home />} />
                    <Route path="*" element={<Pages.NotFound />} />
                </Routes>
                <div className="align-center"><br></br>Artemis Camping 2022</div>
            </div>
        </>
    );
}

export default App;
