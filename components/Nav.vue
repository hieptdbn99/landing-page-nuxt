<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding">
    <NuxtLink class="navbar-brand" to="/">
      Firengii
    </NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse ml-auto">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NuxtLink
            to="/products"
            class="nav-link"
          >
            Products
          </NuxtLink>
        </li>
        <li class="nav-item active">
          <NuxtLink
            to="/my-item"
            class="nav-link"
          >
            Items
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.padding {
  padding: 1.5rem!important;
  background-color: black;
}

.nav-left {
  margin-left: auto!important;
}
</style>
