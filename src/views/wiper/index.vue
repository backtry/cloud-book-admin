<template>
    <div>
        <h1>我是轮播图，我想要数据</h1>
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <el-table
                :data="wiperdata"
                style="width: 100%">
                <el-table-column
                    prop="title"
                    label="名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="desc"
                    label="图片"
                    width="500px"
                     >
                    <template slot-scope="scope" class="userheard" >
                        <img :src="scope.row.img" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    
                    <el-button size="small" type="primary" @click="wiperChange(scope.row._id)">
                    修改轮播图
                    </el-button>
                    <el-button  size="small" type="danger" @click="deletewiper(scope.row._id)">
                    删除该轮播图
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>    
</template>
<script>
export default {
    name:'wiper',
    data(){
        return{
            wiperdata:[]
        }
    },
    methods:{
        getData(){
            this.$axios.get('/swiper',{pn:1,size:10}).then(res=>{
                console.log(res)
                this.wiperdata=res.data
            })
        },
        wiperChange(id){
            this.$router.push({name:'wiperchange',query:{id}})
        },
        deletewiper(id){

        }
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .avatar{
    //   width: 500px;
      height: 150px;
  }
</style>
