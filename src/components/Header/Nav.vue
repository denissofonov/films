<template>
    <div class='buttons'>
        <router-link class='button' to='/'>Home</router-link>
        <router-link class='button' to='/catalog'>Catalog</router-link>
        <router-link class='button' to='/favorite'>Favorites</router-link>
        <el-button plain>Plain</el-button>
    </div>
</template>

<script>
export default {
    Name: 'Nav',
}
</script>

<style>
.buttons {
    padding: 15px;
    margin: 0 auto;
    width: 200px;
    gap: 20px;
    display: flex;
}
.button {
    color: aliceblue;
}

</style>