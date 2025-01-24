import axios from 'axios';
import { notify } from '@kyvg/vue3-notification';  // Import notification

// Create Axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      // Optionally redirect to login page
    }
    return Promise.reject(error);
  }
);

// Helper function to get Authorization headers
const getAuthHeaders = (token) => {
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Wrapper function for GET requests
export const get = async (url, token, options = {}) => {
  const { params, ...restOptions } = options;

  return api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
    ...restOptions,
  })
  .then(response => response.data)
  .catch(error => {
    console.error(`GET ${url} failed:`, error);
    throw error;
  });
};

// Wrapper function for POST requests
export const post = async (url, token, data, config = {}) => {
  //console.log('toke?', token);
  try {
    const response = await api.post(url, data, {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
        ...config.headers, // Allow custom headers
      },
    });
    return response.data;
  } catch (error) {
    console.error(`POST ${url} failed:`, error);
    throw error;
  }
};

// Wrapper function for PUT requests
export const put = async (url, token, data, config = {}) => {
  try {
    const response = await api.put(url, data, {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
        ...config.headers,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`PUT ${url} failed:`, error);
    throw error;
  }
};

// Wrapper function for DELETE requests
export const del = async (url, token, config = {}) => {
  try {
    const response = await api.delete(url, {
      ...config,
      headers: getAuthHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error(`DELETE ${url} failed:`, error);
    throw error;
  }
};


export const download = async (url, token, fileName, config = {}) => {
  try {
    const response = await api.get(url, {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
        ...config.headers,
      },
      responseType: 'blob', // Important for downloading files
    });

    // Create a link element to download the file
    const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = urlBlob;
    link.setAttribute('download', fileName); // Set the download filename
    document.body.appendChild(link);
    link.click();

    // Clean up the link element after the download
    document.body.removeChild(link);
    window.URL.revokeObjectURL(urlBlob);
  } catch (error) {
    console.error(`DOWNLOAD ${url} failed:`, error);
    notify({ type: 'error', text: 'File download failed' });
    throw error;
  }
};

export default api;