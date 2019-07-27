<template>

  <div id="app" class="container">

      <Header />

      <div class="row">

        <Menu />

        <Board />

        <References />

      </div>

  </div>

</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Board from './components/Board.vue'
import References from './components/References.vue'

export default {
  name: 'app',
  components: {
    Header,
    Menu,
    Board,
    References
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
