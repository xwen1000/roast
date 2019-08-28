<template>
    <div>
        <nav class="top-navigation">
            <router-link :to="{ name: 'home'}">
                <span class="logo">Roast</span>
            </router-link>
            <ul class="links">
            <li>
                <router-link :to="{ name: 'cafes' }">
                    Cafes
                </router-link>
            </li>
        </ul>
        <div class="right">
            <img class="avatar" :src="user.avatar" v-show="userLoadStatus == 2"/>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
        computed: {
            userLoadStatus(){
                return this.$store.getters.getUserLoadStatus;
            },
            user(){
                return this.$store.getters.getUser;
            }
        }
}
</script>

<style scoped>

</style>