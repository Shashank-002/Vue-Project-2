<template>
  <div id="app">
    <BlogHastagSearch :selectedHashtag="selectedTag" @search-hashtag="filterBlogs" />
    <HashtagCardView
      :filtered-blogs="filteredBlogs"
      :selected-hashtag="selectedTag"
      @select-tag="filterBlogsByTag"
      @like-blog="likeBlogPost"
    />
  </div>
</template>

<script setup>
import BlogHastagSearch from './components/BlogHastagSearch.vue';
import HashtagCardView from './components/HashtagCardView.vue';
import useMicroBlog from './useMicroBlog';

const { filteredBlogs, filterBlogs, filterBlogsByTag, likeBlogPost, selectedTag } = useMicroBlog();
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
