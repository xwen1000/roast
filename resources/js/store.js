require('es6-promise').polyfill()

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

import { cafes } from './modules/cafes.js'
import {brewMethods} from './modules/brewMethods';

export default new Vuex.Store({
    modules: {
        cafes,
        brewMethods
    }
})