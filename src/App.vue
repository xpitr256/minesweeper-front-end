<template>
  <div id="app">

    <div class="container">

      <div class="row text-center mb-4">
        <div class="col-12">
          <h1>Welcome to minesweeper game!</h1>
        </div>
      </div>

      <div class="row">

        <div class="col text-center">
          <button type="button" class="btn btn-secondary btn-lg btn-block">Start a new Game!</button>
        </div>

        <div class="col text-center">
          <Board />
        </div>

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




      </div>
    </div>

  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
