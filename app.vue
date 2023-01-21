<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script>
import { useMainStore } from '@/stores/';

export default defineNuxtComponent({
  setup() {
    const store = useMainStore();

    store.getMeta()
  }
})
</script>
