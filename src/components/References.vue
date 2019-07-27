<template>
    <div class="col">

        <h4>References:</h4>

        <div class="ml-2">

            <button type="button" class="btn btn-primary" disabled></button> = Revealed Cell
            <br/>
            <button type="button" class="btn btn-primary"></button> = Unrevealed Cell

            <div class="alert alert-info mt-3" role="alert">
                Only <strong>Unrevealed</strong> cells are clickable!
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "References"
  }
</script>

<style scoped>

</style>
