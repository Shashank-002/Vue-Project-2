import { ref, computed } from "vue";
import blogsData from "./data/data.json";

export default function useMicroBlog() {
  const blogs = ref(blogsData);
  const searchQuery = ref("");
  const selectedTag = ref("");

  const filteredBlogs = computed(() => {
    let filtered = blogs.value;

    if (searchQuery.value) {
      filtered = filtered.filter((blog) =>
        blog.hashtags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      );
    }

    if (selectedTag.value) {
      filtered = filtered.filter((blog) =>
        blog.hashtags.includes(selectedTag.value)
      );
    }

    return filtered;
  });

  const filterBlogs = (query) => {
    searchQuery.value = query;
  };

  const filterBlogsByTag = (tag) => {
    selectedTag.value = tag;
  };

  const likeBlogPost = (blogId) => {
    const blog = blogs.value.find((b) => b.id === blogId);
    if (blog) {
      blog.likes++;
    }
  };

  return {
    blogs,
    filteredBlogs,
    filterBlogs,
    filterBlogsByTag,
    likeBlogPost,
  };
}
