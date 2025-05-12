import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DailyReportForm = () => {
  // Get list of registered farms from Redux store
  const farms = useSelector((state) => state.farm.farms);

  const [formData, setFormData] = useState({
    farm: '',
    date: '',
    eggsCollected: '',
    feedUsed: '',
    mortality: '',
  });

  // Handle changes for non-date fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle date field
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date.toISOString().split('T')[0],
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Daily Report Submitted:', formData);
    alert('Daily report submitted!');
    // Reset form
    setFormData({
      farm: '',
      date: '',
      eggsCollected: '',
      feedUsed: '',
      mortality: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Daily Farm Report</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Farm Dropdown */}
        <div>
          <label className="block font-medium mb-1">Farm</label>
          <select
            name="farm"
            value={formData.farm}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Farm</option>
            {farms.map((farm, index) => (
              <option key={index} value={farm.farmName}>
                {farm.farmName}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Date</label>
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={handleDateChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholderText="Select a date"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>

        {/* Eggs Collected */}
        <div>
          <label className="block font-medium mb-1">Eggs Collected</label>
          <input
            type="number"
            name="eggsCollected"
            value={formData.eggsCollected}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Feed Used */}
        <div>
          <label className="block font-medium mb-1">Feed Used (kg)</label>
          <input
            type="number"
            name="feedUsed"
            value={formData.feedUsed}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Mortality */}
        <div>
          <label className="block font-medium mb-1">Mortality</label>
          <input
            type="number"
            name="mortality"
            value={formData.mortality}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default DailyReportForm;
