<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      
      <RegisterForm @success="onRegisterSuccess" @error="onRegisterError" />

      <div class="text-sm text-center">
        <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          Already have an account? Sign in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  },
  methods: {
    onRegisterSuccess() {
      // Additional success handling if needed
    },
    onRegisterError(error) {
      // Additional error handling if needed
    }
  }
};
</script> 