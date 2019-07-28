import Vue from 'vue'

const baseDomain = 'http://localhost:3000';

export default {

  async getGameStatus() {
    let response = await Vue.http.get(baseDomain+'/game');
    return response.body;
  },

  async createNewGame() {
    let response = await Vue.http.get(baseDomain+'/createGame');
    return response.body;
  },

  async createTestGame() {
    let response = await Vue.http.get(baseDomain+'/createTestGame');
    return response.body;
  },

  async revealPosition(position) {
    let response = await Vue.http.post(baseDomain+'/revealPosition', position, {
      emulateJSON: true
    });
    return response.body;
  }
}
