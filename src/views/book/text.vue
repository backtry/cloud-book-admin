<template>
  <div>
    <uploadimg @change="getdataimg"></uploadimg>
   
  </div>  
</template>
<script>
export default {
  data(){
    return{
      img:''
    }
  },
  methods:{
    getdata(url){
      this.img=url
      console.log(this.img)
    }
  },
  created(){
    this.getdata()
  }
}
</script>
<style lang="scss" scoped>

</style>
