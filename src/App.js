import { Routes, Route } from 'react-router-dom';
import { default as Layout } from './layouts';
import * as Pages from './pages';

export default function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Pages.Landing />} />
                        <Route path="/view/home" element={<Pages.Home />} />
                        <Route path="/view/messaging" element={<Pages.Messaging />} />
                        <Route path="/view/settings" element={<Pages.Settings />} />
                        <Route path="/view/budget" element={<Pages.Budget />} />
                        <Route path="/new/budget" element={<Pages.BudgetCreate />} />
                        <Route path="/edit/budget/:id" element={<Pages.BudgetUpdate />} />
                        <Route path="/view/checklist" element={<Pages.Checklist />} />
                        <Route path="/new/checklist" element={<Pages.ChecklistCreate />} />
                        <Route path="/edit/checklist/:id" element={<Pages.ChecklistUpdate />} />
                        <Route path="/view/litnerary" element={<Pages.Itinerary />} />

                        <Route path="/view/map" element={<Pages.Map />} />
                        {/* <Route path="/new/map" element={<Pages.MapCreate />} /> */}
                        {/* <Route path="/edit/map" element={<Pages.MapUpdate />} /> */}
                        <Route path="/view/member" element={<Pages.Member />} />
                        <Route path="/new/member" element={<Pages.MemberCreate />} />
                        <Route path="/edit/member/:id" element={<Pages.MemberUpdate />} />
                        <Route path="/view/trips/" element={<Pages.Trip />} />
                        <Route path="/new/trip" element={<Pages.TripCreate />} />
                        <Route path="/edit/trip/:id" element={<Pages.TripUpdate />} />
                        <Route path="/view/weather" element={<Pages.Weather />} />
                        <Route path="*" element={<Pages.NotFound />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}
