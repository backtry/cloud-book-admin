<template>
    <div class="box">
        <div class="adduser-box">
        <el-form
           
        >
            <el-form-item label="姓名">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item label="在次确认密码">
                <el-input v-model="formData.passwordconfirm"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="formData.nickname"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="头像">
                <uploadimg @change="getdataimg"></uploadimg>    
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input v-model="formData.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addUser">添加管理员</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div> 
</template>
<script>
export default {
    name:'useradd',
    data(){
        return{
             
        upload:{
                token:''
            },
        formData:{
            username:'',
            password:'',
            nickname:'',
            email:'',
            desc:'',
            avatar:'',
            }
        }
    },
    methods:{
        getdataimg(url){
            this.formData.avatar=url
        },
        addUser(){
            let _self=this
            if(_self.formData.password!=_self.formData.passwordconfirm){
                this.$message.error('两次输入密码不一致')    
            }else{
                this.$axios.post('/user',_self.formData,).then(res=>{
                if(res.code==200){
                    this.$message.success('管理员添加成功')
                }
            })
            }
        },
    },
    created(){
        this.getToken()
    }
}
</script>
<style lang="scss" scoped>
    .box{
        background-color: #5ea279;
        width: 100%;
        height: 100vh;
        padding-top: 50px;

            .adduser-box{
                width: 720px;
                height: 840px;
                background-color: #fff;
                border: 1px solid #e8e8e8;
                border-radius: 6px;
                padding: 40px;
                margin: 20px auto 0 
        }
    }
    

    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 124px;
    height: 124px;
    display: block;
  }

</style>
