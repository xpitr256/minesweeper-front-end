<template>
    <div class="btn-group" role="group">
        <Cell :x=rowNumber :y=0 :is-uncovered=uncoveredStatuses[0] />
        <Cell :x=rowNumber :y=1 :is-uncovered=uncoveredStatuses[1] />
        <Cell :x=rowNumber :y=2 :is-uncovered=uncoveredStatuses[2] />
        <Cell :x=rowNumber :y=3 :is-uncovered=uncoveredStatuses[3] />
        <Cell :x=rowNumber :y=4 :is-uncovered=uncoveredStatuses[4] />
        <Cell :x=rowNumber :y=5 :is-uncovered=uncoveredStatuses[5] />
        <Cell :x=rowNumber :y=6 :is-uncovered=uncoveredStatuses[6] />
        <Cell :x=rowNumber :y=7 :is-uncovered=uncoveredStatuses[7] />
    </div>
</template>

<script>

  import Cell from "./Cell";

  export default {
    name: "CellRow",
    components: {Cell},
    props:{
      rowNumber: Number,
      cellAmount: Number,
      uncoveredPositions: Array,
    },
    data () {
      return {
        uncoveredStatuses: []
      }
    },
    methods: {
      setAllRowAsCovered: function() {
        this.uncoveredStatuses = [];
        for (let i = 0; i < this.cellAmount; i++) {
          this.uncoveredStatuses.push(false);
        }
      },
      updateUncoveredPositions: function () {

        let myUncoveredPositions = this.uncoveredPositions.filter((uncoveredPosition) => {
          return uncoveredPosition.x === this.rowNumber;
        });

        if (myUncoveredPositions.length > 0) {
          myUncoveredPositions.forEach((uncoveredPosition) => {
            this.uncoveredStatuses[uncoveredPosition.y] = true;
          });
        } else {
          this.setAllRowAsCovered();
        }

        this.uncoveredStatuses = this.uncoveredStatuses.map(uncoveredStatus => uncoveredStatus);
      }
    },
    created: function () {
      // TODO dynamically create each Cell instance until cellAmount value
      this.setAllRowAsCovered();
    },
    watch:{
        'uncoveredPositions': function() {
          this.updateUncoveredPositions();
        }
    }
  }
</script>

<style scoped>

</style>
