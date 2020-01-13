import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        signUserUp({ commit }, payload) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.user.uid
                    };
                    commit('setUser', newUser);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        loginUser({ commit }, payload) {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.user.uid
                    };
                    commit('setUser', newUser);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        logoutUser() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.commit('setUser', null);
                });
        },
        changeUser({ commit }, payload) {
            commit('setUser', payload);
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isLoggedIn: state => state.user !== null
    },
    modules: {}
});
