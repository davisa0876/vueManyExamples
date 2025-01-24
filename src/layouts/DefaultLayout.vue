<template>
  <div class="flex h-screen">
    <AppSidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <AppHeader />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSidebar
  }
};
</script> 