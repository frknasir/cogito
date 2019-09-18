/*
|-------------------------------------------------------------------------------
| VUEX modules/misc.js
|-------------------------------------------------------------------------------
| The Vuex data store for the misc
*/

import MiscAPI from '../api/misc';
 
export const misc = {
    state: {
        sendContactMailLoadStatus: 0,
        sendContactMailResponse: {},
        sendApplyForMembershipMailLoadStatus: 0,
        sendApplyForMembershipMailResponse: {}
    },
    actions: {
        sendContactMail({commit}, data) {
            commit('setSendContactMailLoadStatus', 1);

            MiscAPI.sendContactMail(
                data.first_name,
                data.last_name,
                data.email,
                data.subject,
                data.message
            ).then(function(response) {
                commit('setSendContactMailLoadStatus', 2);
                commit('setSendContactMailResponse', response);
            }).catch(function() {
                commit('setSendContactMailLoadStatus', 3);
                commit('setSendContactMailResponse', {});
            });
        },
        sendApplyForMembershipMail({commit}, data) {
            commit('setSendApplyForMembershipMailLoadStatus', 1);

            MiscAPI.applyForMembership(
                data.last_name,
                data.first_name,
                data.birth_date,
                data.birth_city,
                data.nationality,
                data.email,
                data.phone_number,
                data.publications,
                data.experience_years,
                data.experience_subjects,
                data.residence_city,
                data.references
            ).then(function(response) {
                commit('setSendApplyForMembershipMailLoadStatus', 2);
                commit('setSendApplyForMembershipMailResponse', response);
            }).catch(function() {
                commit('setSendApplyForMembershipMailLoadStatus', 3);
                commit('setSendApplyForMembershipMailResponse', {});
            });
        }
    },
    mutations: {
        setSendContactMailLoadStatus(state, status) {
            state.sendContactMailLoadStatus = status;
        },
        setSendContactMailResponse(state, response) {
            state.sendContactMailResponse = response;
        },
        setSendApplyForMembershipMailLoadStatus(state, status) {
            state.sendApplyForMembershipMailLoadStatus = status;
        },
        setSendApplyForMembershipMailResponse(state, response) {
            state.sendApplyForMembershipMailResponse = response;
        }
    },
    getters: {
        getSendContactMailLoadStatus(state) {
            return state.sendContactMailLoadStatus;
        },
        getSendContactMailResponse(state) {
            return state.sendContactMailResponse;
        },
        getSendApplyForMembershipMailLoadStatus(state) {
            return state.sendApplyForMembershipMailLoadStatus;
        },
        getSendApplyForMembershipMailResponse(state) {
            return state.sendApplyForMembershipMailResponse;
        }
    }
}