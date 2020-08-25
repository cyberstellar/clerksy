<script setup>
import ArticleWithImage from '@/components/ArticleWithImage.vue'
</script>

<template>
  <section class="scenes">
    <div class="container">
      <ArticleWithImage image-src="images/scenes.svg">
        <template v-slot:article>
          <h2>
            How the scenes fit together
          </h2>
          <p>
            Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.
          </p>
        </template>
      </ArticleWithImage>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-bottom: 0;
}

.container {
  max-width: 860px;
}
</style>
