<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row justify-content-end">
        <button class="btn btn-success mt-3" @click="$bvModal.show('ModalPet')">
          Create new
        </button>
      </div>
      <div class="row">
        <PetCard
          v-for="(pet,index) in listPet"
          :key="index"
          :pet="pet"
        />
      </div>
      <ModalPet @updatePet="updateSubmit" />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PetCard from '~/components/pets/PetCard'
import ModalPet from '~/components/pets/ModalPet'
export default {
  components: {
    ModalPet,
    PetCard
  },
  computed: {
    ...mapState('pet', ['listPet'])
  },
  async asyncData ({ store }) {
    await Promise.all([
      store.dispatch('pet/getListPet')
    ])
  },
  methods: {
    updateSubmit (pet) {
      this.$store.dispatch('pet/createPet', pet)
    }
  }
}
</script>

<style scoped>

</style>
