<template>
    <WordPressPost v-if="post" :key="post.id" v-bind="post" />
    <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '@/stores/index.js';

definePageMeta({
    validate: async (route) => {
        // Check if the slug is made up of digits
        return typeof route.params.slug === 'string' && /^[^\s!?\/.*#|]+$/.test(route.params.slug)
    }
})

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    protected: boolean;
    rendered: string;
  };
  date: string;
  modified: string;
  author: number;
  categories: [];
  tags: [];
  content: {
    protected: boolean;
    rendered: string;
  };
  featured_media: number;
  link: string;
}

const postStore = usePostStore();
const route = useRoute();
console.log(route)
const slug = ref(route.params.slug);

const posts = computed(() => postStore.posts as Post[]);
const post = computed(() => posts.value.find(el => el.slug === slug.value));
const authors = computed(() => postStore.currentAuthor);

postStore.getPosts();
postStore.getCurrentAuthor();
</script>