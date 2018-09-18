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
       <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-button size="small" @click="getbookdata(scope.row._id)">分类图书</el-button>
            <el-button size="small" type="primary" @click="changecla(scope.row._id)">
              编辑
            </el-button>
            <el-button  size="small" type="danger" @click="deletecla(scope.row._id)">
              删除分类
            </el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- <el-pagination
        background
        
        layout="prev, pager, next"
        current-change='changepage'
        :total="bookcla.length">
    </el-pagination> -->
    </div>
</template>
<script>
export default {
    nam:'bookcla',
    data(){
        return{
            bookcla:[],
            page:1,
            
        }
    },
    methods:{
        getdata(){
            this.$axios.get('/category',{pn:this.page}).then(res=>{
                console.log(res)
                this.bookcla=res.data
                
            })
        },
        getbookdata(id){
            this.$router.push({name:'bookclaeditor', query: {id} })
        },
        changecla(id){
            this.$router.push({name:'bookEditor', query: {id} })
        },
        deletecla(id){
            this.$confirm('确定要删除该分类吗？','提示',{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
            //     this.$axios.delete(`/category/${id}`).then(res=>{
            //     if(res.code==200){
            //         this.$message.success('删除成功')    
            //     }
            // })

                setTimeout(()=>{
                    this.$message.success('假装成功，代码要改')
                },1000)
                    
            }).catch(()=>{
                this.$message({
                    type: 'info',
                    message: '取消删除'
                });
            })
        },
        changepage(page){
            this.page=page
            this.getdata()
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
