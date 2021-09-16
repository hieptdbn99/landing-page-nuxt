import axios from 'axios'

export const state = () => ({
  listPet: []
})

export const mutations = {
  getListPet (state, pets) {
    state.listPet = pets
  }
}

export const actions = {
  async createPet ({ commit }, pet) {
    await axios.post('https://test-3cbea-default-rtdb.firebaseio.com/pets.json', pet)
  },
  async getListPet ({ commit }) {
    const response = await axios.get('https://test-3cbea-default-rtdb.firebaseio.com/pets.json')
    const listPet = []
    for (const pet in response.data) {
      listPet.push({ ...response.data[pet], id: pet })
    }
    commit('getListPet', listPet)
  },
  async getPetById ({ commit }, petId) {
    console.log(petId)
    const pet = await axios.get(`https://test-3cbea-default-rtdb.firebaseio.com/pets/${petId}.json`)
    return pet.data
  }
}
