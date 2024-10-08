<template>
  <div id="app">
    <!-- <BlogHastagSearch @search-hashtag="filterBlogs" /> -->
    <div class="blog-list">
      <MicroBlogCardDisplay v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" @select-tag="filterBlogsByTag"
        @like-blog="likeBlogPost" />
    </div>
  </div>
</template>

<script>
import MicroBlogCardDisplay from './components/MicroBlogCardDisplay.vue';
import useMicroBlog from '../src/useMicroBlog';

export default {
  components: {
    MicroBlogCardDisplay,
    // BlogHastagSearch
  },
  setup() {
    const {
      blogs,
      filteredBlogs,
      filterBlogs,
      filterBlogsByTag,
      likeBlogPost
    } = useMicroBlog();

    return {
      blogs,
      filteredBlogs,
      filterBlogs,
      filterBlogsByTag,
      likeBlogPost
    };
  }
}
</script>

<style>
.blog-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
