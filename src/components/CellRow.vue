<template>
    <div class="btn-group" role="group">
        <Cell :x="rowNumber" y="0" />
        <Cell :x="rowNumber" y="1" />
        <Cell :x="rowNumber" y="2" />
        <Cell :x="rowNumber" y="3" />
        <Cell :x="rowNumber" y="4" />
        <Cell :x="rowNumber" y="5" />
        <Cell :x="rowNumber" y="6" />
        <Cell :x="rowNumber" y="7" />
    </div>
</template>

<script>

  import Cell from "./Cell";

  export default {
    name: "CellRow",
    components: {Cell},
    props:{
      rowNumber: Number,
      cellAmount: Number
    },
    created: function () {
      // TODO dynamically created each Cell instance until cellAmount value
    }
  }
</script>

<style scoped>

</style>
