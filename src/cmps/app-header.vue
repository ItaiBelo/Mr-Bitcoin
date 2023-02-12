<template>
    <section  class="app-header">
        <span >
            <RouterLink to="/">
            <img  class="app-header-logo" src="../assets/images/logo.png" alt="">
        </RouterLink>
    </span>
        <nav class="links-nav ">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>