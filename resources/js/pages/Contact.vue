<style scoped>
</style>
<template>
    <div class="section section-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <h2 class="title">Get in touch with us</h2>
                    <p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 ml-auto mr-auto text-center">
                    <h3 class="title">
                        <small>Find us on social networks</small>
                    </h3>
                    <a :href="config.twitter_url" class="btn btn-just-icon btn-twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a :href="config.facebook_url" class="btn btn-just-icon btn-facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a :href="config.instagram_url" class="btn btn-just-icon btn-instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a :href="config.linkedin_url" class="btn btn-just-icon btn-linkedin">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 ml-auto mr-auto text-center">
                    <h3 class="title">
                        <small>Or drop us a note</small>
                    </h3>
                    <form class="contact">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <input v-model="contact_mail.first_name" type="text" class="form-control" placeholder="First Name">
                                <small v-show="!validations.first_name.is_valid" class="form-text text-muted text-danger">
                                    {{ validations.first_name.text }}
                                </small>
                            </div>
                            <div class="form-group col-md-6">
                                <input v-model="contact_mail.last_name" type="text" class="form-control" placeholder="Last Name">
                                <small v-show="!validations.last_name.is_valid" class="form-text text-muted text-danger">
                                    {{ validations.last_name.text }}
                                </small>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <input v-model="contact_mail.email" type="text" class="form-control" placeholder="Email">
                                <small v-show="!validations.email.is_valid" class="form-text text-muted text-danger">
                                    {{ validations.email.text }}
                                </small>
                            </div>
                            <div class="form-group col-md-6">
                                <input v-model="contact_mail.subject" type="text" class="form-control" placeholder="Subject">
                                <small v-show="!validations.subject.is_valid" class="form-text text-muted text-danger">
                                    {{ validations.subject.text }}
                                </small>
                            </div>
                        </div>
                        <textarea v-model="contact_mail.message" class="form-group form-control" placeholder="Message" rows="7"></textarea>
                        <small v-show="!validations.message.is_valid" class="form-text text-muted text-danger">
                            {{ validations.message.text }}
                        </small>
                        <div class="row">
                            <div class="form-group col-md-6 ml-auto mr-auto">
                                <button type="button" @click="sendMail(contact_mail)"
                                    class="btn btn-primary btn-block btn-round">
                                    Send 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                contact_mail: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                validations: {
                    first_name: {
                        is_valid: true,
                        text: ''
                    },
                    last_name: {
                        is_valid: true,
                        text: ''
                    },
                    email: {
                        is_valid: true,
                        text: ''
                    },
                    subject: {
                        is_valid: true,
                        text: ''
                    },
                    message: {
                        is_valid: true,
                        text: ''
                    }
                },
            };
        },
        components: {
            
        },
        created() {
            this.$store.dispatch('loadConfig');
        },
        computed: {
            sendContactMailLoadStatus() {
                return this.$store.getters.getSendContactMailLoadStatus;
            },
            sendContactMailResponse() {
                return this.$store.getters.getSendContactMailResponse;
            },
            config() {
                return this.$store.getters.getConfig;
            },
            configLoadStatus() {
                return this.$store.getters.getConfigLoadStatus;
            }
        },
        watch: {
            sendContactMailLoadStatus: function(val) {
                if(val == 2) {
                    //reset fields
                    this.contact_mail.first_name = '';
                    this.contact_mail.last_name = '';
                    this.contact_mail.email = '';
                    this.contact_mail.subject = '';
                    this.contact_mail.message = '';
                    
                    this.$message({
                        type: 'success',
                        message: 'Thank you for contacting us!'
                    });
                }
            }
        },
        methods: {
            validateFields(data) {
                let valid = true;
                let validations = this.validations;
                if(!data.first_name) {
                    valid = false;
                    validations.first_name.is_valid = false;
                    validations.first_name.text = "first name cant be empty";
                }
                if(!data.last_name) {
                    valid = false;
                    validations.last_name.is_valid = false;
                    validations.last_name.text = "last name cant be empty";
                }
                if(!data.email) {
                    valid = false;
                    validations.email.is_valid = false;
                    validations.email.text = "email cant be empty";
                }
                if(!data.subject) {
                    valid = false;
                    validations.subject.is_valid = false;
                    validations.subject.text = "subject cant be empty";
                }
                if(!data.message) {
                    valid = false;
                    validations.message.is_valid = false;
                    validations.message.text = "message cant be empty";
                }
                return valid;
            },
            sendMail(mail) {
                if(this.validateFields(mail)) {
                    this.$store.dispatch('sendContactMail', mail);
                }
            }
        }
    }
</script>
