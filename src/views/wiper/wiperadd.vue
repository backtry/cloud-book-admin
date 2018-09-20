<template>
    <div class="swiper-add-box">
        <h2>添加轮播图</h2>
        <el-form >
            <el-form-item label="轮播图标题" class="swiper-title">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="轮播图分类">
                <el-select v-model="formData.category" placeholder="请选择分类" @change="pickBook">
                    <el-option v-for="(item,index) in bookcaldata" :key="index" :label="item.title" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="轮播图书籍" v-if="isShowBooktable">
                <!-- <el-button type="primary" @click="pickBook" v-if="!isShowDialog&&!isShowBooktable">选择书籍</el-button> -->

                <div v-if="isShowBooktable" class="book-box-text">
                    <div class="bookimg-box">
                        <img :src="getBookitem[0].img" class="bookimg">
                    </div>
                    <div class="bookmassage">
                        <p>书名：{{getBookitem[0].title}}</p>
                        <p>作者：{{getBookitem[0].author}}</p>
                    </div>
                </div>

                <!-- <el-table :data="bookdata" class="book-table" v-if="isShowBooktable">
                    <el-table-column label="书籍头图" width="200" class-name="book-image">
                        <template slot-scope="scope" >
                            <img :src="scope.row.img" class="book-img">
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="书名" width="180" class-name="book-text"></el-table-column>
                    <el-table-column prop="author" label="作者" width="180" class-name="book-text"></el-table-column>
                </el-table> -->
            </el-form-item>

            <el-form-item label="轮播图图片">
                <uploadimg @change="getdataimg"></uploadimg>
            </el-form-item>

            <el-form-item label="轮播图排序">
                <el-input-number v-model="formData.index" @change="handleChange" :min="1" ></el-input-number>    
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handlewiperadd">添加轮播图</el-button>
            </el-form-item>
        </el-form>


        <el-dialog title="请选择书籍" :visible.sync="isShowDialog">
            <el-table :data="bookdata">
                 <el-table-column label="书籍头图" width="200">
                    <template slot-scope="scope" >
                        <img :src="scope.row.img" class="book-img">
                    </template>
                </el-table-column>
                 <el-table-column prop="title" label="书名" width="180"></el-table-column>
                 <el-table-column prop="author" label="作者" width="180"></el-table-column>
                 <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="handleAddBook(scope.row._id)">
                        <!-- <el-button type="primary" size="small" > -->
                        添加
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>    
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'wiperadd',
    data(){
        return{
            formData:{
                title: '',
                img: '',
                book: '',
                index: '',
                category: ''
            },
            bookcaldata:[],
            bookdata:[],
            
            isShowDialog:false,
            isShowBooktable:false
        }
    },
    methods:{
        handlewiperadd(){
            this.$axios.post('/swiper',this.formData).then(res=>{
                if(res.code==200){
                    this.$message.success(res.msg)
                }
            })
        },
        getdataimg(event){
            this.formData.img=event
        },
        getBookcla(){
            this.$axios.get('/category').then(res=>{
                this.bookcaldata=res.data
            })
        },
        pickBook(){
            this.$axios.get(`/category/${this.formData.category}/books`).then(res=>{
                console.log(res.data)
                this.bookdata=res.data.books
                this.isShowBooktable=false
                this.isShowDialog=true
            })
        },
        handleAddBook(id){ //
            this.formData.book = id;

            console.log(this.bookdata)
            this.isShowBooktable=true;
            this.isShowDialog=false;
            // this.$axios.get(`/book${id}`).then(res=>{
            //     console.log(res)
            //  this.bookdataitem=res.data   
            // })
        },
        handleChange(value){
            this.formData.index=value
        }
    },
    computed:{
        getBookitem(){
           if(this.formData.book){
                return this.bookdata.filter(item => item._id==this.formData.book)
            }else{ 
                return [] //ruturn一个数组，此时getBookitem成为了一个数组
            }
        }
    },


    // computed: {
    //   async getBookItem() {
    //     if (this.formData.book) { 
    //       return this.bookdata.filter(item => item._id == this.formData.book);
          
    //     } else {
    //       return []
    //     }
    //     await console.log(this.bookdata)
    //   }
        
    // },
    created(){
        this.getBookcla()
        
    }
}
</script>
<style lang="scss" scoped>
    .swiper-add-box{
        width: 50vh;
        margin: 0 auto;
        
        h2{
            text-align: center;
        }

        .swiper-title{
            width: 400px;
        }
    }
    .book-img{
        height: 120px
    }
    .book-box-text{
        // padding-left: 85px;
        width: 450px;
        height: 210px;
        // background-color:skyblue;
    }
    .book-box-text{
        display: flex;
        justify-content: space-between;
        border: 1px solid #333;

        .bookimg-box{
            width: 50%;

            .bookimg{
                height: 210px;
            }
        }

        .bookmassage{
            margin-top: 20px;
            margin-right: 20px;

            p{
                font-size: 20px;
            }
        }
    }
</style>
