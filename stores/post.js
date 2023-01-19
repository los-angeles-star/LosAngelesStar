import { Config } from '~/assets/config'

export const state = () => ({
  post: {},
})

export const getters = {
  post: state => state.post,
}

export const mutations = {
  updatePost: (state, post) => {
    state.post = post
  }
}

export const actions = {
  async getPost({ state, commit, dispatch }, data) {
    if (Object.keys(this.post).length) return

    try {
      let post = await fetch(
        `${Config.wpDomain}${Config.api.posts}?slug=${data.slug}`
      ).then(res => res.json())

      post = post
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

      commit("updatePost", post[0])
    } catch (err) {
      console.log(err)
    }
  }
}
