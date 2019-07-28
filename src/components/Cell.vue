<template>
    <button type="button"
            class="btn btn-primary"
            v-on:click="reveal"
            :disabled="isUncovered"></button>
</template>

<script>
  export default {
    name: "Cell",
    props: {
      x: Number,
      y: Number,
      isUncovered: Boolean
    },
    methods: {
      reveal: function(){
        this.$root.$emit('cellRevealed',{x: this.x, y:this.y});
      }
    }
  }
</script>

<style scoped>

</style>
