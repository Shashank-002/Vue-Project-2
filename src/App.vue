<template>
  <div id="app">
    <BlogHastagSearch @search-hashtag="filterBlogs" />
    <div class="blog-list">
      <MicroBlogCardDisplay v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" @select-tag="filterBlogsByTag"
        @like-blog="likeBlogPost" />
    </div>
  </div>
</template>

<script setup>
import MicroBlogCardDisplay from './components/MicroBlogCardDisplay.vue';
import BlogHastagSearch from './components/BlogHastagSearch.vue'
import useMicroBlog from '../src/useMicroBlog';

const {
  filteredBlogs,
  filterBlogs,
  filterBlogsByTag,
  likeBlogPost
} = useMicroBlog();
</script>

<style>
.blog-list {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width:768px) {
  .blog-list {
    justify-content: center;
  }
}
</style>
