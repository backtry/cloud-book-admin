<template>
    <div class="container">
        <div class="title">
            <h1>{{title.title}}</h1>
            <img :src="title.icon" class="title-img">
        </div>
        
        <div class="">
            <el-table
                :data="bookData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                    prop="title"
                    label="书名"
                    width="180">
                </el-table-column>

                <el-table-column label="头图" width="300px">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" alt="" class="bookimage">    
                    </template>
                </el-table-column>

                <el-table-column
                    prop="author"
                    label="作者"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="desc"
                    label="简介"
                    width="500px" class-name="desc">
                </el-table-column>
                <el-table-column label="操作" width="500px">
                    <template slot-scope="scope">
                        <el-button round @click="wiperadd(scope.row._id)" >生成轮播图</el-button>
                        <el-button type='primary'  @click="handlebookchange(scope.row._id)">修改图书</el-button>
                        <el-button type="danger"  @click="handlebookdelete(scope.row._id)" >删除图书</el-button>    
                    </template>
                </el-table-column>
            </el-table>
        </div> 
    </div>                      
</template>
<script>
export default {
    name:'bookclaeditor',
    data(){
        return{
            bookData:[],
            title:'',
            bookEditor:[],
            swiper:{
                title:'',
                img:'',
                book:''
            }
        }
    },
    methods:{
        getData(){
            const id = this.$route.query.id
            this.$axios.get(`/category/${id}/books`,{pn:1,size:100}).then(res=>{
                // console.log(res)
                this.bookData=res.data.books
                    // console.log(this.bookData)
                this.title=res.data
            })
        },
        // getbookData(){
        //     for(let i=0;i<this.bookData.length;i++){
        //         this.$axios.get(`/book/${this.bookData[i]}`).then(res=>{
        //             console.log(res)
        //             this.bookEditor[i]=res.data
        //             console.log(this.bookEditor)
        //         })
        //     }
        // },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        },
        handlebookchange(id){
          this.$router.push({name:'bookchange',query:{id}})
        },
        handlebookdelete(id){
             this.$confirm('确定要删除该图书吗？','提示',{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
            //     this.$axios.delete(`/book/${id}`).then(res=>{
            //     if(res.code==200){
            //         this.$message.success('删除成功')    
            //     }
            // })
                    this.$message.success('删除成功，其实并没有，看你自己写的代码')
            }).catch(()=>{  
                this.$message({
                    type: 'info',
                    message: '取消删除'
                });
            })     
        },
        wiperadd(id){
            let _self=this
            this.$axios.get(`/book/${id}`).then(res=>{
                // console.log(res)
                this.swiper.title=res.data.title
                this.swiper.img=res.data.img
                this.swiper.book=res.data._id
                // console.log(this.swiper)
            }).then(res=>{
                this.$axios.post('/swiper',_self.swiper).then(res=>{
                if(res.code==200){
                    this.$message.success('生成轮播图成功')
                }
            })
            })    
        }
    },
    created(){
        this.getData()
    },
    // watch:{
    //     bookData:{
    //         handler(){
    //             this.getbookData()
    //         }            
    //     }
    // }    
}
</script>
<style lang="scss" scoped>
    .el-table .warning-row {
        background: oldlace;
  }

  .el-table .success-row {
        background: #f0f9eb;
  }
  .title-img{
      height: 200px;
      
  }
  .bookimage{
      height: 100px;
  }
  .desc{
      height: 200px;
  }
</style>
