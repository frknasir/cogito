<style scoped>

</style>
<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header card-header-text card-header-success">
                            <div class="card-text">
                                Update Project
                            </div>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="">
                                        title
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="project.title" />
                                    <small v-show="!validations.title.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.title.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        description
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
									<textarea class="form-control" v-model="project.description" cols="30" rows="10"></textarea>
                                    <small v-show="!validations.description.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.description.text }}
                                    </small>
                                </div>
								<div class="form-group">
                                    <label for="">
                                        Source Code(link)
                                    </label>
                                    <input type="text" class="form-control" v-model="project.source_code" />
                                    <small v-show="!validations.source_code.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.source_code.text }}
                                    </small>
                                </div>
								<div class="form-group">
                                    <label for="">
                                       Preview Link
                                    </label>
                                    <input type="text" class="form-control" v-model="project.live_url" />
                                    <small v-show="!validations.live_url.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.live_url.text }}
                                    </small>
                                </div>
                                <button type="button" v-if="updateProjectLoadStatus != 1" @click="updateProject(project)" project="button" 
                                    class="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import { Message } from 'element-ui';

    export default {
        components: {
        },
        data() {
            return {
                validations: {
                    source_code: {
                        is_valid: true,
                        text: ''
					},
					live_url: {
                        is_valid: true,
                        text: ''
                    },
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    description: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        },
        computed: {
            updateProjectLoadStatus() {
                return this.$store.getters.getUpdateProjectLoadStatus;
            },
            updateProjectResult() {
                return this.$store.getters.getUpdateProjectResult;
			},
			project () {
				return this.$store.getters.getProject;
			},
			projectLoadStatus () {
				return this.$store.getters.getProjectLoadStatus;
			}
        },
        watch: {
            updateProjectLoadStatus: function() {
                let vm = this;
                if(vm.updateProjectLoadStatus == 3 && vm.updateProjectResult.success == 0) {
					Message({
                        title: 'Danger',
                        message: 'try again!',
                        type: 'danger'
                    });
                } else if(vm.updateProjectLoadStatus == 2 && vm.updateProjectResult.success == 1) {
					vm.clearProjectForm();
					Message({
                        title: 'Success',
                        message: 'project added successfully',
                        type: 'success'
                    });
                    this.$router.push('/admin/projects');
                } 
            }
        },
        mounted() {

        },
        created() {
			this.$store.dispatch('loadProject', {
				id: this.$route.params.projectId
			});
		},
        methods: {
            updateProject(data) {
                if(this.validateProject(data)) {
                    this.$store.dispatch('updateProject', data);
                }
            },
            validateProject(project) {
                let valid = true;
                let validations = this.validations;

                if(!project.title) {
                    valid = false;
                    validations.title.is_valid = false;
                    validations.title.text = "title can not be empty";
                }

                if(!project.description) {
                    valid = false;
                    validations.description.is_valid = false;
                    validations.description.text = "description can not be empty";
				}

                return valid;
            },
            clearProjectForm() {
                this.project.title = '';
				this.project.description = '';
				this.project.source_code = '';
				this.project.live_url = '';

                this.validations = {
                    source_code: {
                        is_valid: true,
                        text: ''
					},
					live_url: {
                        is_valid: true,
                        text: ''
                    },
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    description: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        }
    }
</script>
