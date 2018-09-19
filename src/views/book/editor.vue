<template>
    <div>
        <div >
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/layout/bookcla'}">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>修改分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="changebefor">
            <el-form ref="form" label-width="80px">
                <el-form-item label="分类名">
                    <el-input v-model="form.title" class="title-input"></el-input>
                </el-form-item>
                <el-form-item label="分类头图">
                    <template slot-scope="scope">
                        <img :src="form.icon" class="bookimg">
                    </template>
                </el-form-item>
                <el-form-item label="分类排序">
                    <el-input-number v-model="form.index" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item >
                    <el-button type="danger" @click="handleclick">提交修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:'bookEditor',
    
    data(){
        return{
            form:{},
            changeform:{
                title:'',
                icon:'',
                index:''
            }
        }
    },
    methods:{
        getData(){
            const id = this.$route.query.id
            this.$axios.get(`/category/${id}`).then(res=>{
                console.log(res)
                this.form=res.data
            })
        },
        handleChange(value){
            this.sort=value
        },
        // handleclick(){
        //     let _self=this
        //     const id = this.$route.query.id
        //     this.$confirm('确定要修改该分类吗？','提示',{
        //         confirmButtonText:"确定",
        //         cancelButtonText:'取消',
        //         type:'warning'
        //     }).then(()=>{
        //         _self.changeform.title=_self.form.title
        //         _self.changeform.icon=_self.form.icon
        //         _self.changeform.index=_self.form.index
        //         _self.$axios.put(`/category/${id}`,_self.changeform).then(res=>{
        //         if(res.code==200){
        //             _self.$message.success('修改成功')    
        //         }
        //     })
        //     }).catch(()=>{
        //         this.$message({
        //             type: 'info',
        //             message: '取消修改'
        //         });
        //     })
            
        // },
         handleclick(){
            const id = this.$route.query.id
            this.$confirm('确定要修改该分类吗？','提示',{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                this.$axios.put(`/category/${id}`,this.form).then(res=>{
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
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
    .changebefor{
        width: 50%
    }
    .title-input{
        width: 200px;
    }
    .bookimg{
        width: 150px;
        height: 150px;
    }
</style>
