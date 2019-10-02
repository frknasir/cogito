/*
|-------------------------------------------------------------------------------
| VUEX modules/proficiency.js 
|-------------------------------------------------------------------------------
| The Vuex data store for the proficiency
*/

import ProficiencyAPI from '../api/proficiency.js';

export const proficiency = { 
    state: {
        proficiencies: [],
		proficienciesLoadStatus: 0,
		profPagination: {},
        proficiency: {},
        proficiencyLoadStatus: 0,
        addProficiencyLoadStatus: 0,
        addProficiencyResult: {},
        updateProficiencyLoadStatus: 0,
        updateProficiencyResult: {},
        deleteProficiencyLoadStatus: 0,
        deleteProficiencyResult: {}
    },
    actions: {
        loadProficiencies({commit}, data) {
            commit('setProficienciesLoadStatus', 1);

            ProficiencyAPI.index(
				data.url
			).then(function(response) {
				commit('setProficienciesLoadStatus', 2);
				commit('setProficiencies', response.data.data);
				commit('setProfPagination', {
					meta: response.data.meta,
					links: response.data.links
				});
			})
			.catch(function(response) {
				console.error(response);
				commit('setProficienciesLoadStatus', 3);
				commit('setProficiencies', []);
			});
        },

        loadProficiency({commit}, data) {
            commit('setProficiencyLoadStatus', 1);

            ProficiencyAPI.show(
                data.id
            ).then(function(response) {
                commit('setProficiencyLoadStatus', 2);
                commit('setProficiency', response.data.data);
            }).catch(function() {
                commit('setProficiencyLoadStatus', 3);
                commit('setProficiency', {});
            });
        },

        addProficiency({commit, state, dispatch}, data) {
            commit('setAddProficiencyLoadStatus', 1);

            ProficiencyAPI.store(
				data.proficiency_type_id,
				data.title,
				data.value
            ).then(function(response) {
                commit('setAddProficiencyLoadStatus', 2);
                commit('setAddProficiencyResult', response.data);
            }).catch(function() {
                commit('setAddProficiencyLoadStatus', 3);
                commit('setAddProficiencyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        updateProficiency({commit, state, dispatch}, data) {
            commit('setUpdateProficiencyLoadStatus', 1);

            ProficiencyAPI.update(
                data.id,
                data.proficiency_type_id,
				data.title,
				data.value
            ).then(function(response) {
                commit('setUpdateProficiencyLoadStatus', 2);
                commit('setUpdateProficiencyResult', response.data);
            }).catch(function() {
                commit('setUpdateProficiencyLoadStatus', 3);
                commit('setUpdateProficiencyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        deleteProficiency({commit, state, dispatch}, data) {
            commit('setDeleteProficiencyLoadStatus', 1);

            ProficiencyAPI.delete(
                data.id
            ).then(function(response) {
                commit('setDeleteProficiencyLoadStatus', 2);
                commit('setDeleteProficiencyResult', response.data);
            }).catch(function() {
                commit('setDeleteProficiencyLoadStatus', 3);
                commit('setDeleteProficiencyResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
        setProficienciesLoadStatus(state, status) {
            state.proficienciesLoadStatus = status;
        },

        setProficiencies(state, electionTypes) {
            state.proficiencies = electionTypes;
		},
		
		setProfPagination(state, data) {
            let meta = data.meta;
            let links = data.links;

            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                to: meta.to,
                total: meta.total,
                next_page_url: links.next,
                prev_page_url: links.prev
            };

            state.profPagination = pagination;
        },

        setProficiency(state, proficiency) {
            state.proficiency = proficiency;
        },

        setProficiencyLoadStatus(state, status) {
            state.proficiencyLoadStatus = status;
        },

        setAddProficiencyLoadStatus(state, status) {
            state.addProficiencyLoadStatus = status;
        },

        setAddProficiencyResult(state, result) {
            state.addProficiencyResult = result;
        },

        setUpdateProficiencyLoadStatus(state, status) {
            state.updateProficiencyLoadStatus = status;
        },

        setUpdateProficiencyResult(state, result) {
            state.updateProficiencyResult = result;
        },

        setDeleteProficiencyLoadStatus(state, status) {
            state.deleteProficiencyLoadStatus = status;
        },

        setDeleteProficiencyResult(state, result) {
            state.deleteProficiencyResult = result;
        }
    },
    getters: {
        getProficienciesLoadStatus(state) {
            return state.proficienciesLoadStatus;
        },

        getProficiencies(state) {
            return state.proficiencies;
		},
		
		getProfPagination(state) {
            return state.profPagination;
        },

        getProficiency(state) {
            return state.proficiency;
        },

        getProficiencyLoadStatus(state) {
            return state.proficiencyLoadStatus;
        },

        getAddProficiencyLoadStatus(state) {
            return state.addProficiencyLoadStatus;
        },

        getAddProficiencyResult(state) {
            return state.addProficiencyResult;
        },

        getUpdateProficiencyLoadStatus(state) {
            return state.updateProficiencyLoadStatus;
        },

        getUpdateProficiencyResult(state) {
            return state.updateProficiencyResult;
        },

        getDeleteProficiencyLoadStatus(state) {
            return state.deleteProficiencyLoadStatus;
        },

        getDeleteProficiencyResult(state) {
            return state.deleteProficiencyResult;
        }
    }
};