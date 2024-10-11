<template>
  <div v-if="filteredBlogs.length > 0" class="card-display">
    <MicroBlogCardDisplay v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" @select-tag="filterBlogsByTag"
      @like-blog="likeBlogPost" />
  </div>
  <div v-else>
    <p>No blogs found for this hashtag.</p>
  </div>
</template>

<script>
import MicroBlogCardDisplay from './MicroBlogCardDisplay.vue';

export default {
  props: {
    filteredBlogs: Array,
    selectedHashtag: String
  },
  components: {
    MicroBlogCardDisplay
  },
  methods: {
    filterBlogsByTag(tag) {
      this.$emit('select-tag', tag);
    },

    likeBlogPost(blogId) {
      this.$emit('like-blog', blogId);
    }
  }
}
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