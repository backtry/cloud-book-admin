<template>
    <div class="container">
        <h1 class="title">欢迎来到cloud-book后台管理平台</h1>
        <div class="login-box">
            <h2 class="login-box-title">请登陆</h2>
            <el-form class="form">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type="primary"  @click="hanlelogin" class="login-btn" :loading='isLoading'>登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            formData:{
                username:'',
                password:''
            },
            isLoading:false
        }
    },
    methods:{
        hanlelogin(){
            this.isLoading=true
            this.$axios.post('/login',this.formData).then(res=>{
                console.log(res)
                if(res.code==200){
                    this.$message.success('登陆成功')
                    setTimeout(()=>{
                         this.$router.push('/layout/index')
                    },1000)
                }else{
                    this.$message.error('登陆失败');
                }
                this.isLoading=false
            }).catch(err=>{
                this.isLoading=false
            })
        }
    }
}
</script>
<style scoped lang='scss'>
.container{
    height: 100vh;
    background-color: #545c64;
    overflow: hidden;

    .title{
        margin-top: 150px;
        text-align: center;
        color:#fff;
        font-weight: 400px
    }

    .login-box{
        width: 400px;
        height: 300px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        padding: 40px;
        margin: 20px auto 0 ;

        .login-box-title{
            color: #333;
            font-weight: 400px;
            text-align: center
        }
        
        .form{
            margin-top: 20px
        }
    }

    .login-btn{
            width: 100%;
            box-sizing: border-box
        }
    
}
</style>
