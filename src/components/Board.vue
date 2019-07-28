<template>
  <div class="col text-center">
      <CellRow rowNumber="0" cellAmount="8" /><br/>
      <CellRow rowNumber="1" cellAmount="8" /><br/>
      <CellRow rowNumber="2" cellAmount="8" /><br/>
      <CellRow rowNumber="3" cellAmount="8" /><br/>
      <CellRow rowNumber="4" cellAmount="8" /><br/>
      <CellRow rowNumber="5" cellAmount="8" /><br/>
      <CellRow rowNumber="6" cellAmount="8" /><br/>
      <CellRow rowNumber="7" cellAmount="8" />
  </div>
</template>

<script>

import CellRow from "./CellRow";

export default {
  name: 'Board',
  components: {CellRow},
  props: {
    uncoveredPositions: Array
  }
}
</script>

<style scoped>

</style>
