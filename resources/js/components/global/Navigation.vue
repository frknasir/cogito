<style>
</style>
<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
        <div class="container">
            <div class="navbar-translate">
                <router-link class="navbar-brand" to="/" rel="tooltip" title="" 
                    data-placement="bottom">
                    <span>{{ config.site_title }}</span>
                </router-link>
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                {{ config.site_title }}
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close text-right">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="tim-icons icon-simple-remove"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <!--<li class="nav-item p-0 d-none d-lg-block">
                        <a class="nav-link" rel="tooltip" title="Follow me on Twitter" data-placement="bottom" 
                            :href="config.twitter_url" target="_blank">
                            <i class="fa fa-twitter"></i>
                            <p class="d-lg-none d-xl-none">Twitter</p>
                        </a>
                    </li>
                    <li class="nav-item p-0 d-none d-lg-block">
                        <a class="nav-link" rel="tooltip" title="Check me out on Facebook" data-placement="bottom" 
                            :href="config.facebook_url" target="_blank">
                            <i class="fa fa-facebook-square"></i>
                            <p class="d-lg-none d-xl-none">Facebook</p>
                        </a>
                    </li>
                    <li class="nav-item p-0 d-none d-lg-block">
                        <a class="nav-link" rel="tooltip" title="Follow me on Instagram" 
                            data-placement="bottom" :href="config.instagram_url" 
                            target="_blank">
                            <i class="fa fa-instagram"></i>
                            <p class="d-lg-none d-xl-none">Instagram</p>
                        </a>
                    </li>-->
                    <li class="nav-item p-0">
                        <a class="nav-link" href="/blog">
                            <i class="fa fa-rss"></i>
                            Blog
                        </a>
                    </li>
					<li class="nav-item p-0">
                        <router-link class="nav-link" to="/projects">
                            <i class="fa fa-laptop"></i>
                            Projects
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-default" to="/contact">
                            <i class="fa fa-envelope"></i>
                            Contact
                        </router-link>
                    </li>
                    <li v-if="user.name" class="dropdown nav-item">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-user-circle-o"></i>
                            {{ user.name }}
                        </a>
                        <div class="dropdown-menu dropdown-with-icons">
                            <a class="dropdown-item" href="/blog-admin/posts">
                                <i class="fa fa-pencil-square-o"></i>
                                Posts
                            </a>
                            <a class="dropdown-item" href="/blog-admin/tags">
                                <i class="fa fa-tags"></i> Tags
                            </a>
                            <a class="dropdown-item" href="/blog-admin/topics">
                                <i class="fa fa-object-group"></i> Topics
                            </a>
                            <a class="dropdown-item" href="/blog-admin">
                                <i class="fa fa-area-chart"></i> Stats
                            </a>
                            <div class="dropdown-divider"></div>
                            <router-link to="/admin" class="dropdown-item">
                                <i class="fa fa-lock"></i> Admin
                            </router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                                <i class="fa fa-sign-out"></i> Logout
                            </a>
                            <form id="logout-form" :action="'/logout'" 
                                    method="POST" style="display: none;">
                                <input type="hidden" name="_token" id="csrf-token" :value="csrf_token" />
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
     export default {
        components: {},
        data () {
            return {
                csrf_token: $('meta[name="csrf-token"]').attr('content'),
                loginStatus: 0
            };
        },
        computed: {
            user () {
                return this.$store.getters.getUser;
            },
            userLoadStatus () {
                return this.$store.getters.getUserLoadStatus;
            },
            config() {
                return this.$store.getters.getConfig;
            },
            configLoadStatus() {
                return this.$store.getters.getConfigLoadStatus;
            }
        },
        watch: {
            userLoadStatus: function (val) {
                this.loginStatus = val;
            }
        },
        mounted () {},
        created () {
            this.$store.dispatch('getAuthUser')
            this.$store.dispatch('loadConfig')
        }
    };
</script> 
