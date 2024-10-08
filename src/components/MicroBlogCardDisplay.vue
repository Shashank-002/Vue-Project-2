<template>
    <div class="card">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
        <div class="hashtags">
            <span v-for="tag in blog.hashtags" :key="tag" @click="selectHashtag(tag)">
                #{{ tag }}
            </span>
        </div>
        <div class="likes">
            <span @click="likeBlog"> <font-awesome-icon :icon="['fas', 'heart']" /> {{ blog.likes }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: Object
    },
    methods: {
        selectHashtag(tag) {
            this.$emit('select-tag', tag);
        },
        likeBlog() {
            this.$emit('like-blog', this.blog.id);
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
}

.hashtags span {
    cursor: pointer;
    margin-right: 5px;
}

.likes span {
    cursor: pointer;
}
</style>