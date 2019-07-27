import Vue from 'vue'

export default {

  async getGameStatus() {
    let response = await Vue.http.get('http://localhost:3000/game');
    return response.body;
  },

  async createNewGame() {
    let response = await Vue.http.get('http://localhost:3000/createGame');
    return response.body;
  },

  async createTestGame() {
    let response = await Vue.http.get('http://localhost:3000/createTestGame');
    return response.body;
  }
}
