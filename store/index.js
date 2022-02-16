import { createClient } from 'newt-client-js'

export const state = () => ({
  app: null,
})

export const getters = {
  app: (state) => state.app,
}

export const mutations = {
  setApp(state, app) {
    state.app = app
  },
}

export const actions = {
  async fetchApp({ commit }, { projectUid, token, apiType, appUid }) {
    try {
      const client = createClient({
        projectUid,
        token,
        apiType,
      })
      const app = await client.getApp({
        appUid,
      })
      commit('setApp', app)
    } catch (err) {
      // console.error(err)
    }
  },
}
