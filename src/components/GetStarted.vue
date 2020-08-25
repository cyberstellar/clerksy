<script setup>

</script>

<template>
  <section class="get-started">
    <div class="container">
      <h2>Get Started With Clerksy</h2>
      <p>Make sure your business puts people first.</p>
      <a href="https://clerksy.co/contact" target="_blank" class="btn-link">Book a Free Discovery Call</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  color: var(--color-white);
  text-align: center;

  background: url("@/assets/images/vegetation-left.svg") no-repeat bottom left,
  url("@/assets/images/vegetation-right.svg") no-repeat bottom right,
  var(--color-dark-green);
}

.btn-link {
  color: var(--color-dark-green);
  background-color: var(--color-dark-salmon);
}

@media screen and (max-width: 600px) {
  section {
    background: url("@/assets/images/vegetation-left.svg") no-repeat bottom left,
    var(--color-dark-green);
  }
}
</style>
