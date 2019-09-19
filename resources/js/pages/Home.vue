<style scoped>
</style>

<template>
	<div>
		<div class="page-header header-filter">
			<div class="container align-items-center">
				<div class="row">
					<div class="col-lg-6 col-md-6">
						<h1 class="profile-title text-left">{{ config.site_title }}</h1>
						<h5 class="text-on-back">{{ textOnBack }}</h5>
						<p class="profile-description" v-html="config.site_description"></p>
						<div class="btn-wrapper profile pt-3">
							<a
								target="_blank"
								:href="config.twitter_url"
								class="btn btn-icon btn-twitter btn-round"
								data-toggle="tooltip"
								data-original-title="Follow me">
								<i class="fa fa-twitter"></i>
							</a>
							<a
								target="_blank"
								:href="config.facebook_url"
								class="btn btn-icon btn-facebook btn-round"
								data-toggle="tooltip"
								data-original-title="Like me">
								<i class="fa fa-facebook-square"></i>
							</a>
							<a
								target="_blank"
								:href="config.instagram_url"
								class="btn btn-icon btn-instagram btn-round"
								data-toggle="tooltip"
								data-original-title="Follow me">
								<i class="fa fa-instagram"></i>
							</a>
							<a
								target="_blank"
								:href="config.github_url"
								class="btn btn-icon btn-github btn-round"
								data-toggle="tooltip"
								data-original-title="Follow me">
								<i class="fa fa-github"></i>
							</a>
							<a
								target="_blank"
								:href="config.linkedin_url"
								class="btn btn-icon btn-linkedin btn-round"
								data-toggle="tooltip"
								data-original-title="Follow me">
								<i class="fa fa-linkedin"></i>
							</a>
						</div>
					</div>
					<div class="col-md-6 ml-auto mr-auto">
						<div class="card card-coin card-plain">
							<div class="card-header">
								<img
									:src="'/storage/' + this.config.site_logo_url"
									class="img-center img-fluid rounded-circle"/>
								<h4 class="title">Artisanship</h4>
							</div>
							<div class="card-body">
								<ul class="nav nav-tabs nav-tabs-primary justify-content-center">
									<li class="nav-item">
										<a class="nav-link active" data-toggle="tab" href="#linka">Languages</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" data-toggle="tab" href="#linkb">Frameworks</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" data-toggle="tab" href="#linkc">Databases</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" data-toggle="tab" href="#linkc">Other</a>
									</li>
								</ul>
								<div class="tab-content tab-subcategories">
									<div class="tab-pane active" id="linka"></div>
									<div class="tab-pane" id="linkb"></div>
									<div class="tab-pane" id="linkc"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main">




			<div class="section section-basic">
				<div class="container">
					<div class="row">
						<div class="col-md-8 ml-auto mr-auto">
							<h1 class="title text-left">
								Latest Articles
								<router-link to="#" class="btn btn-default btn-sm">
									view all
								</router-link>
							</h1>
							<div class="d-flex border-top py-3 align-items-center" v-for="(post, index) in posts" :key="index">
                                <div class="mr-auto py-1">
                                    <p class="mb-1">
                                        <a :href="'/blog/' + post.slug" class="font-weight-bold lead">{{ post.title }}</a>
                                    </p>
                                    <p class="mb-1" v-if="post.summary">{{ post.summary }}</p>
                                    <p class="text-muted mb-0">
                                        <span v-if="post.published_at <= moment(new Date()).tz('Africa/Lagos').format().slice(0, 19).replace('T', ' ')">
                                            Published {{ moment(post.published_at).format('LLL') }}
                                        </span>
                                    </p>
                                </div>
                                <div class="ml-auto d-none d-lg-block">
                                    <a :href="'/blog/' + post.slug">
                                        <div v-if="post.featured_image"
                                             class="mr-2"
                                             :style="{ backgroundImage: 'url(' + post.featured_image + ')' }"
                                             style="background-size: cover;width: 57px; height: 57px; -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;"></div>
                                        <span v-else class="fa-stack fa-2x align-middle">
                                        <i class="fas fa-circle fa-stack-2x text-black-50"></i>
                                        <i class="fas fa-fw fa-stack-1x fa-camera fa-inverse"></i>
                                    </span>
                                    </a>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</div>




			<div class="section section-basic">
				<div class="container">
					<div class="row">
						<div class="col-md-8 ml-auto mr-auto">
							<h1 class="title text-left">
								Open Source Projects
								<router-link to="/projects" class="btn btn-default btn-sm">
									view all
								</router-link>
							</h1>
							<div class="d-flex border-top py-3 align-items-center" v-for="(post, index) in posts" :key="index">
								<div class="row">
									<div class="col">
										<p class="mb-1">
											<a :href="'/blog/' + post.slug" class="font-weight-bold lead">{{ post.title }}</a>
										</p>
										<p class="mb-1" v-if="post.summary">{{ post.summary }}</p>
										<p class="text-muted mb-0">
											<span v-if="post.published_at <= moment(new Date()).tz('Africa/Lagos').format().slice(0, 19).replace('T', ' ')">
												{{ moment(post.published_at).format('LLL') }}
											</span>
										</p>
									</div>
									<div class="col-6">
										<p class="mb-1 text-muted">
											this is me and you. this is me and you.
											this is me and you. this is me and you.
										</p>
									</div>
									<div class="col">
										<button type="button" class="btn btn-github btn-block">
											<i class="fa fa-github"></i>
											source
										</button>
										<button type="button" class="btn btn-primary btn-neutral btn-block">
											<i class="fa fa-eye"></i>
											view
										</button>
									</div>
								</div>
                            </div>
						</div>
					</div>
				</div>
			</div>



			<div class="section section-basic">
				<div class="container">
					<div class="row">
						<div class="col-md-8 ml-auto mr-auto">
							<h1 class="title text-left">
								QOTW
								<small class="text-muted">
									Quote of The Week
								</small>
							</h1>
							<div class="card">
								<div class="card-header">
									Quote
								</div>
								<div class="card-body" v-html="config.qotw"></div>
							</div>
						</div>
					</div>
				</div>
			</div>




		</div>
	</div>
