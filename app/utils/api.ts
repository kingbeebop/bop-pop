// api.ts
const apiUrl = 'http://167.172.251.135/api';

const baseFetch = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${apiUrl}${url}`, {
    mode: 'cors',
    credentials: 'include',
    ...options,
  });

  if (!response.ok) {
    console.log(response)
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

const apiRequest = async (url: string) => {
  const response = await baseFetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export const loginRequest = async (username: string, password: string) => {
  try {
    const response = await fetch(`${apiUrl}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Return response data if needed
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error: any) {
    console.error('Login error:', error.message);
    throw error;
  }
};

export const logoutRequest = async () => {
  const response = await fetch(`${apiUrl}/logout/`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to logout');
  }
};

export const registerRequest = async (
  username: string,
  password1: string,
  password2: string,
  email: string
) => {
  const response = await fetch(`${apiUrl}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password1, password2, email }),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }
};

export const forgotPasswordRequest = async (username: string) => {
  // Implement your forgot password request logic
};

export const fetchPlaylist = async (playlistId: number) => {
  const url = `${apiUrl}/playlists/${playlistId}`;
  console.log('Fetching Playlist:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching playlist data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    return responseData;
  } catch (error: any) {
    console.error('Error fetching playlist data:', error.message);
    throw error;
  }
};



export const fetchPlaylists = async (
  limit: number = 10,
  page: number = 1,
  search: string = ''
) => {
  const apiUrl = 'http://167.172.251.135/api'; // You can move this to a global config if needed
  const url = `${apiUrl}/playlists/?limit=${limit}&page=${page}&search=${search}`;

  console.log('Fetching Playlists:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors', // Add this line
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching playlists data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData); // Log the response for inspection
    return responseData;
  } catch (error: any) {
    console.error('Error fetching playlists data:', error.message);
    throw error;
  }
};

export const fetchArtist = async (artistId: number) => {
  const url = `${apiUrl}/artists/${artistId}`;
  console.log('Fetching Artist:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching playlist data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    return responseData;
  } catch (error: any) {
    console.error('Error fetching artist data:', error.message);
    throw error;
  }
};

export const fetchArtistByName = async (artistName: string) => {
  const apiUrl = 'http://example.com/api'; // Replace with your actual API URL
  const url = `${apiUrl}/artists?name=${encodeURIComponent(artistName)}`; // Encode artistName in the URL

  console.log('Fetching Artist:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching artist data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    return responseData;
  } catch (error: any) {
    console.error('Error fetching artist data:', error.message);
    throw error;
  }
};


export const fetchArtists = async (
  limit: number = 10,
  page: number = 1,
  search: string = ''
) => {
  const url = `${apiUrl}/artists/?limit=${limit}&page=${page}&search=${search}`;

  console.log('Fetching Artists:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors', // Add this line
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching artists data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData); // Log the response for inspection
    return responseData;
  } catch (error: any) {
    console.error('Error fetching artists data:', error.message);
    throw error;
  }
};

export const fetchSubmission = async () => {
  const url = `${apiUrl}/submission`;
  console.log('Fetching Submission:', url);
  try {
    const response = await fetch(url, {
      mode: 'cors', // Add this line
      credentials: 'include',
    });

    if (response.status === 204) {
      console.log('No submission found');
      return null; // Indicate that there's no result
    }

    if (!response.ok) {
      console.error('Error fetching submission data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData); // Log the response for inspection
    return responseData;
  } catch (error: any) {
    console.error('Error fetching submission data:', error.message);
    throw error;
  }
}

interface SubmissionData {
  url: string;
  title: string;
}

export const submitOrUpdateSubmission = async (data: SubmissionData) => {
  const response = await fetch(`${apiUrl}/songs/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit or update submission');
  }

  return response.json();
};

export const fetchChallengeData = async () => {
  const url = `${apiUrl}/challenge`;
  console.log('Fetching Challenge:', url);

  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Error fetching challenge data:', response);
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    return responseData;
  } catch (error: any) {
    console.error('Error fetching challenget data:', error.message);
    throw error;
  }
}

interface VoteReviewData {
  id: string;
  review: string;
}

export const submitVoteAndReview = async (data: VoteReviewData) => {
  const response = await fetch(`${apiUrl}/vote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit vote and review');
  }

  return response.json();
};