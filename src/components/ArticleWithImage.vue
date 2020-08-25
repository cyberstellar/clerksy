<script setup>
import getAssetUrl from '@/utils/getAssetUrl.js'

defineProps({
  imageSrc: String,
  imageAlt: String,
  reverse: Boolean
})
</script>

<template>
  <div :class="['row', reverse ? 'reverse' : '']">
    <article v-if="$slots.article" class="section-text">
      <slot name="article"></slot>
    </article>
    <div class="section-image">
      <img :src="getAssetUrl(imageSrc)" :alt="imageAlt">
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.section-text {
  flex: 5;
}

.section-image {
  flex: 7;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.reverse {
  flex-direction: row-reverse;
}

@media screen and (max-width: 820px) {
  .row {
    flex-direction: column;
    align-items: normal;
    padding-top: var(--padding);
  }

  .section-text {
    text-align: center;
  }
}
</style>
