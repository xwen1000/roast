import BrewMethodAPI from '../api/brewMethod.js';
export const brewMethods = {
    state: {
        brewMethods: [],
        brewMethodsLoadStatus: 0
    },
    actions: {
        loadBrewMethods({commit}) {
            commit('setBrewMethodsLoadStatus', 1);
            BrewMethodAPI.getBrewMethods()
                .then(function (response) {
                    commit('setBrewMethods', response.data);
                    commit('setBrewMethodsLoadStatus', 2);
                })
                .catch(function () {
                    commit('setBrewMethods', []);
                    commit('setBrewMethodsLoadStatus', 3);
                });
        }
    },
    mutations: {
        setBrewMethodsLoadStatus(state, status) {
            state.brewMethodsLoadStatus = status;
        },
        setBrewMethods(state, brewMethods) {
            state.brewMethods = brewMethods;
        }
    },
    getters: {
        getBrewMethods(state) {
            return state.brewMethods;
        },
        getBrewMethodsLoadStatus(state) {
            return state.brewMethodsLoadStatus;
        }
    }
}
