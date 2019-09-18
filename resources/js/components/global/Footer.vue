<style>

</style>
<template>
    <footer class="footer footer-black footer-big">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 ml-auto mr-auto">
                    <div class="logo text-center">
                        <h3>Spoor Africa</h3>
                    </div>
                </div>
                <div class="col-md-6 offset-md-2 col-sm-8">
                    <div class="links">
                        <ul>
                            <li>
                                <router-link to="/">
                                    Home
                                </router-link>
                            </li>
                            <li>
                                <a href="/blog">
                                    Stories
                                </a>
                            </li>
                            <li>
                                <router-link to="/incidents">
                                    Incidents
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/resources">
                                    Resources
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/member">
                                    Members
                                </router-link>
                            </li>
                        </ul>
                        <hr>
                        <div class="copyright">
                            <div class="pull-left">
                                © {{ new Date().getFullYear() }}
                                Spoor Africa
                            </div>
                            <div class="pull-right">
                                <ul>
                                    <li>
                                        <a href="#paper-kit">
                                        Terms
                                        </a>
                                    </li>
                                    |
                                    <li>
                                        <a href="#paper-kit">
                                        Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        created() {},
        computed: {
            config() {
                return this.$store.getters.getConfig;
            },
            configLoadStatus() {
                return this.$store.getters.getConfigLoadStatus;
            },
        }
    }
</script>
