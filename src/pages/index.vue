<script>
import AppHeader from '@/app-header.vue'
import AppFooter from '@/app-footer.vue'
export default {
  components: { AppHeader, AppFooter },
  
}
</script>

<template>
    <app-header/>
    <main>
        <router-view/>
    </main>
    <app-footer/>
</template>

<style>

</style>