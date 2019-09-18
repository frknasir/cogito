<style scoped>
</style>
<template>
    <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="/admin">
            <i class="el-icon-menu"></i>
            <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/admin/users">
            <i class="el-icon-document"></i>
            <span>Manage Users</span>
        </el-menu-item>
        <el-menu-item index="/admin/config">
            <i class="el-icon-document"></i>
            <span>Config</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>