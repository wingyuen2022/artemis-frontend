import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { default as Layout } from './layouts';
import * as Pages from './pages';

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route index element={<Layout />}>
                        <Route index path="/" element={<Pages.Landing />} />
                        <Route path="*" element={<Pages.NotFound />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
