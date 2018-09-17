<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/layout/bookcla'}">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>修改分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-form ref="form" label-width="80px">
                <el-form-item label="分类名">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="分类头图">
                    <template slot-scope="scope" class="bookimg">
                        <img  >
                    </template>
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
            form:{
                name:''
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
