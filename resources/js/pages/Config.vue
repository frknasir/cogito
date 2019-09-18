<style scoped>
</style>
<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <h1 class="title text-center">
                        Site Configuration
                    </h1>
                    <hr>
                    
                    <form>
                        <div class="form-group">
                            <label for="site_name">Site Name</label>
                            <input type="text" class="form-control" id="site_name" 
                                aria-describedby="emailHelp" v-model="config.site_name" placeholder="Enter Site Name">
                            <small v-show="!validations.site_name.is_valid" class="form-text text-muted text-danger">
                                {{ validations.site_name.text }}
                            </small>                   
                        </div>
                        <div class="form-group">
                            <label for="site_title">Site Title</label>
                            <input type="text" class="form-control" id="site_title" 
                                aria-describedby="emailHelp" v-model="config.site_title" placeholder="Enter Site Title">
                            <small v-show="!validations.site_title.is_valid" class="form-text text-muted text-danger">
                                {{ validations.site_title.text }}
                            </small>   
                        </div>
                        <div class="form-group">
                            <label for="">
                                Site Description
                                <sup>
                                    (required)
                                </sup>
                            </label>
                            <div id="site_description"></div>
                            <small v-show="!validations.site_description.is_valid" class="form-text text-muted text-danger">
                                {{ validations.site_description.text }}
                            </small>
                        </div>
                        <!--<div class="form-group">
                            <label for="site_logo">Site Logo</label><br><br>
                            <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div class="fileinput-new thumbnail img-raised">
                                    <img width="150" src="/img/boblogo.png" alt="...">
                                </div>
                                <div style="width: 150px;" class="fileinput-preview fileinput-exists thumbnail img-raised"></div>
                                <div>
                                    <span class="btn btn-raised btn-round btn-default btn-file">
                                        <span class="fileinput-new">Select image</span>
                                        <span class="fileinput-exists">Change</span>
                                        <input type="file" name="site_logo" id="site_logo" 
                                            @change="processFile($event)">
                                    </span>
                                    <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                                </div>
                            </div>
                        </div>-->
                        <div class="form-group">
                            <label for="office_address">Office Address</label>
                            <textarea name="office_address" cols="30" rows="3" 
                                class="form-control" v-model="config.office_address" id="office_address"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" 
                            id="email" aria-describedby="emailHelp" v-model="config.email" placeholder="Enter email">
                            <small v-show="!validations.email.is_valid" class="form-text text-muted text-danger">
                                {{ validations.email.text }}
                            </small>   
                        </div>
                        <div class="form-group">
                            <label for="phone_number">Phone Number</label>
                            <input type="tel" class="form-control" id="phone_number" 
                                placeholder="Phone Number" v-model="config.phone_number">
                            <small v-show="!validations.phone_number.is_valid" class="form-text text-muted text-danger">
                                {{ validations.phone_number.text }}
                            </small>   
                        </div>
                        <div class="form-group">
                            <label for="twitter_url">Twitter Url</label>
                            <input type="text" class="form-control" id="twitter_url" 
                                placeholder="Twitter Url" v-model="config.twitter_url">
                        </div>
                        <div class="form-group">
                            <label for="facebook_url">Facebook Url</label>
                            <input type="text" class="form-control" id="facebook_url" 
                                placeholder="Facebook Url" v-model="config.facebook_url">
                        </div>
                        <div class="form-group">
                            <label for="instagram_url">Instagram Url</label>
                            <input type="text" class="form-control" id="instagram_url" 
                                placeholder="Instagram Url" v-model="config.instagram_url">
                        </div>
                        <div class="form-group">
                            <label for="linkedin_url">LinkedIn Url</label>
                            <input type="text" class="form-control" id="linkedin_url" 
                                placeholder="LinkedIn Url" v-model="config.linkedin_url">
                        </div>

                        <!--<div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox">
                                <span class="form-check-sign"></span>
                                Check me out
                            </label>
                        </div>-->
                        <button type="button" @click="update()" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { HELPERS } from '../helpers.js';
    export default {
        created() {
            this.$store.dispatch('getAuthUser');
            this.$store.dispatch('loadConfig');
        },
        mounted() {
            this.SiteDescriptionEditor = HELPERS.initQuillEditor('site_description');
        },
        data() {
            return {
                csrf_token: $('meta[name="csrf-token"]').attr('content'),
                SiteDescriptionEditor: null,
                validations: {
                    site_name: {
                        is_valid: true,
                        text: ''
                    },
                    site_title: {
                        is_valid: true,
                        text: ''
                    },
                    site_description: {
                        is_valid: true,
                        text: ''
                    },
                    site_logo: {
                        is_valid: true,
                        text: ''
                    },
                    office_address: {
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
                    twitter_url: {
                        is_valid: true,
                        text: ''
                    },
                    facebook_url: {
                        is_valid: true,
                        text: ''
                    },
                    instagram_url: {
                        is_valid: true,
                        text: ''
                    },
                    linkedin_url: {
                        is_valid: true,
                        text: ''
                    },
                }
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            config() {
                return this.$store.getters.getConfig;
            },
            configLoadStatus() {
                return this.$store.getters.getConfigLoadStatus;
            },
            updateConfigLoadStatus() {
                return this.$store.getters.getUpdateConfigLoadStatus;
            },
            updateConfigResponse() {
                return this.$store.getters.getUpdateConfigResponse;
            }
        },
        watch: {
            configLoadStatus: function(val) {
                
                if(val == 2) {
                    this.SiteDescriptionEditor.root.innerHTML = this.config.site_description;
                }
            },
            updateConfigLoadStatus: function(val) {
                if(val == 2 && this.updateConfigResponse.success == 1) {
                    this.$message({
                        title: 'Success',
                        message: 'updated successfully!',
                        type: 'success'
                    });
                } else if(val == 3 || this.updateConfigResponse.success == 0) {
                    this.$message({
                        title: 'Danger',
                        message: 'try again!',
                        type: 'danger'
                    });
                }
            }
        },
        methods: {
            processFile(event) {
                this.config.site_logo = event.target.files[0];
            },
            validateFields(config) {
                let valid = true;
                let validations = this.validations;
                if(!config.site_name) {
                    valid = false;
                    validations.site_name.is_valid = false;
                    validations.site_name.text = "Site name cant be empty";
                }
                if(!config.site_title) {
                    valid = false;
                    validations.site_title.is_valid = false;
                    validations.site_title.text = "Site title cant be empty";
                }
                if(!config.email) {
                    valid = false;
                    validations.email.is_valid = false;
                    validations.email.text = "contact email cant be empty";
                }
                if(!config.phone_number) {
                    valid = false;
                    validations.phone_number.is_valid = false;
                    validations.phone_number.text = "contact phone can not be empty";
                }
                return valid;
            },
            update() {
                this.config.site_description = this.SiteDescriptionEditor.root.innerHTML;

                if(this.validateFields(this.config)) {
                    this.$store.dispatch('updateConfig', this.config);
                }
            }
        }
    }
</script>
