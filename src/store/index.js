import { createStore } from 'vuex'

export default createStore({
  state: {
    msg:"Vuex desde cero.",
    nombre: "Reinier",
    apellido : "Diaz",
    amigos:[],
    amigo:null
  },
  getters: {
    message(state){
      return state.msg;
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`;
    }
  },
  mutations: {
    addAmigo(state){
      state.amigos = [...state.amigos,state.amigo]
    }
  },
  actions: {
    addAmigoAction(context){
      context.commit('addAmigo');
    }
  },
  modules: {
  }
})
