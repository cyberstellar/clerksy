<script setup>

</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#">
        <img src="@/assets/logos/clerksy.svg" alt="Clerksy">
      </a>
      <ul class="header__buttons">
        <li>
          <a href="https://clerksy.co/login" target="_blank" class="text-link">Log In</a>
        </li>
        <li>
          <a href="tel:8443326440" class="text-link">844-332-6440</a>
        </li>
        <li>
          <a href="https://clerksy.co/contact" target="_blank" class="btn-link">
            Get Started
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header {
  position: absolute;
  height: var(--header-height);
  width: 100%;

  &__buttons {
    display: flex;
    color: #FBFAF7;
    font-size: 16px;
    align-items: center;

    li {
      margin: 0 12px;
    }
  }
}

a {
  color: var(--color-white);
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .btn-link {
    background: none;
    padding: 0;

    &:before {
      display: none;
    }
  }
}
</style>
