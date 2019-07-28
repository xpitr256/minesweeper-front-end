<template>

  <div id="app" class="container">

      <Header />

      <div class="row">

        <Menu :status="status" @newGameStarted="getGameStatus"/>

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
    updateGameStatus(newGameStatus) {
      this.uncoveredPositions = newGameStatus.uncoveredPositions;
      this.time = newGameStatus.elapsedTimeInSeconds;
      this.status = newGameStatus.status;
      //TODO check game status and show a win / lost message
    },
    async getGameStatus() {
      try {
        let status = await GameService.getGameStatus();
        this.updateGameStatus(status);
      } catch (error) {
        // TODO show notification error.
      }
    }
  },
  mounted() {
    this.$root.$on('cellRevealed', async (position) => {
      if (this.status === 'STARTED') {
        let newGameStatus = await GameService.revealPosition(position);
        this.updateGameStatus(newGameStatus);
      }
    });
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
