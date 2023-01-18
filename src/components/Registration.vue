<template>
    <div class='registration'>
        <div class='registration-form'>
            <div class='title'>Registration</div>
            <div>Sorry, its not working)))</div>
            <router-link to='/login'>
                <el-button  class='back' type='warning' link bg='true'>Back</el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Registration'
}
</script>

<style lang='sass' scoped>
.registration
    min-height: calc(100vh - 65px)
    display: flex
    align-items: center   
    .registration-form
        width: 500px
        height: 500px
        margin: 0 auto
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        border: solid 2px grey
        border-radius: 20px
        .title
            font-size: 36px
            margin: 15px 0 15px 
        .back
            margin: 133px 0 0 0 
</style>