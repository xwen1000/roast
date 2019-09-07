<template>
    <div id="app-layout">
        <navigation></navigation>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Navigation from '../components/global/Navigation.vue';
export default {
    components: {
        Navigation
    },
    created(){
        this.$store.dispatch( 'loadCafes' );
        this.$store.dispatch('loadBrewMethods');
        // this.$store.dispatch( 'loadUser' );
    }
}
</script>
<style scoped>

</style>