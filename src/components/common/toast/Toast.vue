<template>
  <div class="toast">
      <div class="message" v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    props:{
        // message:{
        //     type:String,
        //     default(){
        //         return ''
        //     }
        // },
        // isShow:{
        //     type:Boolean,
        //     default(){
        //         return false
        //     }
        // }
        
    },
    data(){
        return {
            message:'',
            isShow: false
        }
    },
    methods:{
        show(message,duration){
            this.isShow = true
            this.message = message

            setTimeout(() => {
                this.isShow = false
                this.message = message
            }, duration);
        }
    }
}
</script>

<style scoped>
.message {
  padding: 8px 10px;
  position: fixed;
  top: 50%;
  right: 50%;
  color: white;
  transform: translate(50%);
  background-color: rgba(0, 0, 0, .4);
  z-index: 999;
}
</style>