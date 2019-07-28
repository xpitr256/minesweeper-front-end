<template>
    <div class="col text-center">

        <button type="button" v-on:click="startNewGame" class="btn btn-secondary btn-lg btn-block">Start a new Game!</button>
        <button type="button" v-on:click="startTestGame" class="btn btn-light btn-lg btn-block mt-3">Start test game</button>

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

  import GameService from './../services/GameService'

  export default {
    name: "Menu",
    props: [
      'status'
    ],
    methods: {

      startNewGame: async function () {

          try {
            // TODO add confirmation modal first.
            // TODO activate waiting mode

            let response = await GameService.createNewGame();
            if (response.status === 'STARTED') {
              this.$emit('newGameStarted');
            }
            // TODO deactivate waiting mode

          } catch (error) {
            // TODO deactivate waiting mode
            // TODO show notification error.
          }
      },
      startTestGame: async function () {

        try {
          let testGameStatus = await GameService.createTestGame();
          if (testGameStatus.status === 'STARTED') {
            this.$emit('newGameStarted');
          }
        } catch (error) {
          //console.error(error)
        }
      }

    }
  }
</script>

<style scoped>

</style>
