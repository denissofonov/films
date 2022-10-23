<template>
    <el-pagination 
    layout='prev, pager, next, jumper' 
    :page-size='pageSize' 
    :total='filmsCount' 
    v-model:current-page='currentPage'
    />
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