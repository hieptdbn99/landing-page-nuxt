<template>
  <div class="item-container">
    <img :src="require(`@/assets/images/${item.image}`)" alt="">
    <div class="text-container">
      <NuxtLink
        :to="`/products/${item.id}`"
      >
        <h4>
          {{ item.title }}
        </h4>
      </nuxtlink>
      <p> {{ item.snippet }} </p>
      <button @click="$store.commit('removeItem',item.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapMutations(['removeItem'])
  }
}
</script>

<style scoped>
.item-container {
  display: flex;
  margin: 3rem 0
}
.text-container {
  padding: 0 1rem
}
img {
  width: 17.5rem;
  border-radius: 0.5rem;
  height: 11rem
}
p {
  font-size: 0.8rem;
  color: grey
}
button {
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}
</style>
