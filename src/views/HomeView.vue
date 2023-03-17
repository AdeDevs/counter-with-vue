<template>
  <div>
      <h1 class="dummy">NAVIGATE TO THE NEXT PAGE</h1>
      <h1>This is just dummy text</h1>
      <div class="dummy-box">
      <p class="dummy">{{ dummyText }}</p>
      <p class="dummy">{{ dummyText }}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  data() {
    return {
      dummyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus ut atque exercitationem consectetur distinctio, aperiam ipsum blanditiis. Suscipit blanditiis quos doloribus obcaecati cumque architecto quo facere quae vel dolorum. Facere, aliquid voluptate corrupti enim nihil minus iste quidem minima."
    }
  }
}
</script>

<style scoped>
@import '../styles/home.css'
</style>