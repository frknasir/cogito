/*
|-------------------------------------------------------------------------------
| VUEX modules/proficiencyTypes.js 
|-------------------------------------------------------------------------------
| The Vuex data store for the proficiencyTypes
*/

import ProficiencyTypeAPI from '../api/proficiencyType.js';

export const proficiencyType = { 
    state: {
        proficiencyTypes: {},
        proficiencyTypesLoadStatus: 0
    },
    actions: {
        loadProficiencyTypes({commit}, data) {
            commit('setProficiencyTypesLoadStatus', 1);

            ProficiencyTypeAPI.index().then(function(response) {
				commit('setProficiencyTypesLoadStatus', 2);
				commit('setProficiencyTypes', response.data.data);
			})
			.catch(function(response) {
				commit('setProficiencyTypesLoadStatus', 3);
				commit('setProficiencyTypes', []);
			});
        }
    },
    mutations: {
        setProficiencyTypes(state, proficiencyTypes) {
            state.proficiencyTypes = proficiencyTypes;
        },

        setProficiencyTypesLoadStatus(state, status) {
            state.proficiencyTypesLoadStatus = status;
        }
    },
    getters: {
        getProficiencyTypes(state) {
            return state.proficiencyTypes;
        },

        getProficiencyTypesLoadStatus(state) {
            return state.proficiencyTypesLoadStatus;
        }
    }
};