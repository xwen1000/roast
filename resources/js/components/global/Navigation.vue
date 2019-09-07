<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Roast</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                     <router-link class="nav-link" :to="{ name: 'cafes' }">
                        Cafes
                    </router-link>
                </li>
            </ul>
            <span class="navbar-text">
            aaa
            </span>
        </div>
    </nav>
        
</template>

<script>
export default {
        // computed: {
        //     userLoadStatus(){
        //         // return this.$store.getters.getUserLoadStatus;
        //     },
        //     user(){
        //         // return this.$store.getters.getUser;
        //     }
        // }
}
</script>

<style scoped>

</style>