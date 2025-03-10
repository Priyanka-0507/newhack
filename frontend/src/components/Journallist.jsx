import React from 'react';
import JournalEntry from './JournalEntry';

const JournalList = ({ entries }) => {
  return (
    <div>
      <h2>Entries</h2>
      {entries.map((entry) => (
        <JournalEntry key={entry._id} entry={entry} />
      ))}
    </div>
  );
};

export default JournalList;