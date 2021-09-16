<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row justify-content-end">
        <button class="btn btn-success mt-3" @click="$bvModal.show('openModal')">
          Create new
        </button>
      </div>
      <LargeCardDisplay
        v-for="(cardInfo,index) in largeCardInfo"
        :key="index"
        :cards-section="cardInfo"
      />
      <SmallCardDisplay
        v-for="(cardInfo,index) in smallCardInfo"
        :key="index"
        :cards-section="cardInfo"
      />
      <ModalProduct @updateProduct="updateSubmit" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { largeCardSections, smallCardSections } from '~/assets/data.js'
import LargeCardDisplay from '~/components/LargeCardDisplay'
import SmallCardDisplay from '~/components/SmallCardDisplay'
import ModalProduct from '~/components/ModalProduct'

export default {
  components: { ModalProduct, LargeCardDisplay, SmallCardDisplay },
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    }
  },

  methods: {
    updateSubmit (product) {
      console.log(product)
      axios.post('https://first-nuxt-api-default-rtdb.firebaseio.com/products.json', { product }).then((data) => {
        console.log(data)
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
