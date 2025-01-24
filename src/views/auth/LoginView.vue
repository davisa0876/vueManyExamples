<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      
      <LoginForm @success="onLoginSuccess" @error="onLoginError" />

      <div class="text-sm text-center">
        <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
          Don't have an account? Register
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    LoginForm
  },
  methods: {
    onLoginSuccess() {
      // Additional success handling if needed
    },
    onLoginError(error) {
      // Additional error handling if needed
    }
  }
};
</script> 