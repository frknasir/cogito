<style scoped></style>
<template>
    <div class="content">
        <div class="container">
            
            <div class="card">
                <div class="card-header card-header-icon card-header-success">
                    <div class="card-icon">
                        <i class="fa fa-proficiencies"></i>
                    </div>
                    <div id="toolbar" class="mb-3">
                        <ul class="list-inline">
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-left">
                                showing {{ profPagination.to }} of {{ profPagination.total }} proficiencies
                            </li>
                            <li class="list-inline-item col-md-4 mb-3 mt-3 pull-right">
                                <router-link v-if="userLoadStatus == 2 && user != {}"
									class="btn btn-success" 
									:to="'/admin/proficiencies/add'">
									<i class="fa fa-certificate"></i>
									New Proficiency
								</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <table role="table table-dark" id="proficiencies-table" 
                        class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Type</th>
                                <th scope="col">Title</th>
                                <th scope="col">Value</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr v-for="proficiency in proficiencies" v-bind:key="proficiency.id">
                                <th scope="row">
                                    {{ "#" }}
                                </th>
                                <td>
                                    {{ proficiency.proficiency_type.name }}
                                </td>
                                <td>{{ proficiency.title }}</td>
                                <td>
                                    {{ proficiency.value }}
                                </td>
                                <td class="td-actions">
                                    <router-link 
                                        :to="'/admin/proficiencies/edit/'+proficiency.id" 
                                        rel="tooltip" class="btn btn-success">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button @click="deleteProficiency(proficiency.id)" type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="profPagination-btn">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-end text-black">
                                <li class="page-item" v-bind:class="[{disabled: !profPagination.prev_page_url}]">
                                    <a @click="getProficiencies(profPagination.prev_page_url)" class="page-link" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item" v-bind:class="[{disabled: !profPagination.next_page_url}]">
                                    <a @click="getProficiencies(profPagination.next_page_url)" class="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
	import { Message } from 'element-ui';

    export default {
        name: "BrowseProficiencies",
        components: {
        },
        data() {
            return {}
        },
        computed: {
            proficiencies() {
                return this.$store.getters.getProficiencies;
            },
            proficienciesLoadStatus() {
                return this.$store.getters.getProficienciesLoadStatus;
            },
            profPagination() {
                return this.$store.getters.getProfPagination;
            },
            user() {
                return this.$store.getters.getUser;
            },
            userLoadStatus() {
                return this.$store.getters.getUserLoadStatus;
            },
            deleteProficiencyLoadStatus() {
                return this.$store.getters.getDeleteProficiencyLoadStatus;
            },
            deleteProficiencyResult() {
                return this.$store.getters.getDeleteProficiencyResult;
            }
        },
        created() {
            this.$store.dispatch('loadProficiencies', {
                url: null
            });
        },
        mounted() {
        },
        watch: {
            deleteProficiencyLoadStatus: function() {
                let vm = this;
                
                if(vm.deleteProficiencyLoadStatus == 3 && vm.deleteProficiencyResult.success == 0) {
                    Message({
                        type: 'warning',
                        message: vm.deleteProficiencyResult.message
                    });
                } else if(vm.deleteProficiencyLoadStatus == 2 && vm.deleteProficiencyResult.success == 1) {
                    //reload Proficiencies
                    this.$store.dispatch('loadProficiencies', {
                        url: null
                    });
                    Message({
                        type: 'success',
                        message: vm.deleteProficiencyResult.message
                    });
                } 
            },
            proficiencyLoadStatus: function(val) {
                if(val == 2) {
                    
                }
            }
        },
        methods: {
            deleteProficiency(id) {
                if(confirm('Are you sure?')) {
                    this.$store.dispatch('deleteProficiency', {
                        id: id
                    });
                }
            },
            getProficiencies(url) {
                this.$store.dispatch('loadProficiencies', {
                    url: url
                });
            }
        }
    }
</script>