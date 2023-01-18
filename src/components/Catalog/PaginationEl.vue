<template>
    <div>
        <el-pagination
            class='el-pagination'
            id='el-pagination'
            layout='prev, pager, next' 
            :page-size='pageSize' 
            :total='filmsCount' 
            v-model:current-page='currentPage'
        />
    </div>
</template>

<script> 
export default {
    name: 'PaginationEl',

    computed: {
        currentPage: {
            get() {
                return this.$store.state.films.page
            },
            set(value) {
                this.$store.commit('films/SET_CURRENT_PAGE', value)
                this.$store.dispatch('films/FETCH_FILMS')
                window.scrollTo({
                    top:0,
                    behavior: 'instant'
                    })
            }
        },
        filmsCount() {
            return this.$store.state.films.filmsCount
        },
        pageSize() {
            return this.$store.state.films.limit
        }
    }
}
</script>

<style lang='sass'>
div.el-pagination
    display: flex
    justify-content: center
    padding: 0 0 30px 0
    .el-pager li, .btn-next, .btn-prev
        background-color: transparent !important
        color: white
        font-size: 16px
    .el-pager 
        .more, .btn-quickprev, .el-icon
            color: white
    .btn-next, .is-last, .btn-prev, .is-first
        color: white !important
    
    

</style>