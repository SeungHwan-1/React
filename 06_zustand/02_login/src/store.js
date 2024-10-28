import {create} from "zustand";

const userAuthStore = create((set)=>({

    isLogin: false,  // 로그인 상태
    username:'',     // 로그인한 사용자 이름

    login : (username)=> set({isLogin:true, username}),

    logout: ()=> set({isLogin:false, username:''})


}))
export default userAuthStore;