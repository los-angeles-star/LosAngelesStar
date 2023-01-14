import { defineStore } from 'pinia'
import { Config } from '~/assets/config'

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
    async getMeta({ state, commit }) {
      if (state.metadata.length) return

      try {
        let metadata = await fetch(
          `${Config.wpDomain}`
        ).then(res => res.json())

        commit("updateMetadata", metadata)
      } catch (err) {
        console.log(err)

        commit("updateMetadata", {
          name: `${Config.appTitle}`,
          description: `${Config.appDescription}`
        })
      }
    },
    async getPosts({ state, commit, dispatch }) {
      if (state.posts.length) return

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

        commit("updatePosts", posts)
      } catch (err) {
        console.log(err)
      }
    },
    async getAuthors({ state, commit }) {
      if (state.authors.length) return

      try {
        let authors = await fetch(
          `${Config.wpDomain}${Config.api.users}?per_page=10`
        ).then(res => res.json())

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

        commit("updateAuthors", authors)
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentAuthor({ state, commit }, data) {
      if (state.currentAuthor.length) return

      try {
        let currentAuthor = await fetch(
          `${Config.wpDomain}${Config.api.users}${data.authorId}`
        ).then(res => res.json())

        commit("updateCurrentAuthor", currentAuthor)
      } catch (err) {
        console.log(err)
      }
    },
    async getPostMedia({ state, commit }, data) {
      if (state.postMedia.length) return

      try {
        let postMedia = await fetch(
          `${Config.wpDomain}${Config.api.media}${data.featuredMedia}`
        ).then(res => res.json())

        commit("updatePostMedia", postMedia)
      } catch (err) {
        console.log(err)
      }
    },
    async getTags({ state, commit }) {
      if (state.tags.length) return

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

        commit("updateTags", tags)
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrentPage({ state, commit }, data) {
      if (state.currentPage.length) return

      try {
        let currentPage = await fetch(
          `${Config.wpDomain}${Config.api.pages}?slug=${data.slug}`
        ).then(res => res.json())

        commit("updateCurrentPage", currentPage[0])
      } catch (err) {
        console.log(err)
      }
    },
    updateMetadata(state, metadata) {
      state.metadata = metadata
    },
    updatePosts(state, posts) {
      state.posts = posts
    },
    updateAuthors(state, authors) {
      state.authors = authors
    },
    updateCurrentAuthor(state, author) {
      state.currentAuthor = author
      state.authors.push(author)
    },
    updatePostMedia(state, postMedia) {
      state.postMedia = postMedia
    },
    updateTags(state, tags) {
      state.tags = tags
    },
    updateCurrentPage(state, currentPage) {
      state.currentPage = currentPage

      console.log(
        "%cAction completed",
        "color: white; background-color: green; font-weight: bold;"
      );
      console.timeLog();
    },
  }
});
