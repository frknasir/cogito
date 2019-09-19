<style scoped>
    #action-btn {
        position: relative;
        right: 20px;
        z-index: 4;
    }
    #action-btn .btn {
        position: fixed;
        right: 30px;
        bottom: 10%;
    }
</style>
<template>
    <div class="content">
        <div class="container">
            
            <div class="card">
                <div class="card-header card-header-icon card-header-success">
                    <div class="card-icon">
                        <i class="fa fa-users"></i>
                    </div>
                    <div id="toolbar" class="mb-3">
                        <ul class="list-inline">
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-left">
                                showing {{ userPagination.to }} of {{ userPagination.total }} users
                            </li>
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-right">
                                <router-link v-if="userLoadStatus == 2 && user != {}"
									class="btn btn-success" 
									:to="'/admin/users/add'">
									<i class="fa fa-user-plus"></i>
									New User
								</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <table role="table table-dark" id="users-table" 
                        class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Roles</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr v-for="user in users" v-bind:key="user.id">
                                <th scope="row">
                                    {{ "#" }}
                                </th>
                                <td>
                                    {{ user.name }}
                                </td>
                                <td>{{ user.email }}</td>
                                <td>
                                    {{ user.roles[0] }}
                                </td>
                                <td class="td-actions">
                                    <router-link 
                                        :to="'/admin/users/edit/'+user.id" 
                                        rel="tooltip" class="btn btn-success">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button @click="deleteUser(user.id)" type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="userPagination-btn">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-end text-black">
                                <li class="page-item" v-bind:class="[{disabled: !userPagination.prev_page_url}]">
                                    <a @click="getUsers(userPagination.prev_page_url)" class="page-link" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item" v-bind:class="[{disabled: !userPagination.next_page_url}]">
                                    <a @click="getUsers(userPagination.next_page_url)" class="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
    export default {
        name: "BrowseUsers",
        components: {
        },
        data() {
            return {
                permittedToMakeChanges: false
            }
        },
        computed: {
            users() {
                return this.$store.getters.getUsers;
            },
            usersLoadStatus() {
                return this.$store.getters.getUsersLoadStatus;
            },
            userPagination() {
                return this.$store.getters.getUserPagination;
            },
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            deleteUserLoadStatus() {
                return this.$store.getters.getDeleteUserLoadStatus;
            },
            deleteUserResult() {
                return this.$store.getters.getDeleteUserResult;
            }
        },
        created() {
            this.$store.dispatch('getUsers', {
                url: null
            });
        },
        mounted() {
        },
        watch: {
            deleteUserLoadStatus: function() {
                let vm = this;
                
                if(vm.deleteUserLoadStatus == 3 && vm.deleteUserResult.success == 0) {
                    this.$message({
                        type: 'warning',
                        message: vm.deleteUserResult.message
                    });
                } else if(vm.deleteUserLoadStatus == 2 && vm.deleteUserResult.success == 1) {
                    //reload Users
                    this.$store.dispatch('getUsers', {
                        url: null
                    });
                    this.$message({
                        type: 'success',
                        message: vm.deleteUserResult.message
                    });
                } 
            },
            userLoadStatus: function(val) {
                if(val == 2) {
                    
                }
            }
        },
        methods: {
            deleteUser(id) {
                if(confirm('Are you sure?')) {
                    this.$store.dispatch('deleteUser', {
                        id: id
                    });
                }
            },
            getUsers(url) {
                this.$store.dispatch('getUsers', {
                    url: url
                });
            }
        }
    }
</script>