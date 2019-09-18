/*
|-------------------------------------------------------------------------------
| VUEX modules/resource.js
|-------------------------------------------------------------------------------
| The Vuex data store for the resource
*/

import NewsletterAPI from '../api/newsletter';

export const newsletter = {
    state: {
        newsletterLoadStatus: 0,
        Newsletter: [],
        newsletterEmail: [],
        subscribeNewsletterLoadStatus: 0,
        subscribeNewsletterResult: {
            success: 0
        },
        unsubscribeNewsletterLoadStatus: 0,
        unsubscribeNewsletterResult: {}
    },
    actions: {
        getNewsletter({ commit }, data) {
            commit('setNewsletterLoadStatus', 1);

            NewsletterAPI.getNewsletter().then(function (response) {
                commit('setNewsletterLoadStatus', 2);
                commit('setNewsletter', response.data);
            }).catch(function () {
                commit('setNewsletterLoadStatus', 3);
                commit('setNewsletter', []);
            });
        },
        subscribeNewsletter({ commit }, data) {
            commit('setSubscribeNewsletterLoadStatus', 1);
            NewsletterAPI.subscribeNewsletter(data)
                .then(function (response) {
                    commit('setSubscribeNewsletterLoadStatus', 2);
                    commit('setSubscribeNewsletterResult', response.data);
                }).catch(function () {
                    commit('setSubscribeNewsletterLoadStatus', 3);
                    commit('setSubscribeNewsletterResult', {
                        success: 0,
                        message: 'Something went wrong. Try again!'
                    });
                });
        },

        unsubscribeNewsletter({ commit }, data) {
            commit('setUnsubscribeNewsletterLoadStatus', 1);

            NewsletterAPI.unsubscribeNewsletter(
                data
            ).then(function (response) {
                commit('setUnsubscribeNewsletterLoadStatus', 2);
                commit('setUnsubscribeNewsletterResult', response.data);
            }).catch(function () {
                commit('setUnsubscribeNewsletterLoadStatus', 3);
                commit('setUnsubscribeNewsletterResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
        setNewsletterLoadStatus(state, status) {
            state.NewsletterLoadStatus = status;
        },
        setNewsletter(state, newsletter) {
            state.Newsletter = newsletter;
        },

        setSubscribeNewsletterLoadStatus(state, status) {
            state.subscribeNewsletterLoadStatus = status;
        },

        setSubscribeNewsletterResult(state, result) {
            state.subscribeNewsletterResult = result;
        },

        setUnsubscribeNewsletterLoadStatus(state, status) {
            state.unsubscribeNewsletterLoadStatus = status;
        },

        setUnsubscribeNewsletterResult(state, result) {
            state.unsubscribeNewsletterResult = result;
        }
    },
    getters: {
        getNewsletter(state) {
            return state.Newsletter;
        },

        getSubscribeNewsletterLoadStatus(state) {
            return state.subscribeNewsletterLoadStatus;
        },

        getSubscribeNewsletterResult(state) {
            return state.subscribeNewsletterResult;
        },

        getUnsubscribeNewsletterLoadStatus(state) {
            return state.unsubscribeNewsletterLoadStatus;
        },

        getUnsubscribeNewsletterResult(state) {
            return state.unsubscribeNewsletterResult;
        }
    }
};
