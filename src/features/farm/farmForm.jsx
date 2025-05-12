import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { registerFarm } from './farm_part.js';
import { useNavigate } from 'react-router-dom';


const FarmForm = () => {

    // Initialize Redux dispatch function
  const dispatch = useDispatch(); 

  // Local state to hold form input values
  const [formData, setFormData] = useState({
    farmName: '',
    ownerName: '',
    latitude: '',
    longitude: '',
    flockType: '',
    birdCount: '',
    startDate: '',
  });

  // Handle input change and update the corresponding field in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update based on input name
    });
  };

  const navigate = useNavigate();


  // Handle form submission
  const handleSubmit = (e) => {

    // Prevent default browser form submission
    e.preventDefault(); 

    // Send form data to Redux
    dispatch(registerFarm(formData));
    alert('Farm Registered!'); 

    // Clear the form after submission
    setFormData({
      farmName: '',
      ownerName: '',
      latitude: '',
      longitude: '',
      flockType: '',
      birdCount: '',
      startDate: '',
    });

      //  Redirect to Daily Report Page
  navigate('/daily-report');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Farm Registration</h2>

      <form onSubmit={handleSubmit} className="space-y-4">


        {/* Text & number inputs */}
        {[
          { label: 'Farm Name', name: 'farmName', type: 'text' },
          { label: 'Owner Name', name: 'ownerName', type: 'text' },
          { label: 'Latitude', name: 'latitude', type: 'number' },
          { label: 'Longitude', name: 'longitude', type: 'number' },
          { label: 'Initial Bird Count', name: 'birdCount', type: 'number' },
          { label: 'Start Date', name: 'startDate', type: 'date' }
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        ))}

        {/* Dropdown for Flock Type */}
        <div>
          <label className="block font-medium mb-1">Flock Type</label>
          <select
            name="flockType"
            value={formData.flockType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Flock Type</option>
            <option value="Layers">Layers</option>
            <option value="Broilers">Broilers</option>
            <option value="Cockerels">Cockerels</option>
            <option value="Pullets">Pullets</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Register Farm
        </button>
      </form>
    </div>
  );
};

export default FarmForm;
