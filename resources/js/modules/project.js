/*
|-------------------------------------------------------------------------------
| VUEX modules/project.js 
|-------------------------------------------------------------------------------
| The Vuex data store for the project
*/

import ProjectAPI from '../api/project.js';

export const project = { 
    state: {
        projects: [],
        projectsLoadStatus: 0,
        project: {},
        projectLoadStatus: 0,
        addProjectLoadStatus: 0,
        addProjectResult: {},
        updateProjectLoadStatus: 0,
        updateProjectResult: {},
        deleteProjectLoadStatus: 0,
        deleteProjectResult: {}
    },
    actions: {
        getProjects({commit}) {
            commit('setProjectsLoadStatus', 1);

            ProjectAPI.getProjects()
                .then(function(response) {
                    commit('setProjectsLoadStatus', 2);
                    commit('setProjects', response.data.data);
                })
                .catch(function() {
                    commit('setProjectsLoadStatus', 3);
                    commit('setProjects', []);
                });
        },

        getProject({commit}, data) {
            commit('setProjectLoadStatus', 1);

            ProjectAPI.getProject(
                data.id
            ).then(function(response) {
                commit('setProjectLoadStatus', 2);
                commit('setProject', response.data.data);
            }).catch(function() {
                commit('setProjectLoadStatus', 3);
                commit('setProject', {});
            });
        },

        addProject({commit, state, dispatch}, data) {
            commit('setAddProjectLoadStatus', 1);

            ProjectAPI.addProject(
				data.title,
				data.description,
				data.source_code,
				data.live_url
            ).then(function(response) {
                commit('setAddProjectLoadStatus', 2);
                commit('setAddProjectResult', response.data);
            }).catch(function() {
                commit('setAddProjectLoadStatus', 3);
                commit('setAddProjectResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        updateProject({commit, state, dispatch}, data) {
            commit('setUpdateProjectLoadStatus', 1);

            ProjectAPI.updateProject(
                data.id,
                data.title,
				data.description,
				data.source_code,
				data.live_url
            ).then(function(response) {
                commit('setUpdateProjectLoadStatus', 2);
                commit('setUpdateProjectResult', response.data);
            }).catch(function() {
                commit('setUpdateProjectLoadStatus', 3);
                commit('setUpdateProjectResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },

        deleteProject({commit, state, dispatch}, data) {
            commit('setDeleteProjectLoadStatus', 1);

            ProjectAPI.deleteProject(
                data.id
            ).then(function(response) {
                commit('setDeleteProjectLoadStatus', 2);
                commit('setDeleteProjectResult', response.data);
            }).catch(function() {
                commit('setDeleteProjectLoadStatus', 3);
                commit('setDeleteProjectResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
        setProjectsLoadStatus(state, status) {
            state.projectsLoadStatus = status;
        },

        setProjects(state, electionTypes) {
            state.projects = electionTypes;
        },

        setProject(state, project) {
            state.project = project;
        },

        setProjectLoadStatus(state, status) {
            state.projectLoadStatus = status;
        },

        setAddProjectLoadStatus(state, status) {
            state.addProjectLoadStatus = status;
        },

        setAddProjectResult(state, result) {
            state.addProjectResult = result;
        },

        setUpdateProjectLoadStatus(state, status) {
            state.updateProjectLoadStatus = status;
        },

        setUpdateProjectResult(state, result) {
            state.updateProjectResult = result;
        },

        setDeleteProjectLoadStatus(state, status) {
            state.deleteProjectLoadStatus = status;
        },

        setDeleteProjectResult(state, result) {
            state.deleteProjectResult = result;
        }
    },
    getters: {
        getProjectsLoadStatus(state) {
            return state.projectsLoadStatus;
        },

        getProjects(state) {
            return state.projects;
        },

        getProject(state) {
            return state.project;
        },

        getProjectLoadStatus(state) {
            return state.projectLoadStatus;
        },

        getAddProjectLoadStatus(state) {
            return state.addProjectLoadStatus;
        },

        getAddProjectResult(state) {
            return state.addProjectResult;
        },

        getUpdateProjectLoadStatus(state) {
            return state.updateProjectLoadStatus;
        },

        getUpdateProjectResult(state) {
            return state.updateProjectResult;
        },

        getDeleteProjectLoadStatus(state) {
            return state.deleteProjectLoadStatus;
        },

        getDeleteProjectResult(state) {
            return state.deleteProjectResult;
        }
    }
};