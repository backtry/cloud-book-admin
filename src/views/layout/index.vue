<template>
    <div>
        <div class="header">云书后台管理系统</div>
        <div class="navMenu">
            <el-menu
            :router="true"
            background-color='#545c64'
            text-color="#fff"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">用户管理</template>
          <el-menu-item index="/layout/users">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'layout'
}
</script>
<style scoped lang="scss">
    .header{
        margin-left: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-weight: 400px;
        border: 1px solid #f1f1f1
    }
    .navMenu{
        width: 200px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #545c64;
        
    }
    .container{
        margin-left: 200px;
    }
</style>
