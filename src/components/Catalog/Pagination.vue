<template>
    <div class='buttons'>
        <button 
        v-for='i in pageCount'
        :key='i'
        class='button'
        :class='{button_active: i === currentPage}'
        @click='setCurrentPage(i)'>
            {{ i }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    methods: {
        setCurrentPage(page) {
            this.$store.commit('films/SET_CURRENT_PAGE', page)
        }
    },
    computed: {
        pageCount() {
            const pages = [];
            const currentPage = this.currentPage;
            const pagesCount = this.$store.getters['films/GET_PAGE_COUNT']
            if (pagesCount > 10) {
                if (currentPage > 5) {
                    for (let i = currentPage - 5; i <= currentPage + 4; i++) {
                        pages.push(i)
                        if (i === pagesCount) break
                    }
                } else {
                    for (let i = 1; i <= 10; i++) {
                        pages.push(i)
                        if (i === pagesCount) break
                    }
                }
            } else {
                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i)
                }
            }
            return pages
        },
        currentPage() {
            return this.$store.state.films.page
        }
    },
    watch: {
        currentPage() {
            this.$store.dispatch('films/FETCH_FILMS')
        }
    }
}
</script>
<style>
.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 50px 0 20px 0;
}
.button_active {
    color: blueviolet;
}
</style>