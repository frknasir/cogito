<style>

</style>
<template>
    <footer class="footer footer-black footer-big">
        <div class="container">
            <ul class="list-inline">
				<li class="list-inline-item">
					<a href="/blog">
						<i class="fa fa-rss"></i>
						Blog
					</a>
				</li>
				<li class="list-inline-item">
					<router-link to="/contact">
						<i class="fa fa-envelope"></i>
						Contact
					</router-link>
				</li>
			</ul>
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
