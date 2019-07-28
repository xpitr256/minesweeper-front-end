<template>
    <button type="button" class="btn btn-primary"></button>
</template>

<script>
  export default {
    name: "Cell",
    props:{
      x: Number,
      y: Number,
      isUncovered: Boolean
    }
  }
</script>

<style scoped>

</style>
