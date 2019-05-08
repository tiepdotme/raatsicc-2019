/* import axios from "axios";

export function state() {
  return {
    currentPage: "/",
    isMobileNavVisible: false,
    contactData: null
  };
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_CONTACT_DATA(state, data) {
    state.contactData = data;
  },

  SET_MOBILENAV_VISIBILITY(state, visibility) {
    state.isMobileNavVisible = visibility;
  }
}; */

/* export const actions = {
  async FETCH_CONTACT_DATA(context) {
    const response = await axios.get(
      "https://api.storyblok.com/v1/cdn/stories/contact?version=published&token=YxEr5pOPCi21mg1QU7ariwtt&cv=" +
        Math.floor(Date.now() / 1e3)
    );

    context.commit("SET_CONTACT_DATA", response.data.story);
  },
  nuxtServerInit(context, { req }) {
    return context.dispatch("FETCH_CONTACT_DATA");
  }
}; */
