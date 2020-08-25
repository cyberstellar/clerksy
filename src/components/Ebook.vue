<script setup>

import ArticleWithImage from '@/components/ArticleWithImage.vue'
</script>

<template>
  <section class="ebook">
    <div class="container">
      <ArticleWithImage image-src="images/ebook.svg" image-right>
        <template v-slot:article>
          <h2>Not just another HR resource.</h2>
          <p>Simple. Entertaining. Informative.</p>
          <a href="https://clerksy.co/contact" target="_blank" class="btn-link">Download E-book</a>
        </template>
      </ArticleWithImage>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 860px;
}
</style>