</template>

<script>
import moment from 'moment'
import 'moment-timezone'

export default {
	components: {},
	data() {
		return {
			newsletterEmail: "",
			message: "",
			featured_posts: null,
			moment: moment
		};
	},
	created() {
		this.$store.dispatch("loadConfig");
		this.$store.dispatch("getPosts", {
			limit: 3,
			url: null
		});
	},
	computed: {
		config() {
			return this.$store.getters.getConfig;
		},
		configLoadStatus() {
			return this.$store.getters.getConfigLoadStatus;
		},
		members() {
			return this.$store.getters.getMembers;
		},
		membersLoadStatus() {
			return this.$store.getters.getMembersLoadStatus;
		},
		memberPagination() {
			return this.$store.getters.getMemberPagination;
		},
		subscribeNewsletterLoadStatus() {
			return this.$store.getters.getSubscribeNewsletterLoadStatus;
		},
		subscribeNewsletterResponse() {
			return this.$store.getters.getSubscribeNewsletterResult;
		},
		unsubscribeNewsletterLoadStatus() {
			return this.$store.getters.getUnsubscribeNewsletterLoadStatus;
		},
		unsubscribeNewsletterResponse() {
			return this.$store.getters.getUnsubscribeNewsletterResult;
		},
		newsletter() {
			return this.$store.getters.getNewsletter;
		},
		posts() {
			return this.$store.getters.getPosts;
		},
		postsLoadStatus() {
			return this.$store.getters.getPostsLoadStatus;
		},
		textOnBack() {
			let splitted = this.config.site_title.split(' ');
			let tob = '';

			splitted.forEach(split => {
				tob += split.charAt(0).toUpperCase()
			});

			return tob;
		}
	},
	methods: {
		loadNewsletter	() {
			this.$store.dispatch("getNewsletter");
		},
		subscribeNewsletter	(data) {
			if (1) {
				this.$store.dispatch("subscribeNewsletter", data);
				console.log("subscribing: " + data);
			}
		},
		unsubscribeNewsletter (data) {
			if (1) {
				this.$store.dispatch("unsubscribeNewsletter", data);
				console.log("unsubscribing: " + data);
			}
		}
	},
	watch: {
		postsLoadStatus: function (val) {
			if (val == 2) {
				this.featured_posts = this.posts;
			}
		},
		subscribeNewsletterLoadStatus: function (val) {
			if (val == 2 && this.subscribeNewsletterResponse.success == 1) {
				this.$message({
				title: "Success",
				message: this.newsletterEmail + " subscribed Successfully",
				type: "success"
				});

				this.newsletterEmail = "";
			} else if (val == 3 || this.subscribeNewsletterResponse.success == 0) {
				this.$message({
				title: "Warning",
				message: "Something went wrong. Try again!",
				type: "warning"
				});
			}
		},
		unsubscribeNewsletterLoadStatus: function(val) {
			if (val == 2 && this.unsubscribeNewsletterResponse.success == 1) {
				this.$message({
					title: "Success",
					message: this.newsletterEmail + " unsubscribed Successfully",
					type: "success"
				});
			} else if (val == 3 || this.unsubscribeNewsletterResponse.success == 0) {
				this.$message({
					title: "Warning",
					message: "Something went wrong. Try again!",
					type: "warning"
				});
			}
		}
	}
};
</script>
