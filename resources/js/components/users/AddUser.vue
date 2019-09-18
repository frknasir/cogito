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
                                New User
                            </div>
                        </div>
                        <div class="card-body">
                            <form v-show="show_form">
                                <div class="form-group">
                                    <label for="">
                                        name
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="user.name" />
                                    <small v-show="!validations.name.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.name.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        email
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="email" class="form-control" v-model="user.email" />
                                    <small v-show="!validations.email.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.email.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        password
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="user.password" />
                                    <small v-show="!validations.password.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.password.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        password
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="cpassword" />
                                    <small v-show="!validations.cpassword.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.cpassword.text }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        role
                                        <sup>
                                            <i class="fa fa-asterisk small" style="color:red"></i>
                                        </sup>
                                    </label>
                                    <select class="form-control" v-model="user.role_id">
                                        <option value="1">
                                            Admin
                                        </option>
                                    </select>
                                    <small v-show="!validations.role_id.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.role_id.text }}
                                    </small>
                                </div>
                                <button v-if="addUserLoadStatus != 1" @click="addUser(user)" user="button" 
                                    class="btn btn-success">
                                    Submit
                                </button>
                            </form>
                            <div v-show="!show_form" class="alert alert-success" role="alert">
                                {{ addUserResult.message }}
                                <a @click="addAnother()" class="alert-link">
                                    &nbsp;Add Another User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { HELPERS } from '../../helpers.js';

    export default {
        components: {
        },
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    role_id: 1
                },
                cpassword: '',
                HF: HELPERS,
                show_form: true,
                validations: {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    email: {
                        is_valid: true,
                        text: ''
                    },
                    password: {
                        is_valid: true,
                        text: ''
                    },
                    cpassword: {
                        is_valid: true,
                        text: ''
                    },
                    role_id: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        },
        computed: {
            authUser() {
                return this.$store.getters.getUser;
            },
            authUserLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            addUserLoadStatus() {
                return this.$store.getters.getAddUserLoadStatus;
            },
            addUserResult() {
                return this.$store.getters.getAddUserResult;
            }
        },
        watch: {
            addUserLoadStatus: function() {
                let vm = this;
                if(vm.addUserLoadStatus == 3 && vm.addUserResult.success == 0) {
                    vm.show_form = true;
                    vm.HF.showNotification(
                        'top', 
                        'center', 
                        vm.addUserResult.message, 
                        'danger'
                    );
                } else if(vm.addUserLoadStatus == 2 && vm.addUserResult.success == 1) {
                    vm.show_form = false;
                    vm.clearUserForm();
                } 
            }
        },
        mounted() {

        },
        created() {
            
        },
        methods: {
            addUser(data) {
                if(this.validateUser(data)) {
                    this.$store.dispatch('addUser', data);
                }
            },
            addAnother() {
                this.$store.commit('setAddUserResult', {});
                this.$store.commit('setAddUserLoadStatus', 0);
                this.show_form = true;
            },
            validateUser(user) {
                let validUser = true;
                let validations = this.validations;

                if(!user.name) {
                    validUser = false;
                    validations.name.is_valid = false;
                    validations.name.text = "name can not be empty";
                }

                if(!user.email) {
                    validUser = false;
                    validations.email.is_valid = false;
                    validations.email.text = "email can not be empty";
                }

                if(!user.password) {
                    validUser = false;
                    validations.password.is_valid = false;
                    validations.password.text = "password can not be empty";
                }

                if(user.password !== this.cpassword) {
                    validUser = false;
                    validations.cpassword.is_valid = false;
                    validations.cpassword.text = "passwords do not match";
                }

                if(!user.role_id) {
                    validUser = false;
                    validations.role_id.is_valid = false;
                    validations.role_id.text = "role can not be empty";
                }

                return validUser;
            },
            clearUserForm() {
                this.user.name = '';
                this.user.email = '';
                this.user.password = '';
                this.cpassword = '';
                this.user.role_id = '';

                this.validations = {
                    name: {
                        is_valid: true,
                        text: ''
                    },
                    email: {
                        is_valid: true,
                        text: ''
                    },
                    cpassword: {
                        is_valid: true,
                        text: ''
                    },
                    password: {
                        is_valid: true,
                        text: ''
                    },
                    role_id: {
                        is_valid: true,
                        text: ''
                    }
                }
            }
        }
    }
</script>
