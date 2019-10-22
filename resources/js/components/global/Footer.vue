<style>

</style>
<template>
    <footer class="footer">
        <div class="container">
			<div class="row">
				<div class="col-md-8 ml-auto mr-auto text-center">
					<a rel="tooltip" title="Follow me on Twitter" data-placement="bottom" 
						:href="config.twitter_url" target="_blank">
						<i class="fa fa-twitter"></i>
						<p class="d-lg-none d-xl-none">Twitter</p>
					</a>
					<a rel="tooltip" title="Check me out on Facebook" data-placement="bottom" 
						:href="config.facebook_url" target="_blank">
						<i class="fa fa-facebook-square"></i>
						<p class="d-lg-none d-xl-none">Facebook</p>
					</a>
					<a rel="tooltip" title="Follow me on Instagram" 
						data-placement="bottom" :href="config.instagram_url" 
						target="_blank">
						<i class="fa fa-instagram"></i>
						<p class="d-lg-none d-xl-none">Instagram</p>
					</a>
					<a rel="tooltip" title="Follow me on Linkedin" 
						data-placement="bottom" :href="config.linkedin_url" 
						target="_blank">
						<i class="fa fa-linkedin"></i>
						<p class="d-lg-none d-xl-none">Linkedin</p>
					</a>
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
