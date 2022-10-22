<template>
    <div>
        <div v-if='$store.state.films.loading'>Загрузка</div>
        <div v-else-if='$store.state.films.error'>Ошибка</div>
        <FilmsList v-else/>
        <Pagination />
    </div>
</template>

<script>
import FilmsList from '@/components/Catalog/FilmsList.vue'
import Pagination from '@/components/Catalog/Pagination.vue'
export default {
    name: 'Catalog',
    components: {
        FilmsList,
        Pagination
    },
    data() {
        return {
            error: false,
            loading: true
        }
    },
     methods: {
        fetchFilms() {
            this.$store.dispatch('films/FETCH_FILMS')
        }
    },
    mounted() {
        this.fetchFilms()
    }
}
</script>

<style>

</style>