<script setup>

</script>

<template>
  <section class="hr-summary">
    <div class="container">
      <h2>
        HR Production of the Highest Quality
      </h2>
      <ul>
        <li>
          <img src="@/assets/icons/dialogue.svg" alt="">
          <p>
            Educates & Informs <br>
            Employee Expectations
          </p>
        </li>
        <li>
          <img src="@/assets/icons/shield-narrow.svg" alt="">
          <p>
            Protects Your Business <br>
            Just in Case
          </p>
        </li>
        <li>
          <img src="@/assets/icons/cabinet.svg" alt="">
          <p>
            Manages & Stores <br>
            Important Documents
          </p>
        </li>
        <li>
          <img src="@/assets/icons/lady.svg" alt="">
          <p>
            Create a Healthy <br>
            Work Environment
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background: var(--color-dark-green);
  color: var(--color-white);
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;

  li {
    width: 25%;

    @media screen and (max-width: 820px){
      width: 50%;
    }

    @media screen and (max-width: 820px){
      width: 100%;
    }

    img {
      height: 146px;
    }
  }
}
</style>
