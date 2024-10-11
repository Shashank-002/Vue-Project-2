<template>
  <div class="hashtag-search">
    <label for="hashtag">Search Hashtag: #</label>
    <input v-model="searchQuery" @input="filterByHashtag" type="text" id="hashtag" placeholder="Search Hashtag" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  selectedHashtag: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['search-hashtag']);
const searchQuery = ref(props.selectedHashtag);

watch(() => props.selectedHashtag, (newHashtag) => {
  searchQuery.value = newHashtag;
});

const filterByHashtag = () => {
  emit('search-hashtag', searchQuery.value.trim());
};
</script>


<style scoped>
.hashtag-search {
  text-align: left;
  margin-left: 20px;
}

label {
  font-weight: bold;
  font-size: 20px;
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

@media (max-width:1024px) {
  input {
    width: 120px;
  }

  label {
    font-size: 18px;
  }

  .hashtag-search {
    margin-left: 35px;
  }

}

@media (max-width:768px) {
  input {
    width: 120px;
  }

  label {
    font-size: 18px;
  }

  .hashtag-search {
    margin-left: 55px;
  }

}

@media (max-width:430px) {
  input {
    width: 108px;
    font-size: 14px;
  }

  label {
    font-size: 16px;
  }

  .hashtag-search {
    text-align: center;
    margin-left: 0px;
  }

}
</style>