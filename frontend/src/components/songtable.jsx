import { useState, useEffect } from 'react';
import { songsAPI } from '../services/api';

export default function SongTable({ personId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('personId received:', personId);
    if (personId) {
      loadSongs();
    }
  }, [personId]);

  const loadSongs = async () => {
    try {
      setLoading(true);
      setError(null);
      const songs = await songsAPI.getAllSongs(personId);
      setData(songs);
    } catch (err) {
      setError('Failed to load songs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePlayed = async (song) => {
    try {
      await songsAPI.updateSongStatus(
        song.name,
        song.id,
        !song.played
      );
      setData(prevData => 
        prevData.map(s => 
          s.id === song.id && s.name === song.name
            ? { ...s, played: !s.played }
            : s
        )
      );
    } catch (err) {
      alert('Failed to update song status');
      console.error(err);
      await loadSongs();
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!personId) return <div className="p-8">No person ID provided</div>;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">To Play List</h1>
      
      <div className="rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="text-left py-4 px-6 text-gray-500 font-medium uppercase text-sm tracking-wide">
                Name
              </th>
              <th className="text-left py-4 px-6 text-gray-500 font-medium uppercase text-sm tracking-wide">
                Composer
              </th>
              <th className="text-left py-4 px-6 text-gray-500 font-medium uppercase text-sm tracking-wide">
                Instrument
              </th>
              <th className="text-left py-4 px-6 text-gray-500 font-medium uppercase text-sm tracking-wide">
                Played
              </th>
              <th className="text-left py-4 px-6 text-gray-500 font-medium uppercase text-sm tracking-wide">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No songs found
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr 
                  key={`${row.id}-${row.name}`}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-6 px-6 font-medium">
                    {row.name}
                  </td>
                  <td className="py-6 px-6 text-gray-700">
                    {row.composer}
                  </td>
                  <td className="py-6 px-6 text-gray-700">
                    {row.instrument}
                  </td>
                  <td className="py-6 px-6">
                    <button
                      onClick={() => handleTogglePlayed(row)}
                      className="w-6 h-6 border-2 border-black rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                      aria-label={row.played ? "Mark as not played" : "Mark as played"}
                    >
                      {row.played && (
                        <svg 
                          className="w-4 h-4" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      )}
                    </button>
                  </td>
                  <td className="py-6 px-6">
                    {row.link ? (
                      <a 
                        href={row.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline break-all"
                      >
                        {row.link}
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}