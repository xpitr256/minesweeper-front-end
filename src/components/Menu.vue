<template>
    <div class="col text-center">

        <button type="button" class="btn btn-secondary btn-lg btn-block">Start a new Game!</button>
        <button type="button" class="btn btn-light btn-lg btn-block mt-3">Start test game</button>

        <div class="card mt-5">
            <div class="card-header">
                Game status
            </div>
            <div class="card-body">
                <h5 class="card-title">{{status}}</h5>
            </div>
        </div>

    </div>



</template>

<script>
  export default {
    name: "Menu",
    props: [
      'status'
    ]
  }
</script>

<style scoped>

</style>
