import { Routes, Route } from 'react-router-dom';
import { default as Layout } from './layouts';
import * as Pages from './pages';

function App() {
    return (
        <>
            <div className="App">
               
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Pages.Landing />} />
                        <Route path="*" element={<Pages.NotFound />} />
                    </Route>
                </Routes>

            </div>
        </>
    );
}

export default App;
