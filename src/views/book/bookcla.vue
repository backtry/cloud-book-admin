<template>
    <div>
        <el-table
      :data="bookcla"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="分类名"
        width="420">
      </el-table-column>
      <el-table-column
          prop="desc"
          label="分类图标"
          width="420"
          >
          <template slot-scope="scope" class="userheard">
            <img :src="scope.row.icon" class="bookcla-img">
          </template>
        </el-table-column>
      <el-table-column
        prop="index"
        label="分类排序"
        width="420">
      </el-table-column>
       <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="changecla(scope.row._id)">
              编辑
            </el-button>
            <el-button  size="small" type="danger" @click="deletecla(scope.row._id)">
              删除分类
            </el-button>
          </template>
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
    nam:'bookcla',
    data(){
        return{
            bookcla:[]
        }
    },
    methods:{
        getdata(){
            this.$axios.get('/category').then(res=>{
                console.log(res)
                this.bookcla=res.data
            })
        },
        changecla(id){
            this.$router.push({name: 'bookEditor', query: {id}})
        },
        deletecla(id){
            
        }
    },
    created(){
        this.getdata()
    }
}
</script>
<style lang="scss" scoped>


    .bookcla-img{
        width: 50px;
        height: 50px;
    }

</style>
