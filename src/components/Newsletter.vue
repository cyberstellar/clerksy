<script setup>

</script>

<template>
  <section class="newsletter">
    <div class="container">
      <div>
        <h2>Stay up to date!</h2>
        <p>Sign up for the latest Clerksy news.</p>
      </div>

      <div>
        <form action="">
          <input value="" placeholder="Enter Your Email" type="email">
          <button>Sign Up</button>
        </form>
        <p>By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View
          our full <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-light-gray);
  padding: 60px 0;
}

.container {
  display: flex;

  div {
    flex: 1;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }
}

form {
  display: flex;

  &, input {
    border-radius: 50px;
    background-color: var(--color-white);
  }

  input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0 20px;
  }
}

@media screen and (max-width: 820px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
