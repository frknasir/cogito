<template>
    <div id="app">
        <router-view name="header"/>
        <div id="wrapper">
            <router-view></router-view>
        </div>
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