const siteURL = "https://css-tricks.com"

export const state = () => ({
  metadata: [],
  posts: [],
  tags: []
})

export const getters = {};

export const mutations = {
  updateMetadata: (state, metadata) => {
    state.metadata = metadata
  },
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  }
}

export const actions = {
  async getMeta({ state, commit }) {
    if (state.metadata.length) return

    try {
      let metadata = await fetch(
        `${siteURL}/wp-json/`
      ).then(res => res.json())

      metadata = metadata
        .map(({ name, description }) => ({
          name,
          description
        }))

      commit("updateMetadata", metadata)
    } catch (err) {
      console.log(err)
    }
  },
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, modified, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          modified,
          categories,
          tags,
          content,
          featuredMedia
        }))

      commit("updatePosts", posts)
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
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
