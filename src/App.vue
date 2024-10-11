<template>
  <div id="app">
    <BlogHastagSearch :selectedHashtag="searchTag" @search-hashtag="filterBlogs" />
    <BlogCardView :filtered-blogs="filteredBlogs" :selected-hashtag="searchTag" @select-tag="filterBlogsByTag"
      @like-blog="likeBlogPost" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BlogHastagSearch from './components/BlogHastagSearch.vue';
import BlogCardView from './components/BlogCardView.vue';
import useMicroBlog from './composable/useMicroBlog';

const { filteredBlogs, filterBlogs, likeBlogPost } = useMicroBlog();

const searchTag = ref('');
const filterBlogsByTag = (tag) => {
  searchTag.value = tag;
  filterBlogs(tag);
};
</script>

<style>
.blog-list {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .blog-list {
    justify-content: center;
  }
}
</style>
