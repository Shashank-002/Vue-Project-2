<template>
  <div v-if="filteredBlogs.length > 0" class="card-display">
    <MicroBlogCardDisplay v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" @select-tag="filterBlogsByTag"
      @like-blog="likeBlogPost" />
  </div>
  <div v-else>
    <p>No blogs found for this hashtag.</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import MicroBlogCardDisplay from './MicroBlogCardDisplay.vue';

defineProps({
  filteredBlogs: Array,
});

const emit = defineEmits(['select-tag', 'like-blog']);

const filterBlogsByTag = (tag) => {
  emit('select-tag', tag)
};

const likeBlogPost = (blogId) => {
  emit('like-blog', blogId)
};
</script>

<style scoped>
.card-display {
  display: flex;
  gap: 20px;
}

p {
  color: red;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  margin-left: 20px;
}

@media (max-width:1024px) {
  .card-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  p {
    text-align: center;
  }
}

@media (max-width:768px) {
  .card-display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  p {
    text-align: center;
  }
}

@media (max-width:475px) {
  .card-display {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    text-align: center;
  }
}
</style>