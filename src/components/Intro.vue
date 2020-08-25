<script setup>
import ArticleWithImage from '@/components/ArticleWithImage.vue'
</script>

<template>
  <section class="intro">
    <div class="container">
      <ArticleWithImage image-src="images/intro.svg" image-alt="Running the show has never been so easy.">
        <template v-slot:article>
          <h1>
            Running the show has never been so easy.
          </h1>
          <p>
            Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant
            workplace.
          </p>
        </template>
      </ArticleWithImage>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background: var(--color-dark-green);
  color: var(--color-white);
  padding-top: var(--header-height);
  padding-bottom: 0;
}
</style>
