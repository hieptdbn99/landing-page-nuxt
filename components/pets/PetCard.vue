<template>
  <div class="col-sm-6">
    <div class="card">
      <img class="image w-100" :src="pet.thumbnail" alt="chưa có ảnh">
      <div>
        <NuxtLink :to="`/pets/${pet.id}`">
          <h4>{{ pet.name }}</h4>
        </NuxtLink>

        <p> {{ pet.des }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: Object
  }
}
</script>

<style scoped>

</style>
