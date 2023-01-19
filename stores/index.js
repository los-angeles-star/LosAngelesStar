import { defineStore } from 'pinia'
import { Config } from '~/assets/config'
// const config = useRuntimeConfig({this.$nuxt})

export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    metadata: {},
    posts: [],
    authors: [],
    currentAuthor: {},
    postMedia: {},
    tags: [],
    currentPage: {}
  }),
  // optional actions
  actions: {
    async getMeta() {
      if (Object.keys(this.metadata).length !== 0) return

      const res = await useFetch(`${Config.wpDomain}`)
      this.updateMetadata(res.data._rawValue)
    },
    updateMetadata(payload) {
      this.metadata.name = payload.name
      this.metadata.description = payload.description
    },
    async getPostMedia(data) {
      if (Object.keys(this.postMedia).length !== 0) return

      const res = await useFetch(`${Config.wpDomain}${Config.api.media}${data.featuredMedia}`);
      this.postMedia = res.data._rawValue;
    },
    async getPosts() {
      if (this.posts.length) return

      try {
        let posts = await useFetch(
          `${Config.wpDomain}${Config.api.posts}?page=1&per_page=20&_embed=1`
        );
        if (posts.data._rawValue.values()) {
          console.log(posts.data._rawValue);
        }

        posts = posts.data._rawValue;

        posts = posts
          .filter(el => el.status === "publish")
          .map(({ id, slug, title, excerpt, date, modified, author, categories, tags, content, featured_media, link }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            modified,
            author,
            categories,
            tags,
            content,
            featured_media,
            link
          }))

        // this.updatePosts(posts)
        this.posts = posts;
      } catch (err) {
        console.log(err)
      }
    },
    async getAuthors() {
      if (this.authors.length) return

      try {
        let authors = await useFetch(
          `${Config.wpDomain}${Config.api.users}?per_page=10`
        );

        authors = authors.data._rawValue;

        authors = authors
          .map(({ id, name, url, description, link, slug, avatar_urls }) => ({
            id,
            name,
            url,
            description,
            link,
            slug,
            avatar_urls
          }))

        this.authors = authors
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentAuthor(data) {
      if (Object.keys(this.currentAuthor).length !== 0) return

      try {
        let currentAuthor = await useFetch(
          `${Config.wpDomain}${Config.api.users}${data.authorId}`
        );

        currentAuthor = currentAuthor.data._rawValue;

        this.currentAuthor = currentAuthor;
        this.authors.push(currentAuthor);
      } catch (err) {
        console.log(err)
      }
    },
    async getPostMedia(data) {
      if (Object.keys(this.postMedia).length !== 0) return

      try {
        let postMedia = await useFetch(
          `${Config.wpDomain}${Config.api.media}${data.featuredMedia}`
        );

        postMedia = postMedia.data._rawValue;

        this.postMedia = postMedia;
      } catch (err) {
        console.log(err)
      }
    },
    async getTags() {
      if (this.tags.length) return

      let allTags = this.posts.reduce((acc, item) => {
        return acc.concat(item.tags)
      }, [])
      allTags = allTags.join()

      try {
        let tags = await useFetch(
          `${Config.wpDomain}${Config.api.tags}?page=1&per_page=40&include=${allTags}`
        );

        tags = tags.data._rawValue;

        tags = tags.map(({ id, name }) => ({
          id,
          name
        }))

        this.tags = tags;
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentPage(data) {
      if (Object.keys(this.currentPage).length !== 0) return

      try {
        let currentPage = await useFetch(
          `${Config.wpDomain}${Config.api.pages}?slug=${data.slug}`
        );

        currentPage = currentPage.data._rawValue;

        this.currentPage = currentPage[0];

        console.log(
          "%cAction completed",
          "color: white; background-color: green; font-weight: bold;"
        );
        console.timeLog();
      } catch (err) {
        console.log(err)
      }
    }
  }
});
