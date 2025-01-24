<template>
  <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="name" class="sr-only">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Full name"
        />
      </div>
      <div>
        <label for="email" class="sr-only">Email address</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
        />
      </div>
      <div>
        <label for="password_confirmation" class="sr-only">Confirm Password</label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Confirm password"
        />
      </div>
    </div>

    <div v-if="error" class="text-red-500 text-sm text-center">
      {{ error }}
    </div>

    <div>
      <button
        type="submit"
        :disabled="loading"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg v-if="!loading" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
          <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        {{ loading ? 'Creating account...' : 'Create account' }}
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'RegisterForm',
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const store = useStore();
    const form = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
    const loading = ref(false);
    const error = ref('');

    const handleSubmit = async () => {
      try {
        loading.value = true;
        error.value = '';
        await store.dispatch('auth/register', form.value);
        emit('success');
      } catch (err) {
        error.value = err.response?.data?.message || 'An error occurred during registration';
        emit('error', error.value);
      } finally {
        loading.value = false;
      }
    };

    return {
      form,
      loading,
      error,
      handleSubmit
    };
  }
};
</script> 