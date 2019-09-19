<style>

</style>
<template>
    <footer class="footer footer-black footer-big">
        <div class="container">
			<div class="row">
				<div class="col-md-8 ml-auto mr-auto">
					<ul class="list-inline ml-auto mr-auto">
						<li class="list-inline-item">
							<a rel="tooltip" title="Follow me on Twitter" data-placement="bottom" 
								:href="config.twitter_url" target="_blank">
								<i class="fa fa-twitter"></i>
								<p class="d-lg-none d-xl-none">Twitter</p>
							</a>
						</li>
						<li class="list-inline-item">
							<a rel="tooltip" title="Check me out on Facebook" data-placement="bottom" 
								:href="config.facebook_url" target="_blank">
								<i class="fa fa-facebook-square"></i>
								<p class="d-lg-none d-xl-none">Facebook</p>
							</a>
						</li>
						<li class="list-inline-item">
							<a rel="tooltip" title="Follow me on Instagram" 
								data-placement="bottom" :href="config.instagram_url" 
								target="_blank">
								<i class="fa fa-instagram"></i>
								<p class="d-lg-none d-xl-none">Instagram</p>
							</a>
						</li>
						<li class="list-inline-item">
							<a rel="tooltip" title="Follow me on Linkedin" 
								data-placement="bottom" :href="config.linkedin_url" 
								target="_blank">
								<i class="fa fa-linkedin"></i>
								<p class="d-lg-none d-xl-none">Linkedin</p>
							</a>
						</li>
						<li class="list-inline-item">
							<a rel="tooltip" title="Follow me on Github" 
								data-placement="bottom" :href="config.github_url" 
								target="_blank">
								<i class="fa fa-github"></i>
								<p class="d-lg-none d-xl-none">Github</p>
							</a>
						</li>
					</ul>
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
