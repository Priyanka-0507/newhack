import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold text-blue-600">{entry.title}</h3>
      <p className="text-gray-700 mt-2">{entry.content}</p>
      <p className="text-sm text-gray-500 mt-2">
        <strong>Date:</strong> {new Date(entry.date).toLocaleString()}
      </p>
    </div>
  );
};

export default JournalEntry;