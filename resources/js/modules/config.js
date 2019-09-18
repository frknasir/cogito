/*
|-------------------------------------------------------------------------------
| VUEX modules/config.js
|-------------------------------------------------------------------------------
| The Vuex data store for the config
*/

import ConfigAPI from '../api/config.js';

export const config = {
    state: {
        config: {},
        configLoadStatus: 0,
        updateConfigLoadStatus: 0,
        updateConfigResponse: {}
    },
    actions: {
        loadConfig({commit}) {
            commit('setConfigLoadStatus', 1);

            ConfigAPI.show().then(function(response) {
                commit('setConfigLoadStatus', 2);
                commit('setConfig', response.data.data);
            }).catch(function() {
                commit('setConfigLoadStatus', 3);
                commit('setConfig', {});
            });
        },
        updateConfig({commit}, data) {
            commit('setUpdateConfigLoadStatus', 1);

            ConfigAPI.update(
                data.id,
                data.site_name,
                data.site_title,
                data.site_description,
                data.site_logo,
                data.office_address,
                data.email,
                data.phone_number,
                data.twitter_url,
                data.facebook_url,
                data.instagram_url,
                data.linkedin_url
            ).then(function(response) {
                commit('setUpdateConfigLoadStatus', 2);
                commit('setUpdateConfigResponse', response.data);
            }).catch(function() {
                commit('setUpdateConfigLoadStatus', 3);
                commit('setUpdateConfigResponse', {});
            });
        }
    }, 
    mutations: {
        setConfig(state, config) {
            state.config = config;
        },
        setConfigLoadStatus(state, status) {
            state.configLoadStatus = status;
        },
        setUpdateConfigLoadStatus(state, status) {
            state.updateConfigLoadStatus = status;
        },
        setUpdateConfigResponse(state, response) {
            state.updateConfigResponse = response;
        }
    },
    getters: {
        getConfig(state) {
            return state.config;
        },
        getConfigLoadStatus(state) {
            return state.configLoadStatus;
        },
        getUpdateConfigLoadStatus(state) {
            return state.updateConfigLoadStatus;
        },
        getUpdateConfigResponse(state) {
            return state.updateConfigResponse;
        }
    }
};
