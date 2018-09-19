<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :data= upload>
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<style scoped>
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
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    props:{
        value:{
            type:String
        }
    },
    data() {
      return {
        imageUrl: '',
        upload:{
                token:''
            }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      getToken(){
        this.$axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.upload.token = res.data
        })
      }
    },
    created(){
      this.getToken()
    },
    watch:{
        // imageUrl:{
        //    handler(){
        //        this.value=this.imageUrl
        //    }
        // }
        value(vla){
            this.imageUrl=val
        }
    }
  }
</script>