<style scoped></style>
<template>
	<div class="section section-gray">
        <div class="container">
			<div class="content">
				<div class="container">
					<div class="row">
						<div class="col-md-8 ml-auto mr-auto">
							<h1 class="title text-left">
								Open Source Projects
							</h1>
							<span id="projPagination-btn">
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
							</span>
							<div class="border-top py-3" v-for="(project, index) in projects" :key="index">
								<div class="row">
									<div class="col">
										<p class="mb-1">
											<a class="font-weight-bold lead">{{ project.title }}</a>
										</p>
										<p class="text-muted mb-0">
											<span>
												{{ moment(project.created_at).format('LLL') }}
											</span>
										</p>
									</div>
									<div class="col-6">
										<p class="mb-1 text-muted">
											{{ project.description }}
										</p>
									</div>
									<div class="col">
										<a target="_blank" v-if="project.source_code" :href="project.source_code" 
											class="btn btn-github btn-block">
											<i class="fa fa-github"></i>
											source
										</a>
										<a target="_blank" v-if="project.live_url" :href="project.live_url" 
											class="btn btn-primary btn-neutral btn-block">
											<i class="fa fa-eye"></i>
											view
										</a>
									</div>
								</div>
                            </div>

							<div id="projPagination-btn">
								<nav aria-label="Page navigation">
									<ul class="pagination justify-content-center text-black">
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
        </div>
	</div>
</template> 
<script>
	import { Message } from 'element-ui';
	import moment from 'moment'
	import 'moment-timezone'

    export default {
        name: "BrowseProjects",
        components: {
        },
        data() {
            return {
				moment: moment
			}
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