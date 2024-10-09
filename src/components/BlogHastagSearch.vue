<template>
  <div class="hashtag-container">
    <label for="hashtag">Search Hashtag: #</label>
    <input v-model="searchQuery" @input="filterByHashtag" type="text" id="hashtag" placeholder="Search Hashtag">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    filterByHashtag() {
      this.$emit('search-hashtag', this.searchQuery);
    }
  }
}
</script>

<style scoped>
.hashtag-container {
  text-align: left;
  margin-left: 20px;
}

label {
  font-weight: bold;
  font-size: 1.2rem;
}

input {
  margin: 10px auto;
  padding: 5px;
  width: 200px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid gray;
}

@media (max-width:768px) {
  input {
    width: 115px;
  }

  .hashtag-container {
    margin-left: 102px;
  }

}

@media (max-width:430px) {
  input {
    width: 120px;
  }

  .hashtag-container {
    text-align: center;
    margin-left: 0px;
  }

}
</style>