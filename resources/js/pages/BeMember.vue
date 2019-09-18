<style scoped>
    
</style>
<template>
    <div class="section">
        <div class="container">

            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <h1 class="title text-center">
                        Membership Form
                    </h1>
                    <hr>
                    <form action="">
                        <div class="form-group">
                            <label for="">
                                Last Name
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <input type="text" class="form-control" v-model="member.last_name" />
                            <small v-show="!validations.last_name.is_valid" class="form-text text-muted text-danger">
                                {{ validations.last_name.text }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="">
                                First Name
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <input type="text" class="form-control" v-model="member.first_name" />
                            <small v-show="!validations.first_name.is_valid" class="form-text text-muted text-danger">
                                {{ validations.first_name.text }}
                            </small>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        Date Of Birth
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <el-date-picker
                                        v-model="member.birth_date"
                                        type="date"
                                        placeholder="Pick a day">
                                    </el-date-picker>
                                    <small v-show="!validations.birth_date.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.birth_date.text }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        City of Birth
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="member.birth_city" />
                                    <small v-show="!validations.birth_city.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.birth_city.text }}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">
                                Nationality
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <input type="text" class="form-control" v-model="member.nationality" />
                            <small v-show="!validations.nationality.is_valid" class="form-text text-muted text-danger">
                                {{ validations.nationality.text }}
                            </small>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        Phone Number
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="member.phone_number" />
                                    <small v-show="!validations.phone_number.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.phone_number.text }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        Email
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="member.email" />
                                    <small v-show="!validations.email.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.email.text }}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">
                                Publications
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <div id="publications"></div>
                            <small v-show="!validations.publications.is_valid" class="form-text text-muted text-danger">
                                {{ validations.publications.text }}
                            </small>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        Years of Experience
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="member.experience_years" />
                                    <small v-show="!validations.experience_years.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.experience_years.text }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">
                                        Subject of Experience
                                        <sup>
                                            (required)
                                        </sup>
                                    </label>
                                    <input type="text" class="form-control" v-model="member.experience_subject" />
                                    <small v-show="!validations.experience_subject.is_valid" class="form-text text-muted text-danger">
                                        {{ validations.experience_subject.text }}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">
                                City of Residence
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <input type="text" class="form-control" v-model="member.residence_city" />
                            <small v-show="!validations.residence_city.is_valid" class="form-text text-muted text-danger">
                                {{ validations.residence_city.text }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="">
                                references
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <div id="references"></div>
                            <small v-show="!validations.references.is_valid" class="form-text text-muted text-danger">
                                {{ validations.references.text }}
                            </small>
                        </div>
                        <button v-loading="sendApplyForMembershipMailLoadStatus == 1" @click="sendMail(member)" type="button" 
                            class="btn btn-success">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { HELPERS } from '../helpers.js';

    export default {
        data() {
            return {
                HF: HELPERS,
                member: {
                    last_name: '',
                    first_name: '',
                    birth_date: '',
                    birth_city: '',
                    nationality: '',
                    email: '',
                    phone_number: '',
                    publications: '',
                    experience_years: '',
                    experience_subject: '',
                    residence_city: '',
                    references: ''
                },
                publicationsEditor: null,
                referencesEditor: null,
                validations: {
                    last_name: {
                        is_valid: true,
                        text: ''
                    },
                    first_name: {
                        is_valid: true,
                        text: ''
                    },
                    birth_date: {
                        is_valid: true,
                        text: ''
                    },
                    birth_city: {
                        is_valid: true,
                        text: ''
                    },
                    nationality: {
                        is_valid: true,
                        text: ''
                    },
                    email: {
                        is_valid: true,
                        text: ''
                    },
                    phone_number: {
                        is_valid: true,
                        text: ''
                    },
                    publications: {
                        is_valid: true,
                        text: ''
                    },
                    experience_years: {
                        is_valid: true,
                        text: ''
                    },
                    experience_subject: {
                        is_valid: true,
                        text: ''
                    },
                    residence_city: {
                        is_valid: true,
                        text: ''
                    },
                    references: {
                        is_valid: true,
                        text: ''
                    }
                }
            };
        },
        components: {
            
        },
        created() {
            this.$store.dispatch('getAuthUser');
        },
        mounted() {
            this.referencesEditor = HELPERS.initQuillEditor('references');
            this.publicationsEditor = HELPERS.initQuillEditor('publications');
        },
        computed: {
            sendApplyForMembershipMailLoadStatus() {
                return this.$store.getters.getSendApplyForMembershipMailLoadStatus;
            },
            sendApplyForMembershipMailResponse() {
                return this.$store.getters.getSendApplyForMembershipMailResponse;
            }
        },
        watch: {
            sendApplyForMembershipMailLoadStatus: function(val) {
                if(val == 2) {
                    //reset fields
                    this.member.last_name = '';
                    this.member.first_name = '';
                    this.member.birth_date = '';
                    this.member.birth_city = '';
                    this.member.nationality = '';
                    this.member.email = '';
                    this.member.phone_number = '';
                    this.member.publications = '';
                    this.member.experience_years = '';
                    this.member.experience_subject = '';
                    this.member.residence_city = '';
                    this.member.references = ''
                    this.publicationsEditor.root.innerHTML = '';
                    this.referencesEditor.root.innerHTML = '';
                    
                    this.$message({
                        type: 'success',
                        message: 'Thank you. Your Application has been received!'
                    });
                }
            }
        },
        methods: {
            validateFields(data) {
                let valid = true;
                let validations = this.validations;
                if(!data.last_name) {
                    valid = false;
                    validations.last_name.is_valid = false;
                    validations.last_name.text = "last name cant be empty";
                }
                if(!data.first_name) {
                    valid = false;
                    validations.first_name.is_valid = false;
                    validations.first_name.text = "first name cant be empty";
                }
                if(!data.references) {
                    valid = false;
                    validations.references.is_valid = false;
                    validations.references.text = "references cant be empty";
                }
                if(!data.birth_date) {
                    valid = false;
                    validations.birth_date.is_valid = false;
                    validations.birth_date.text = "birth date cant be empty";
                }
                if(!data.birth_city) {
                    valid = false;
                    validations.birth_city.is_valid = false;
                    validations.birth_city.text = "birth city cant be empty";
                }
                if(!data.nationality) {
                    valid = false;
                    validations.nationality.is_valid = false;
                    validations.nationality.text = "nationality cant be empty";
                }
                if(!data.email) {
                    valid = false;
                    validations.email.is_valid = false;
                    validations.email.text = "email cant be empty";
                }
                if(!data.phone_number) {
                    valid = false;
                    validations.phone_number.is_valid = false;
                    validations.phone_number.text = "phone number cant be empty";
                }
                if(!data.publications) {
                    valid = false;
                    validations.publications.is_valid = false;
                    validations.publications.text = "publications cant be empty";
                }
                if(!data.experience_years) {
                    valid = false;
                    validations.experience_years.is_valid = false;
                    validations.experience_years.text = "years of experience cant be empty";
                }
                if(!data.experience_subject) {
                    valid = false;
                    validations.experience_subject.is_valid = false;
                    validations.experience_subject.text = "subject of experience cant be empty";
                }
                if(!data.residence_city) {
                    valid = false;
                    validations.residence_city.is_valid = false;
                    validations.residence_city.text = "city of residence cant be empty";
                }
                if(!data.references) {
                    valid = false;
                    validations.references.is_valid = false;
                    validations.references.text = "references cant be empty";
                }
                return valid;
            },
            sendMail(data) {
                data.publications = this.publicationsEditor.root.innerHTML;
                data.references = this.referencesEditor.root.innerHTML;

                if(this.validateFields(data)) {
                    this.$store.dispatch('sendApplyForMembershipMail', data);
                }
            }
        }
    }
</script>