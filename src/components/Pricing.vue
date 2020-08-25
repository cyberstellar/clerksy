<script setup>

</script>

<template>
  <section class="pricing">
    <div class="container">
      <div>
        <h2>It's easy as 1, 2, 3</h2>
        <p>Clerksy can help use your unique business needs. Here's how:</p>
      </div>
      <div class="row">
        <div  class="step">
          <p>Fill out a form and tell us what you're looking for:</p>
          <h3>5 minutes</h3>
        </div>
        <div class="arrow">
          <img src="@/assets/images/arrow-1.svg" alt="" />
        </div>
        <div  class="step">
          <p>Time it will take a Clerksy rep to follow up:</p>
          <h3>24 hours</h3>
        </div>
        <div class="arrow">
          <img src="@/assets/images/arrow-2.svg" alt="" />
        </div>
        <div  class="step">
          <p>Take advantage of out monthly plans starting at:</p>
          <h3>$969 USD</h3>
        </div>
      </div>
      <a href="https://clerksy.co/contact" target="_blank" class="btn-link">Book Free Discovery Call</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background: var(--color-light-gray);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 22px;
  width: 100%;

  .step {
    position: relative;
    width: 262px;
    padding: 32px 0;

    &:last-child {
      background: no-repeat center url("@/assets/images/stroke.svg");
      background-size: contain;
    }
  }
}

@media screen and (max-width: 1020px){
  .arrow {
    display: none;
  }
}

@media screen and (max-width: 920px){
  .row {
    flex-direction: column;
  }
}
</style>
