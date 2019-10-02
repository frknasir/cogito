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
                                New Proficiency
                            </div>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="">
                                        proficiency type
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
									<div class="form-group">
										<select class="form-control" v-model="proficiency.proficiency_type_id">
											<option v-for="(proficiencyType, index) in proficiencyTypes" :key="index"
												:value="proficiencyType.id">
												{{ proficiencyType.name }}
											</option>
										</select>
									</div>
                                    <small v-show="!validations.proficiency_type_id.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.proficiency_type_id.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        title
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="proficiency.title" />
                                    <small v-show="!validations.title.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.title.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        value
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="number" class="form-control" v-model="proficiency.value" />
                                    <small v-show="!validations.value.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.value.text }}
                                    </small>
                                </div>
                                <button type="button" v-if="addProficiencyLoadStatus != 1" @click="addProficiency(proficiency)" proficiency="button" 
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
                proficiency: {
                    proficiency_type_id: '',
                    title: '',
                    value: 0
                },
                validations: {
                    proficiency_type_id: {
                        is_valid: true,
                        text: ''
                    },
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    value: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        },
        computed: {
            addProficiencyLoadStatus() {
                return this.$store.getters.getAddProficiencyLoadStatus;
            },
            addProficiencyResult() {
                return this.$store.getters.getAddProficiencyResult;
			},
			proficiencyTypes () {
				return this.$store.getters.getProficiencyTypes;
			},
			proficiencyTypesLoadStatus () {
				return this.$store.getters.getProficiencyTypesLoadStatus;
			}
        },
        watch: {
            addProficiencyLoadStatus: function() {
                let vm = this;
                if(vm.addProficiencyLoadStatus == 3 && vm.addProficiencyResult.success == 0) {
					Message({
                        title: 'Danger',
                        message: 'try again!',
                        type: 'danger'
                    });
                } else if(vm.addProficiencyLoadStatus == 2 && vm.addProficiencyResult.success == 1) {
					vm.clearProficiencyForm();
					Message({
                        title: 'Success',
                        message: 'proficiency added successfully',
                        type: 'success'
                    });
                    this.$router.push('/admin/proficiencies');
                } 
            }
        },
        mounted() {

        },
        created() {
            this.$store.dispatch('loadProficiencyTypes');
        },
        methods: {
            addProficiency(data) {
                if(this.validateProficiency(data)) {
                    this.$store.dispatch('addProficiency', data);
                }
            },
            validateProficiency(proficiency) {
                let valid = true;
                let validations = this.validations;

                if(!proficiency.proficiency_type_id) {
                    valid = false;
                    validations.proficiency_type_id.is_valid = false;
                    validations.proficiency_type_id.text = "proficiency_type_id can not be empty";
                }

                if(!proficiency.title) {
                    valid = false;
                    validations.title.is_valid = false;
                    validations.title.text = "title can not be empty";
                }

                if(!proficiency.value) {
                    valid = false;
                    validations.value.is_valid = false;
                    validations.value.text = "value can not be empty";
                }

                return valid;
            },
            clearProficiencyForm() {
                this.proficiency.proficiency_type_id = '';
                this.proficiency.title = '';
                this.proficiency.value = '';

                this.validations = {
                    proficiency_type_id: {
                        is_valid: true,
                        text: ''
                    },
                    title: {
                        is_valid: true,
                        text: ''
                    },
                    value: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        }
    }
</script>
