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
								<img v-if="this.config.site_logo_url"
									:src="process.env.MIX_ASSET_URL || '' + '/storage/' + this.config.site_logo_url"
									class="img-center img-fluid rounded-circle" />
								<img v-else
									:src="process.env.MIX_ASSET_URL || '' + '/img/placeholder.jpg'"
									class="img-center img-fluid rounded-circle" />
								<h4 class="title">Artisanship</h4>
							</div>
							<div class="card-body">
								<ul class="nav nav-tabs nav-tabs-primary justify-content-center">
									<li v-for="(proficiencyType, index) in proficiencyTypes" :key="index" 
										class="nav-item">
										<a class="nav-link" :class="{active: index === 0}" data-toggle="tab" :href="'#id' + proficiencyType.id">
											{{ proficiencyType.name }}
										</a>
									</li>
								</ul>
								<div class="tab-content tab-subcategories">
									<div v-for="(proficiencyType, index) in proficiencyTypes" :key="index" 
										class="tab-pane" :class="{active: index === 0}" :id="'id' + proficiencyType.id">
										<bar-chart :min="0" :max="100"
											:data="proficiencyType.proficiencies.map((proficiency) => { let r = []; r.push(proficiency.title, parseInt(proficiency.value));  return r; })"></bar-chart>
									</div>
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
							<div class="border-top py-3" v-for="(project, index) in projects" :key="index">
								<div class="row">
									<div class="col">
										<p class="mb-1">
											<a class="font-weight-bold lead">{{ project.title }}</a>
										</p>
										<p class="text-muted mb-0">
											<span>
												{{ moment(project.created_at).format('LLL') }}
											</span>
										</p>
									</div>
									<div class="col-6">
										<p class="mb-1 text-muted">
											{{ project.description }}
										</p>
									</div>
									<div class="col">
										<a target="_blank" v-if="project.source_code" :href="project.source_code" 
											class="btn btn-github btn-block">
											<i class="fa fa-github"></i>
											source
										</a>
										<a target="_blank" v-if="project.live_url" :href="project.live_url" 
											class="btn btn-primary btn-neutral btn-block">
											<i class="fa fa-eye"></i>
											view
										</a>
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
							<div class="card card-plain">
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
			moment: moment,
			process: process
		};
	},
	created() {
		this.$store.dispatch("loadConfig");
		this.$store.dispatch("loadPosts", {
			limit: 15,
			url: null
		});
		this.$store.dispatch("loadProficiencyTypes");
		this.$store.dispatch("loadProjects", {
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
		posts() {
			return this.$store.getters.getPosts;
		},
		postsLoadStatus() {
			return this.$store.getters.getPostsLoadStatus;
		},
		textOnBack() {
			if (this.config.site_title) {
				let splitted = this.config.site_title.split(' ');
				let tob = '';

				splitted.forEach(split => {
					tob += split.charAt(0).toUpperCase()
				});

				return tob;
			}
			
			return "CG";
		},
		proficiencyTypes () {
			return this.$store.getters.getProficiencyTypes;
		},
		proficiencyTypesLoadStatus () {
			return this.$store.getters.getProficiencyTypesLoadStatus;
		},
		projects () {
			return this.$store.getters.getProjects;
		},
		projectsLoadStatus () {
			return this.$store.getters.getProjectsLoadStatus;
		}
	},
	methods: {
		
	},
	watch: {
		postsLoadStatus: function (val) {
			if (val == 2) {
				this.featured_posts = this.posts;
			}
		}
	}
};
</script>
