<template>
    <div>
        <h1>修改轮播图</h1>
        <uploadimg></uploadimg>
    </div>    
</template>
<script>
export default {
    name:'wiperchange',
    methods:{
        getwiperdata(){
            const id = this.$route.query.id
            this.$axios.get(`swiper/${id}`).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getwiperdata()
    }
}
</script>
<style lang="scss" scoped>

</style>
