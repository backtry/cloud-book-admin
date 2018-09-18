<template>
    <div class="container">
        <div class="title">
            <h1>{{title.title}}</h1>
            <img src="title.icon" class="title-img">
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
                        <img :src="bookData.img" alt="" class="bookimage">    
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
                    width="300px">
                </el-table-column>
                <el-table-column label="操作" width="300px">
                    <template slot-scope="scope">
                        <el-button type='primary'  @click="handlebookchange(scope.row._id)" >修改图书</el-button>    
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
            bookEditor:[]
        }
    },
    methods:{
        getData(){
            const id = this.$route.query.id
            this.$axios.get(`/category/${id}/books`,{pn:1,size:10}).then(res=>{
                console.log(res)
                this.bookData=res.data.books
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
</style>
