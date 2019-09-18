<template>
    <div id="app">
        <router-view name="header"/>
        <router-view></router-view>
        <router-view name="footer"/>
    </div>
</template>

<script>
    export default {
        components: {

        },
        created() {
            
        }
    }
</script>