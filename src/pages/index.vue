<template>
<app-header/>
<router-view/>
<app-footer/>
</template>

<script>
import AppFooter from '../cmps/app-footer.vue'
import appHeader from '../cmps/app-header.vue'
export default {
  components: { appHeader, AppFooter },

}
</script>

<style>

</style>