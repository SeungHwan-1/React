import {create} from "zustand";

const useStore = create((set)=>({
    count : 0,  // 상태로 사용할 값.

    
    increment : ()=> set((state) => ({count: state.count+1})),

    decrement : () => set((state) => ({count:state.count-1})),

    reset: () =>set({count:0})
}))
export default useStore;