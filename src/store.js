import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const userData = JSON.parse(localStorage.getItem("user"));

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  asideShow: false,
  darkMode: false,

  user: {
    ticket: userData ? userData.ticket : "",
    userId: userData ? userData.userId : "",
    displayName: userData ? userData.displayName : "",
    groups: userData ? userData.groups : [],
    email: userData ? userData.email : ""
  }
};

const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  set(state, [variable, value]) {
    state[variable] = value;
  },
  toggle(state, variable) {
    state[variable] = !state[variable];
  }
};

export default new Vuex.Store({
  state,
  mutations
});
