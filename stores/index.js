import { Config } from '~/assets/config';
import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
  // convert to a function
  state: () => ({
    metadata: {},
    posts: [],
    currentAuthor: {},
    postMedia: {},
    tags: [],
    currentPage: {}
  }),
  getters: {},
  actions: {
    async getMeta() {
      if (this.metadata.length) return
  
      try {
        let metadata = await fetch(
          `${Config.wpDomain}`
        ).then(res => res.json())
  
        this.updateMetadata(metadata)
      } catch (err) {
        console.log(err)
  
        this.updateMetadata({
          name: `${Config.appTitle}`,
          description: `${Config.appDescription}`
        })
      }
    },
    async getPosts() {
      if (this.posts.length) return
  
      try {
        let posts = await fetch(
          `${Config.wpDomain}${Config.api.posts}?page=1&per_page=20&_embed=1`
        ).then(res => res.json())
  
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
  
        this.updatePosts(posts);
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentAuthor(data) {
      if (this.currentAuthor.length) return
  
      try {
        let currentAuthor = await fetch(
          `${Config.wpDomain}${Config.api.users}${data.authorId}`
        ).then(res => res.json())
  
        this.updateCurrentAuthor(currentAuthor)
      } catch (err) {
        console.log(err)
      }
    },
    async getPostMedia(data) {
      if (this.postMedia.length) return

      try {
        let postMedia = await fetch(
          `${Config.wpDomain}${Config.api.media}${data.featured_media}`
        ).then(res => res.json())
  
        this.updatePostMedia(postMedia)
      } catch (err) {
        console.log(err)
      }
    },
    async getTags() {
      if (this.tags.length) return
  
      let allTags = state.posts.reduce((acc, item) => {
        return acc.concat(item.tags)
      }, [])
      allTags = allTags.join()
  
      try {
        let tags = await fetch(
          `${Config.wpDomain}${Config.api.tags}?page=1&per_page=40&include=${allTags}`
        ).then(res => res.json())
  
        tags = tags.map(({ id, name }) => ({
          id,
          name
        }))
  
        this.updateTags(tags)
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentPage(data) {
      if (this.currentPage.length) return
  
      try {
        let currentPage = await fetch(
          `${Config.wpDomain}${Config.api.pages}?slug=${data}`
        ).then(res => res.json())
  
        this.updateCurrentPage(currentPage[0])
      } catch (err) {
        console.log(err)
      }
    },
    updateMetadata(metadata) {
      this.metadata = metadata
    },
    updatePosts(posts) {
      this.posts = posts
    },
    updateCurrentAuthor(author) {
      this.currentAuthor = author
      // this.authors.push(author)
    },
    updatePostMedia(postMedia) {
      this.postMedia = postMedia
    },
    updateTags(tags) {
      this.tags = tags
    },
    updateCurrentPage(currentPage) {
      console.time("current page")
      this.currentPage = currentPage
  
      console.log(
        "%cCurrent Page data updated",
        "color: white; background-color: green; font-weight: bold;"
      );
      console.timeLog("current page");
    }
  },
})