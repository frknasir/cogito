<style scoped>
</style>

<template>
  <div class="wrapper">
    <div class="page-header" style="background-image: url('/img/pattern.jpg')">
        <div class="filter"></div>
        <div class="content-center">
          <div class="col-md-8 ml-auto mr-auto">
            <div class="card card-raised page-carousel">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li v-for="(post, index) in featured_posts" :key="index" data-target="#carouselExampleIndicators" :data-slide-to="index" class=""></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div v-for="(post, index) in featured_posts" :key="index" 
                    class="carousel-item" v-bind:class="{ active: index === 0 }">
                    <img class="d-block img-fluid" :src="post.featured_image" alt="First slide">
                    <div class="carousel-caption mb-5 mr-auto ml-auto">
                      <p>
                        <a :href="'/blog/'+post.slug" class="carousel-caption btn btn-info btn-sm">Read Story</a>
                      </p>
                    </div>
                  </div>
                </div>
                <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="fa fa-angle-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="fa fa-angle-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="main">
      <!-- <form action="">
        <div class="form-group">
          <label for="exampleInputEmail1">
            Subscribe Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="newsletterEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="newsletterEmail"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button
          @click="subscribeNewsletter(newsletterEmail)"
          type="button"
          class="btn btn-primary"
        >
          Subscribe
        </button>

        <button
          @click="unsubscribeNewsletter(newsletterEmail)"
          type="button"
          class="btn btn-primary"
        >
          Unsubscribe
        </button>

        <button
          @click="loadNewsletter(newsletterEmail)"
          type="button"
          class="btn btn-primary"
        >
          Get Members
        </button>
      </form>-->


      <div class="section text-center landing-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title">About Spoor</h2>
            <h5>
              Spoor is an initiative of Premium Times Centre for Investigative 
              Journalism. This platform was created to dive into the security 
              problems in Nigeria, Chad, Niger, and Cameroon. The first phase 
              of this project is to focus on the decade long insurgency in the 
              North Eastern part of Nigeria that also affects the Lake Chad Countries.
            </h5>
            <br>
            <!--<a href="#paper-kit" class="btn btn-danger btn-fill btn-round">See Details</a>-->
          </div>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="col-md-3">
            <div class="info">
              <div class="icon icon-danger">
                <i class="nc-icon nc-palette"></i>
              </div>
              <div class="description">
                <h4 class="info-title">Facts and Figures</h4>
                <p class="description">
                  presentation of precise details of attacks, incidences and events openly and honestly.
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info">
              <div class="icon icon-danger">
                <i class="nc-icon nc-bulb-63"></i>
              </div>
              <div class="description">
                <h4 class="info-title">Policy Briefs</h4>
                <p>concise summary of issues, the options to deal with them, and recommendations.</p>
                
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info">
              <div class="icon icon-danger">
                <i class="nc-icon nc-chart-bar-32"></i>
              </div>
              <div class="description">
                <h4 class="info-title">Insights</h4>
                <p>provision of insight and unbiased analysis of the insurgency using evidence based research</p>
                
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info">
              <div class="icon icon-danger">
                <i class="fa fa-map"></i>
              </div>
              <div class="description">
                <h4 class="info-title">Incidents Map</h4>
                <p>browse through an array of incidents on a map with extensive details of how they happened</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div
        class="features-5 section-image"
        style="background-image: url('/img/spoor_bg_1.jpg')">
        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto">
              <h2 class="title text-center">
                Who We Are <br>
                <small>We are a synergy of the following</small>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5 ml-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-atom" aria-hidden="true"></i>
                </div>
                <h4 class="title">Media Organisations</h4>
                <p>
                  Entities engaged in disseminating information to the general public 
                  through a newspaper, magazine, other publication, radio, television, 
                  cable television, or other medium of mass communication.
                </p>
              </div>
            </div>
            <div class="col-sm-5 mr-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-ruler-pencil" aria-hidden="true"></i>
                </div>
                <h4 class="title">CSOs</h4>
                <p>
                  Non for profit organisations
                </p>
              </div>
            </div>
          </div>
          <div class="row bottom-line">
            <div class="col-sm-5 ml-auto">
              <div class="info">
                <div class="icon">
                  <i class="nc-icon nc-paper" aria-hidden="true"></i>
                </div>
                <h4 class="title">Security Agencies</h4>
                <p>
                  Governmental organisation which conducts intelligence activities for the 
                  internal security of a nation.
                </p>
              </div>
            </div>
            <div class="col-sm-5 mr-auto">
              <div class="info">
                <div class="icon">
                  <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <h4 class="title">Spoor Team</h4>
                <p>
                  PTCIJ, HumAngle Media Limited and Consultants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="subscribe-line subscribe-line-black">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-8 col-sm-8">
              <form class="">
                <div class="form-group">
                  <input type="text" v-model="newsletterEmail" class="form-control" placeholder="Enter your email...">
                </div>
              </form>
            </div>
            <div class="col-md-3 col-sm-4">
              <button @click="subscribeNewsletter(newsletterEmail)" type="button" class="btn btn-neutral btn-block btn-lg">Join Newsletter</button>
            </div>
          </div>
        </div>
      </div>


      <div class="social-line" id="sharing">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <h4 class="title">Follow Us</h4>
            </div>
            <div class="col-md-2 col-sm-3">
              <a :href="config.facebook_url" target="_blank" class="btn btn-link btn-just-icon btn-facebook">
                <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
              </a>
            </div>
            <div class="col-md-2 col-sm-3">
              <a :href="config.twitter_url" target="_blank" class="btn btn-link btn-just-icon btn-twitter">
                <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
              </a>
            </div>
            <div class="col-md-2 col-sm-3">
              <a :href="config.instagram_url" target="_blank" class="btn btn-link btn-just-icon btn-instagram">
                <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
              </a>
            </div>
            <div class="col-md-2 col-sm-3">
              <a :href="config.linkedin_url" target="_blank" class="btn btn-link btn-just-icon btn-linkedin">
                <i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      newsletterEmail: "",
      message: "",
      featured_posts: null
    };
  },
  created () {
    this.$store.dispatch("loadConfig");
    this.$store.dispatch("loadMembers", {
      url: null
    });
    this.$store.dispatch('getPosts', {
      limit: 3,
      url: null
    })
  },
  computed: {
    config () {
      return this.$store.getters.getConfig;
    },
    configLoadStatus () {
      return this.$store.getters.getConfigLoadStatus;
    },
    members () {
      return this.$store.getters.getMembers;
    },
    membersLoadStatus () {
      return this.$store.getters.getMembersLoadStatus;
    },
    memberPagination () {
      return this.$store.getters.getMemberPagination;
    },
    subscribeNewsletterLoadStatus () {
      return this.$store.getters.getSubscribeNewsletterLoadStatus;
    },
    subscribeNewsletterResponse () {
      return this.$store.getters.getSubscribeNewsletterResult;
    },
    unsubscribeNewsletterLoadStatus () {
      return this.$store.getters.getUnsubscribeNewsletterLoadStatus;
    },
    unsubscribeNewsletterResponse () {
      return this.$store.getters.getUnsubscribeNewsletterResult;
    },
    newsletter () {
      return this.$store.getters.getNewsletter;
    },
    posts () {
      return this.$store.getters.getPosts;
    },
    postsLoadStatus () {
      return this.$store.getters.getPostsLoadStatus;
    }
  },
  methods: {
    loadNewsletter() {
      this.$store.dispatch("getNewsletter");
    },
    subscribeNewsletter(data) {
      if (1) {
        this.$store.dispatch("subscribeNewsletter", data);
        console.log("subscribing: " + data);
      }
    },
    unsubscribeNewsletter(data) {
      if (1) {
        this.$store.dispatch("unsubscribeNewsletter", data);
        console.log("unsubscribing: " + data);
      }
    }
  },
  watch: {
    postsLoadStatus: function (val) {
      if(val == 2) {
        this.featured_posts = this.posts;
      }
    },
    subscribeNewsletterLoadStatus: function(val) {
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
