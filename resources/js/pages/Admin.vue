<style scoped>
</style>
<template>
    <el-container>
        <el-aside>
            <admin-navigation></admin-navigation>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
<script>
    import AdminNavigation from '../components/global/AdminNavigation.vue';
    export default {
        components: {
            AdminNavigation
        }
    }
</script>