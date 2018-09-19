import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userInfo:{
            avator:'',
            desc:'',
            email:'',
            nickname:'',
            username:''
        }
    },
    mutations:{
        SET_INFO (state,info){
            state.userInfo = info
        }
    },
    actions:{

    },
    plugins:[

    ]
})

export default store