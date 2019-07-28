<template>

  <div id="app" class="container">

      <Header />

      <div class="row">

        <Menu :status="status"/>

        <Board :uncovered-positions="uncoveredPositions"/>

        <References />

      </div>

  </div>

</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Board from './components/Board.vue'
import References from './components/References.vue'
import GameService from './services/GameService'


export default {
  name: 'app',
  components: {
    Header,
    Menu,
    Board,
    References
  },
  data() {
    return {
      uncoveredPositions: [],
      time: 0,
      status: ''
    }
  },
  created() {
    this.getGameStatus()
  },
  methods: {
    async getGameStatus() {
      try {
        let status = await GameService.getGameStatus();
        this.uncoveredPositions = status.uncoveredPositions;
        this.time = status.elapsedTimeInSeconds;
        this.status = status.status;
      } catch (error) {
        // TODO show notification error.
      }
    }
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
