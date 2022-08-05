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
                        <Route path="/Home" element={<Pages.Home />} />
                        <Route path="/CurrentTrips" element={<Pages.CurrentTrips />} />
                        <Route path="/Messaging" element={<Pages.Messaging />} />
                        <Route path="/Settings" element={<Pages.Settings />} />
                        <Route path="/view/budget" element={<Pages.Budget />} />
                        <Route path="/new/budget" element={<Pages.BudgetCreate />} />
                        <Route path="/edit/budget" element={<Pages.BudgetUpdate />} />
                        <Route path="/view/checklist" element={<Pages.Checklist />} />
                        <Route path="/new/checklist" element={<Pages.ChecklistCreate />} />
                        <Route path="/edit/checklist" element={<Pages.ChecklistUpdate />} />
                        <Route path="/view/duration" element={<Pages.Duration />} />
                        <Route path="/new/duration" element={<Pages.DurationCreate />} />
                        <Route path="/update/duration" element={<Pages.DurationUpdate />} />
                        <Route path="/view/litnerary" element={<Pages.Itinerary />} />
                        <Route path="/view/map" element={<Pages.Map />} />
                        <Route path="/new/map" element={<Pages.MapCreate />} />
                        <Route path="/edit/map" element={<Pages.MapUpdate />} />
                        <Route path="/view/member" element={<Pages.Member />} />
                        <Route path="/new/member" element={<Pages.MemberCreate />} />
                        <Route path="/edit/member" element={<Pages.MemberUpdate />} />
                        <Route path="/view/weather" element={<Pages.Weather />} />
                        <Route path="*" element={<Pages.NotFound />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}
