<template>
  <div class="col text-center">
      <CellRow :row-number=0 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=1 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=2 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=3 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=4 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=5 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=6 :cell-amount=8 :uncovered-positions="uncoveredPositions" /><br/>
      <CellRow :row-number=7 :cell-amount=8 :uncovered-positions="uncoveredPositions" />
  </div>
</template>

<script>

import CellRow from "./CellRow";

export default {
  name: 'Board',
  components: {CellRow},
  props: {
    uncoveredPositions: Array
  },
  created: function () {
    // TODO dynamically create each CellRow instance.
  }
}
</script>

<style scoped>

</style>
