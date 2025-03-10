import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JournalList from '../components/Journallist';
const Journal = () =>{
    const [entries, setEntries] = useState([]);
    const [title, settitle] = useState('');
    const [content, setContent]= useState('');
    useEffect(()=>{
        fetchEntries();
    },[]);
    const fetchEntries= async () =>{
        try{
            const token =localStorage.getItem ('token');
            const response = await axios.get('http://localhost:5000/api/journal',{
                headers: {Authorization:`Bearer ${token}`},
            });
            setEntries(response.data);
        }catch (err){
            console.error(err);
        }
    };
    const handleSubmit= async (e) =>{
        e.preventDefault(); 
        try{
            const token =localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/journal',{title,content},
                {headers:{Authorization: `Bearer ${token}`}}
            );
            fetchEntries();
            setTitle('');
            setContent('');
        }catch(err){
            console.error(err);
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Journal</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add Entry
          </button>
        </form>
        <JournalList entries={entries} />
      </div>
    );
};
export default Journal;