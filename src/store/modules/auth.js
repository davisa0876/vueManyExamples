import AuthService from '@/services/auth.service';
import router from '@/router';

// Helper function to safely parse JSON
const safeJSONParse = (str, fallback = null) => {
  try {
    return str ? JSON.parse(str) : fallback;
  } catch (e) {
    console.error('JSON Parse error:', e);
    return fallback;
  }
};

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    user: safeJSONParse(localStorage.getItem('user'), null)
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    SET_USER(state, user) {
      state.user = user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    },
    CLEAR_AUTH(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await AuthService.login(credentials);
        commit('SET_TOKEN', response.access_token);
        commit('SET_USER', response.user);
        router.push('/dashboard');
        return response;
      } catch (error) {
        throw error;
      }
    },

    async register({ commit }, data) {
      try {
        const response = await AuthService.register(data);
        commit('SET_TOKEN', response.access_token);
        commit('SET_USER', response.user);
        router.push('/dashboard');
        return response;
      } catch (error) {
        throw error;
      }
    },

    async logout({ commit }) {
      try {
        await AuthService.logout();
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        commit('CLEAR_AUTH');
        router.push('/login');
      }
    }
  },

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    userName: state => state.user?.name || 'User',
    user: state => state.user
  }
}; 