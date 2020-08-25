<script setup>

</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <img class="logo" src="@/assets/logos/clerksy-dark.svg" alt="">
        <h4>A people company.</h4>
        <ul class="social">
          <li><a href="#"><img src="@/assets/icons/social/facebook.svg" alt="Facebook"></a></li>
          <li><a href="#"><img src="@/assets/icons/social/twitter.svg" alt="Twitter"></a></li>
          <li><a href="#"><img src="@/assets/icons/social/linkedin.svg" alt="LinkedIn"></a></li>
          <li><a href="#"><img src="@/assets/icons/social/instagram.svg" alt="Instagram"></a></li>
        </ul>
      </div>
      <div class="row">
        <p>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>
        <ul class="nav">
          <li><a href="https://clerksy.co/privacy" target="_blank" class="text-link">Privacy Policy</a></li>
          <li><a href="https://clerksy.co/terms" target="_blank" class="text-link">Terms of Service</a></li>
          <li><a href="https://clerksy.co/gdpr" target="_blank" class="text-link">GDPR</a></li>
          <li><a href="https://angel.co/company/clerksy/jobs" target="_blank" class="text-link">Careers</a></li>
          <li><a href="https://clerksy.co/press" target="_blank" class="text-link">Press Kit</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-top: 24px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    border-top: 1px solid var(--color-light-gray);
    font-size: 14px;
  }
}

.logo {
  max-width: 110px;
}

.social {
  display: flex;

  li {
    transition: all 0.2s ease-in-out;

    &:not(:last-child) {
      margin-right: 14px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  justify-content: center;
}

@media screen and (max-width: 1020px) {
  .footer {
    padding-bottom: 24px;
  }

  .row {
    flex-direction: column;
    text-align: center;

    &:first-child {
      gap: 32px;
    }
  }
}
</style>
