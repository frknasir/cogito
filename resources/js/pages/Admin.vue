<style scoped>
</style>
<template>
	<div class="main">
		<div class="section section-basic mt-5">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="list-group" id="list-tab" role="tablist">
							<router-link class="list-group-item list-group-item-action"
								:class="{ active: isDashboardActive }" 
								id="list-home-list" 
								data-toggle="list" 
								to="/admin" role="tab" aria-controls="home">
								Dashboard
							</router-link>
							<router-link class="list-group-item list-group-item-action"
								:class="{ active: isProficiencyActive }" 
								id="list-proficiency-list" 
								data-toggle="list" 
								to="/admin/proficiencies" 
								role="tab" aria-controls="proficiency">
								Proficiencies
							</router-link>
							<router-link class="list-group-item list-group-item-action"
								:class="{ active: isProjectActive }" 
								id="list-project-list" 
								data-toggle="list" 
								to="/admin/projects" 
								role="tab" aria-controls="project">
								Projects
							</router-link>
							<router-link class="list-group-item list-group-item-action"
								:class="{ active: isManageUsersActive }" 
								id="list-profile-list" 
								data-toggle="list" 
								to="/admin/users" 
								role="tab" aria-controls="profile">
								Manage Users
							</router-link>
							<router-link class="list-group-item list-group-item-action"
								:class="{ active: isConfigActive }" 
								id="list-messages-list" data-toggle="list" 
								to="/admin/config" role="tab" 
								aria-controls="messages">
								Settings
							</router-link>
						</div>
					</div>
					<div class="col-md-8">
						<router-view />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
		components: {},
		computed: {
			isDashboardActive () {
				return this.$route.meta.mod === 'admin-dashboard' ? true : false
			},
			isManageUsersActive () {
				return this.$route.meta.mod === 'manage-users' ? true : false
			},
			isConfigActive () {
				return this.$route.meta.mod === 'config' ? true : false
			},
			isProficiencyActive () {
				return this.$route.meta.mod === 'proficiencies' ? true : false
			},
			isProjectActive () {
				return this.$route.meta.mod === 'projects' ? true : false
			}
		}
    }
</script>