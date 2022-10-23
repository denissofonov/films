<template>
    <div class='buttons'>
        <el-button type='' text>
            <router-link class='button' to='/'>Home</router-link>
        </el-button>
        <el-button type='' text>
            <router-link class='button' to='/catalog'>Catalog</router-link>
        </el-button>
        <el-button type='' text>
            <router-link class='button' to='/favorite'>Favorites</router-link>
        </el-button>
    </div>
    </template>
<script>

export default {
    Name: 'Nav'
}
</script>

<style>
.buttons {
    padding: 15px;
    margin: 0 auto;
    width: 100vh;
    gap: 20px;
    display: flex;
}
.button {
    color:rgb(60, 59, 59);
    font-size: 16px;

}

</style>