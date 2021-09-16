<template>
  <div>
    <img :src="pet.thumbnail" alt="chưa có ảnh">
    <h3>{{ pet.name }}</h3>
    <p>{{ pet.des }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ store, params }) {
    console.log(params.id)

    const pet = await store.dispatch('pet/getPetById', params.id)
    console.log(pet)
    return { pet }
  }
}
</script>

<style scoped>

</style>
