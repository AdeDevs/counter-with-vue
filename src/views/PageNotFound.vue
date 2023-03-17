<template>
    <div class="error">
        <h1>Page not found!</h1>
        <p>Return <router-link to="/">Home</router-link> </p>
    </div>
</template>

<script>
export default {
    name: "PageNotFound",
}
</script>

<style>
@import '../styles/error.css'
</style>