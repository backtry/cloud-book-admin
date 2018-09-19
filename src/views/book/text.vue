<template>
  <div>
    <uploadimg @change="getdata"></uploadimg>
  </div>  
</template>
<script>
export default {
  name:'text',
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
  
}
</script>
<style lang="scss" scoped>

</style>
