<template>
  <div>
    <h3>Customer review</h3>
    <ReviewCard
      v-for="reviewer in reviewers.results"
      :key="reviewer.login.uuid"
      :reviewer="reviewer"
    />
  </div>
</template>

<script>
import ReviewCard from '~/components/ReviewCard'
export default {
  components: { ReviewCard },
  data () {
    return {
      reviewers: []
    }
  },
  async fetch () {
    this.reviewers = await fetch(
      'https://randomuser.me/api/?results=5'
    ).then(res => res.json())
  }
}
</script>

<style scoped>

</style>
