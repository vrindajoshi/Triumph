const API_URL = 'https://triumph-71cy.onrender.com/api/airtable/songs'; 

export const songsAPI = {
  getAllSongs: async (personId = null) => {
    try {
      const url = personId 
        ? `${API_URL}?personId=${personId}` 
        : `${API_URL}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch songs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
  },

  updateSongStatus: async (name, personId, played) => {
    try {
      const response = await fetch(`https://triumph-71cy.onrender.com/api/airtable/songs/status`, { // Also update this
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