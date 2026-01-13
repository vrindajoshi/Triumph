const API_URL = 'http://localhost:5000/api/airtable'; 

export const songsAPI = {
  getAllSongs: async () => {
    try {
      const response = await fetch(`${API_URL}/songs`); 
      if (!response.ok) throw new Error('Failed to fetch songs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
  },

  updateSongStatus: async (name, personId, played) => {
    try {
      const response = await fetch(`${API_URL}/songs/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, personId, played }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update song');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating song:', error);
      throw error;
    }
  },
};