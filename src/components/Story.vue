<script setup>

import ArticleWithImage from '@/components/ArticleWithImage.vue'
</script>

<template>
  <section class="story">
    <div class="container">
      <ArticleWithImage image-src="images/story-1.svg" reverse>
        <template v-slot:article>
          <h2>
            Put the human back in HR.
          </h2>
          <p>
            Your employees are the real stars. Show the love and help them perform!
          </p>
        </template>
      </ArticleWithImage>
      <ArticleWithImage image-src="images/story-2.svg">
        <template v-slot:article>
          <h2>
            You don’t have to play all the parts.
          </h2>
          <p>
            Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.
          </p>
        </template>
      </ArticleWithImage>
      <div class="partners">
        <h2>We partner with the best</h2>
        <ul>
          <li><img src="@/assets/logos/stripe.png" alt="Stripe"></li>
          <li><img src="@/assets/logos/google.png" alt="Google"></li>
          <li><img src="@/assets/logos/notion.png" alt="Notion"></li>
          <li><img src="@/assets/logos/gusto.png" alt="Gusto"></li>
          <li><img src="@/assets/logos/aircall.png" alt="Aircall"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 860px;
}

.partners {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 100px;

  img {
    width: 110px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 16px;
    margin-top: 60px;
  }
}
</style>
