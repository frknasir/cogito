<style scoped></style>
<template>
    <div class="content">
        <div class="container">
            
            <div class="card">
                <div class="card-header card-header-icon card-header-success">
                    <div class="card-icon">
                        <i class="fa fa-laptop"></i>
                    </div>
                    <div id="toolbar" class="mb-3">
                        <ul class="list-inline">
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-left">
                                showing {{ projPagination.to }} of {{ projPagination.total }} projects
                            </li>
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-right">
                                <router-link v-if="userLoadStatus == 2 && user != {}"
									class="btn btn-success" 
									:to="'/admin/projects/add'">
									<i class="fa fa-laptop"></i>
									New Project
								</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <table role="table table-dark" id="projects-table" 
                        class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr v-for="project in projects" v-bind:key="project.id">
                                <th scope="row">
                                    {{ "#" }}
                                </th>
                                <td>{{ project.title }}</td>
                                <td>
                                    {{ project.description }}
                                </td>
								<td class="td-actions">
                                    <router-link 
                                        :to="'/admin/projects/edit/'+project.id" 
                                        rel="tooltip" class="btn btn-success">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button @click="deleteProject(project.id)" type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                                <!--<td class="td-actions">
                                    <a target="_blank" v-if="project.source_code" :href="project.source_code" 
										type="button" rel="tooltip" class="btn btn-github">
                                        <i class="fa fa-github"></i>
										Source
                                    </a>
									<a target="_blank" v-if="project.live_url" :href="project.live_url" 
										type="button" rel="tooltip" class="btn btn-default">
                                        <i class="fa fa-preview"></i>
										Preview
                                    </a>
                                </td>-->
                            </tr>
                        </tbody>
                    </table>
                    <div id="projPagination-btn">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-end text-black">
                                <li class="page-item" v-bind:class="[{disabled: !projPagination.prev_page_url}]">
                                    <a @click="getProjects(projPagination.prev_page_url)" class="page-link" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item" v-bind:class="[{disabled: !projPagination.next_page_url}]">
                                    <a @click="getProjects(projPagination.next_page_url)" class="page-link">Next</a>
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
	import { Message } from 'element-ui';

    export default {
        name: "BrowseProjects",
        components: {
        },
        data() {
            return {}
        },
        computed: {
            projects() {
                return this.$store.getters.getProjects;
            },
            projectsLoadStatus() {
                return this.$store.getters.getProjectsLoadStatus;
            },
            projPagination() {
                return this.$store.getters.getProjPagination;
            },
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            deleteProjectLoadStatus() {
                return this.$store.getters.getDeleteProjectLoadStatus;
            },
            deleteProjectResult() {
                return this.$store.getters.getDeleteProjectResult;
            }
        },
        created() {
            this.$store.dispatch('loadProjects', {
                url: null
            });
        },
        mounted() {
        },
        watch: {
            deleteProjectLoadStatus: function() {
                let vm = this;
                
                if(vm.deleteProjectLoadStatus == 3 && vm.deleteProjectResult.success == 0) {
                    Message({
                        type: 'warning',
                        message: vm.deleteProjectResult.message
                    });
                } else if(vm.deleteProjectLoadStatus == 2 && vm.deleteProjectResult.success == 1) {
                    //reload Projects
                    this.$store.dispatch('loadProjects', {
                        url: null
                    });
                    Message({
                        type: 'success',
                        message: vm.deleteProjectResult.message
                    });
                } 
            },
            projectLoadStatus: function(val) {
                if(val == 2) {
                    
                }
            }
        },
        methods: {
            deleteProject(id) {
                if(confirm('Are you sure?')) {
                    this.$store.dispatch('deleteProject', {
                        id: id
                    });
                }
            },
            getProjects(url) {
                this.$store.dispatch('loadProjects', {
                    url: url
                });
            }
        }
    }
</script>