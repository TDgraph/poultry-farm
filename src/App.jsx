// import React from 'react';
import FarmForm from './features/farm/farmForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <FarmForm />
      <Route path="/daily-report" element={<DailyReportForm />} />

    </div>
  );
};


export default App;