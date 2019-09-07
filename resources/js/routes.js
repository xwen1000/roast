import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

export default new VueRouter({
    routes: [
         {
            path: '/',
            name: 'layout',
            components: Vue.component( 'Home', require( './pages/Layout.vue' ) ),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    components: Vue.component( 'Home', require( './pages/Home.vue' ) )
                },
                {
                    path: 'cafes',
                    name: 'cafes',
                    components: Vue.component( 'Cafes', require( './pages/Cafes.vue' ) ),
                },
                {
                    path: 'cafes/new',
                    name: 'newcafe',
                    components: Vue.component( 'NewCafe', require( './pages/NewCafe.vue' ) )
                },
                {
                    path: 'cafes/:id',
                    name: 'cafe',
                    components: Vue.component( 'Cafe', require( './pages/Cafe.vue' ) )
                }
            ]
        }
    ]
})