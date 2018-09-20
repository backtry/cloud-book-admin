<template>
    <div class="container">
        <h1>修改书籍</h1>
        <el-form ref="bookdata" :model="bookdata" label-width="80px">
            <el-form-item label="书名">
                <template slot-scope="scope">
                    <h2>{{bookdata.title}}</h2>    
                </template>
            </el-form-item>
            <el-form-item label="书面头图">
                <template slot-scope="scope">
                    <img :src="bookdata.img" alt="">
                     <uploadimg v-model="bookdata.img" @change="getdataimg"></uploadimg>
                    
                </template>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="bookdata.author"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input type="textarea" v-model="bookdata.desc"></el-input>
            </el-form-item>
            <el-form-item label="排序">
                <el-input-number v-model="bookdata.index" @change="handleChange" :min="1" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changebook">修改图书</el-button>
            </el-form-item>
        </el-form>
    </div>    
</template>
<script>
export default {
    name:'bookchange',
    data(){
        return{
            bookdata:{
                book_id:'',
                title:'',
                index:'',
                desc:'',
                author:'',
                img:'',
                type:'',
            }
        }
    },
    methods:{
        getdataimg(url){
            this.bookdata.img
        },
        getData(){
            const id = this.$route.query.id
             
            this.$axios.get(`/book/${id}`).then(res=>{
                console.log(res)
                this.bookdata=res.data
                this.bookdata.book_id=res.data._id
            })
        },
        changebook(){
            let _self = this
            this.$confirm('确定要修改该图书吗？','提示',{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                
                _self.$axios.put(`/book`,_self.bookdata).then(res=>{
                if(res.code==200){
                    this.$message.success('修改成功')    
                }
            })
            }).catch(()=>{  
                this.$message({
                    type: 'info',
                    message: '取消修改'
                });
            })    
        },
        handleChange(value) {
        
      }
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>

</style>
