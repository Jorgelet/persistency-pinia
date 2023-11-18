// Puedo hacerlo de estas dos formas

//import { defineStore} from 'pinia'


// export const useCounterStore = defineStore('useCounterStore', {
//   state: () => {
//     return {
//       count : 1
//     }
//   },
//   actions: {
//     init() {
//       const initCount = localStorage.getItem('count')
//       if (initCount) {
//         this.count = parseInt(initCount)
//       }
//     },
//     increment(val = 1) {
//       this.count += val
//       localStorage.setItem('count', this.count.toString())
//     }
//   }
// })


import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}, {
  persist: true
})
