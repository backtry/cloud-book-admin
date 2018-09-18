<template>
    <div class="user-manage">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%" class="user-box">
        <el-table-column
          prop="nickname"
          label="姓名"
          width="130">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="日期"
          width="260">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="个性签名"
          width="500">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="用户头像"
          width="100"
          >
          <template slot-scope="scope" class="userheard">
            <img :src="scope.row.avatar" class="avatar">
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button @click="handleDetails" size="small" type="primary">
              查看详细
            </el-button>
            <el-button @click="handleDelete(scope.row._id)" size="small" type="danger">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="bottom-bar">
        <el-button class="adduser-btn" type="primary" @click="userAdd">
          添加管理员
        </el-button>
        <el-pagination
          background
          
          layout="prev, pager, next"
          @current-change='changepage'
          :total="count"
          class="paging">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [],
          page:1,
          count:0
        }
      },
      methods: {
        getData() {
          this.$axios.get('/user',{pn:this.page,size:7}).then(res => {
            console.log(res)
            this.count=res.count
            if(res.code == 200) {
              this.tableData = res.data
            }
          })
        },
        handleDetails() {
          this.$router.push('/layout/userDetails')
        },
        handleDelete(id) {
          this.$confirm('此操作将删除一位管理员, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/user/delete',{userIds: [id] }).then(res => {
              this.$message.success(res.msg)
              this.getData()
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        userAdd(){
          this.$router.push('/layout/useradd')
        },
        changepage(page){
            this.page=page
            this.getData()
        }
       
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
.user-manage {

  .user-box{
    
    .userheard{
       margin: 0 auto;
    }

      .avatar {
      width: 50px;
      height: 50px;
     
    }
  }
  .adduser-btn {
    margin-left: 100px;
  }
}
.bottom-bar{
  display: flex;

  .paging{
    margin-left: 650px
  }

  
}
</style>

