/*
|-------------------------------------------------------------------------------
| VUEX modules/user.js
|-------------------------------------------------------------------------------
| The Vuex data store for the user
*/

import UserAPI from '../api/user.js';

export const user = {
    state: {
        users: {},
        usersLoadStatus: 0,
        userPagination: {},
        user: {},
        userLoadStatus: 0,
        aUser: {},
        aUserLoadStatus: 0,
        addUserLoadStatus: 0,
        addUserResult: {},
        updateUserLoadStatus: 0,
        updateUserResult: {},
        changeUserPasswordLoadStatus: 0,
        changeUserPasswordResult: {},
        deleteUserLoadStatus: 0,
        deleteUserResult: {}
    },
    actions: {
        getUsers({ commit }, data) {
            commit('setUsersLoadStatus', 1);

            UserAPI.getUsers(
                data.url
            ).then(function (response) {
                commit('setUsersLoadStatus', 2);
                commit('setUsers', response.data.data);
                commit('setUserPagination', {
                    meta: response.data.meta,
                    links: response.data.links
                });
            }).catch(function () {
                commit('setUsersLoadStatus', 3);
                commit('setUsers', {});
            });
        },
        getAuthUser({ commit }) {
            commit('setUserLoadStatus', 1);

            UserAPI.getAuthUser()
                .then(function (response) {
                    commit('setUserLoadStatus', 2);
                    commit('setUser', response.data.data);
                })
                .catch(function () {
                    commit('setUserLoadStatus', 3);
                    commit('setUser', {});
                });
        },
        getAUser({ commit }, data) {
            commit('setAUserLoadStatus', 1);

            UserAPI.getAUser(
                data.id
            ).then(function (response) {
                commit('setAUserLoadStatus', 2);
                commit('setAUser', response.data.data);
            }).catch(function () {
                commit('setAUserLoadStatus', 3);
                commit('setAUser', {});
            });
        },
        addUser({ commit }, data) {
            commit('setAddUserLoadStatus', 1);

            UserAPI.addUser(
                data.name,
                data.email,
                data.password,
                data.role_id
            ).then(function (response) {
                commit('setAddUserLoadStatus', 2);
                commit('setAddUserResult', response.data);
            }).catch(function () {
                commit('setAddUserLoadStatus', 3);
                commit('setAddUserResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        updateUser({ commit }, data) {
            commit('setUpdateUserLoadStatus', 1);

            UserAPI.updateUser(
                data.id,
                data.name,
                data.email,
                data.role_id
            ).then(function (response) {
                commit('setUpdateUserLoadStatus', 2);
                commit('setUpdateUserResult', response.data);
            }).catch(function () {
                commit('setUpdateUserLoadStatus', 3);
                commit('setUpdateUserResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        changeUserPassword({ commit }, data) {
            commit('setChangeUserPasswordLoadStatus', 1);

            UserAPI.changeUserPassword(
                data.id,
                data.password
            ).then(function (response) {
                commit('setChangeUserPasswordLoadStatus', 2);
                commit('setChangeUserPasswordResult', response.data);
            }).catch(function () {
                commit('setChangeUserPasswordLoadStatus', 3);
                commit('setChangeUserPasswordResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        },
        deleteUser({ commit }, data) {
            commit('setDeleteUserLoadStatus', 1);

            UserAPI.deleteUser(
                data.id
            ).then(function (response) {
                commit('setDeleteUserLoadStatus', 2);
                commit('setDeleteUserResult', response.data);
            }).catch(function () {
                commit('setDeleteUserLoadStatus', 3);
                commit('setDeleteUserResult', {
                    success: 0,
                    message: 'Something went wrong. Try again!'
                });
            });
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setUsersLoadStatus(state, status) {
            state.usersLoadStatus = status;
        },

        setUserPagination(state, data) {
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

            state.userPagination = pagination;
        },

        setUser(state, user) {
            state.user = user;
        },
        setUserLoadStatus(state, status) {
            state.userLoadStatus = status;
        },
        setAUser(state, user) {
            state.aUser = user;
        },
        setAUserLoadStatus(state, status) {
            state.aUserLoadStatus = status
        },
        setAddUserLoadStatus(state, status) {
            state.addUserLoadStatus = status;
        },
        setAddUserResult(state, result) {
            state.addUserResult = result;
        },
        setUpdateUserLoadStatus(state, status) {
            state.updateUserLoadStatus = status;
        },
        setUpdateUserResult(state, result) {
            state.updateUserResult = result;
        },
        setChangeUserPasswordLoadStatus(state, status) {
            state.changeUserPasswordLoadStatus = status;
        },
        setChangeUserPasswordResult(state, result) {
            state.changeUserPasswordResult = result;
        },
        setDeleteUserLoadStatus(state, status) {
            state.deleteUserLoadStatus = status;
        },
        setDeleteUserResult(state, result) {
            state.setDeleteUserResult = result;
        }
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getUsersLoadStatus(state) {
            return state.usersLoadStatus;
        },
        getUserPagination(state) {
            return state.userPagination;
        },
        getUser(state) {
            return state.user;
        },
        getUserLoadStatus(state) {
            return state.userLoadStatus;
        },
        getAUser(state) {
            return state.aUser;
        },
        getAUserLoadStatus(state) {
            return state.aUserLoadStatus;
        },
        getAddUserLoadStatus(state) {
            return state.addUserLoadStatus;
        },
        getAddUserResult(state) {
            return state.addUserResult;
        },
        getUpdateUserLoadStatus(state) {
            return state.updateUserLoadStatus;
        },
        getUpdateUserResult(state) {
            return state.updateUserResult;
        },
        getChangeUserPasswordLoadStatus(state) {
            return state.changeUserPasswordLoadStatus;
        },
        getChangeUserPasswordResult(state) {
            return state.changeUserPasswordResult;
        },
        getDeleteUserLoadStatus(state) {
            return state.deleteUserLoadStatus;
        },
        getDeleteUserResult(state) {
            return state.setDeleteUserResult;
        }
    }
};