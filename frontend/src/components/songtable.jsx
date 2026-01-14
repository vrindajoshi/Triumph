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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!personId) return <div>No person ID provided</div>;

  return (
    <div>
      <h1>Songs</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Composer</th>
            <th>Instrument</th>
            <th>Link</th>
            <th>Played</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5">No songs found</td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={`${row.id}-${row.name}`}>
                <td>{row.name}</td>
                <td>{row.composer}</td>
                <td>{row.instrument}</td>
                <td>
                  {row.link ? (
                    <a href={row.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.played || false}
                    onChange={() => handleTogglePlayed(row)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <p>Total: {data.length}</p>
    </div>
  );
}