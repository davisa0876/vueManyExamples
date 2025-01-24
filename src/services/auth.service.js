import api from './api';

class AuthService {
  async login(credentials) {
    const response = await api.post('/login', credentials);
    if (response.data.access_token) {
      this.setToken(response.data.access_token);
    }
    return response.data;
  }

  async register(data) {
    const response = await api.post('/register', data);
    if (response.data.access_token) {
      this.setToken(response.data.access_token);
    }
    return response.data;
  }

  async logout() {
    try {
      await api.post('/logout');
    } finally {
      this.removeToken();
    }
  }

  setToken(token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  }

  removeToken() {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

export default new AuthService(); 