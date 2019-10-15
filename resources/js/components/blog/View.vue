<style scoped></style>
<template>
	<div class="section section-gray">
        <div class="container">
			<div class="content">
				<div class="row">
					<div class="col-md-8 ml-auto mr-auto">
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