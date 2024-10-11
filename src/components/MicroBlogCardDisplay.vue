<template>
    <div class="card">
        <h3>{{ blog.title }}</h3>
        <hr>
        <p>{{ blog.description }}</p>
        <hr>
        <div class="likes">
            <span @click="likeBlog">
                <font-awesome-icon :icon="['fas', 'heart']" class="heart-icon" />
                {{ blog.likes }}
            </span>
        </div>

        <div class="hashtags">
            <span v-for="tag in blog.hashtags" :key="tag" @click="selectHashtag(tag)">
                #{{ tag }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    blog: Object
});

const emit = defineEmits(['select-tag', 'like-blog']);

const selectHashtag = (tag) => {
    emit('select-tag', tag);
};

const likeBlog = () => {
    emit('like-blog', props.blog.id);
};
</script>

<style scoped>
.card {
    background-color: rgb(239, 238, 238);
    border-radius: 10px;
    border: 2px solid gray;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    margin: 20px;
    padding: 20px 0px;
    max-width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
}

h3 {
    font-size: 1.5em;
    color: #333;
    margin: 10px 0;
    padding: 0 10px;
    min-height: 60px;
}

p {
    font-size: 1.2rem;
    color: #000;
    font-weight: bold;
    line-height: 1.3;
    margin: 0px 20px;
    min-height: 125px;
}

hr {
    border: 1px solid gray;
    width: 100%;
    margin: 10px 0px;
}

.hashtags {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: underline;
    cursor: pointer;
}

.likes {
    font-size: 1.2em;
    color: #333;
    margin: 15px auto;
}

.heart-icon {
    color: #e74c3c;
    margin-right: 5px;
    transition: color 0.3s ease;
}

.likes span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.likes span:hover .heart-icon {
    color: #ff6b6b;
}

@media (max-width:1024px) {
    .card {
        margin: 20px auto;
    }
}
</style>
