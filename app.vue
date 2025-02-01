<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { usePostStore } from '@/stores/index';

export default defineNuxtComponent({
  setup() {
    const store = usePostStore();

    store.getMeta()
  }
})
</script>