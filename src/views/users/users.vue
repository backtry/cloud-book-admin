<template>
    <div>
       <el-table
 
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
    name:'users',
    methods:{
        getData(){
            this.$axios.get('/user').then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>
<style scoped>

</style>
