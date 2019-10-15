/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerHistory } from 'vue-router-back-button';
import HeaderComponent from './components/global/Navigation.vue';
import FooterComponent from './components/global/Footer.vue';

import store from './store.js';

/*
    Extends Vue to use Vue Router
*/
Vue.use(VueRouter);
Vue.use(routerHistory);

/*
	This will cehck to see if the user is authenticated or not.
*/
function requireAuth(to, from, next) {
	/*
		Determines where we should send the user.
	*/
    function proceed() {
		/*
			If the user has been loaded determine where we should
			send the user.
		*/
        if (store.getters.getUserLoadStatus == 2) {
            next();
        } else if (store.getters.getUserLoadStatus == 3) {
            //user is not logged in
            console.log('you are not logged in');
        }
    }

    proceed();
}

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: Vue.component('HomeComponent', require('./pages/Home.vue').default),
                header: Vue.component('HeaderComponent', HeaderComponent),
                footer: Vue.component('FooterComponent', FooterComponent)
            }
        },
		{
			path: '/projects',
			components: {
				default: Vue.component('ProjectsComponent', require('./pages/Project.vue').default),
				header: Vue.component('HeaderComponent', HeaderComponent),
				footer: Vue.component('FooterComponent', FooterComponent)
			},
			children: [
				{
					path: '',
					name: 'BrowseProjects',
					component: Vue.component(
						'BrowseProject',
						require('./components/projects/BrowseProject.vue').default
					)
				}
			]
		},
        {
            path: '/contact',
            name: 'Contact',
            components: {
                default: Vue.component('ContactComponent', require('./pages/Contact.vue').default),
                header: Vue.component('HeaderComponent', HeaderComponent),
                footer: Vue.component('FooterComponent', FooterComponent)
            }
        },
        {
            path: '/admin',
            components: {
                default: Vue.component('AdminComponent', require('./pages/Admin.vue').default),
                header: Vue.component('HeaderComponent', HeaderComponent),
                footer: Vue.component('FooterComponent', FooterComponent)
			},
			beforeEnter: requireAuth,
            children: [
                {
                    path: '',
                    //redirect: '/admin/users',
                    name: 'Admin Dashboard',
                    components: {
                        default: Vue.component('UsersComponent', require('./pages/Dashboard.vue').default),
                        header: Vue.component('HeaderComponent', HeaderComponent),
                        footer: Vue.component('FooterComponent', FooterComponent)
					},
					meta: {
						mod: 'admin-dashboard'
					}
				},
				{
                    path: 'proficiencies',
                    components: {
                        default: Vue.component('UsersComponent', require('./pages/Proficiency.vue').default),
                        header: Vue.component('HeaderComponent', HeaderComponent),
                        footer: Vue.component('FooterComponent', FooterComponent)
					},
					meta: {
						mod: 'proficiencies'
					},
                    children: [
                        {
                            path: '',
                            name: 'Proficiencies',
                            component: Vue.component(
                                'BrowseProficiencies',
                                require('./components/proficiencies/Browse.vue').default
							),
							meta: {
								mod: 'proficiencies'
							}
                        },
                        {
                            path: 'edit/:proficiencyId',
                            name: 'Edit Proficiency',
                            component: Vue.component(
                                'EditProficiency',
                                require('./components/proficiencies/Update.vue').default
                            ),
							meta: {
								mod: 'proficiencies'
							}
                        },
                        {
                            path: 'add',
                            name: 'Add Proficiency',
                            component: Vue.component(
                                'AddProficiency',
                                require('./components/proficiencies/Add.vue').default
                            ),
							meta: {
								mod: 'proficiencies'
							}
                        }
                    ]
				},
				{
                    path: 'projects',
                    components: {
                        default: Vue.component('UsersComponent', require('./pages/Project.vue').default),
                        header: Vue.component('HeaderComponent', HeaderComponent),
                        footer: Vue.component('FooterComponent', FooterComponent)
					},
					meta: {
						mod: 'projects'
					},
                    children: [
                        {
                            path: '',
                            name: 'Projects',
                            component: Vue.component(
                                'BrowseProjects',
                                require('./components/projects/Browse.vue').default
							),
							meta: {
								mod: 'projects'
							}
                        },
                        {
                            path: 'edit/:projectId',
                            name: 'Edit Project',
                            component: Vue.component(
                                'EditProject',
                                require('./components/projects/Update.vue').default
                            ),
							meta: {
								mod: 'projects'
							}
                        },
                        {
                            path: 'add',
                            name: 'Add Project',
                            component: Vue.component(
                                'AddProject',
                                require('./components/projects/Add.vue').default
                            ),
							meta: {
								mod: 'projects'
							}
                        }
                    ]
				},
                {
                    path: 'users',
                    components: {
                        default: Vue.component('UsersComponent', require('./pages/Users.vue').default),
                        header: Vue.component('HeaderComponent', HeaderComponent),
                        footer: Vue.component('FooterComponent', FooterComponent)
					},
					meta: {
						mod: 'manage-users'
					},
                    children: [
                        {
                            path: '',
                            name: 'Users',
                            component: Vue.component(
                                'BrowseUsers',
                                require('./components/users/BrowseUsers.vue').default
							),
							meta: {
								mod: 'manage-users'
							}
                        },
                        {
                            path: 'edit/:userId',
                            name: 'Edit User',
                            component: Vue.component(
                                'EditUser',
                                require('./components/users/EditUser.vue').default
                            ),
							meta: {
								mod: 'manage-users'
							}
                        },
                        {
                            path: 'add',
                            name: 'Add User',
                            component: Vue.component(
                                'AddUser',
                                require('./components/users/AddUser.vue').default
                            ),
							meta: {
								mod: 'manage-users'
							}
                        }
                    ]
				},
                {
                    path: 'config',
                    name: 'Config',
                    components: {
                        default: Vue.component('ConfigComponent', require('./pages/Config.vue').default),
                        header: Vue.component('HeaderComponent', HeaderComponent),
                        footer: Vue.component('FooterComponent', FooterComponent)
					},
					meta: {
						mod: 'config'
					}
                }
            ]
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    //store.dispatch('getAuthUser');
    next();
});

export default router;