<script setup>
import getAssetUrl from '@/utils/getAssetUrl.js'

defineProps({
  iconSrc: String,
  title: String,
  list: Array
})
</script>

<template>
  <div class="card">
    <img :src="getAssetUrl(iconSrc)" alt="">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: var(--color-white);
  box-shadow: var(--card-shadow);
  padding: 50px 40px 66px 40px;
  border-radius: 15px;
  text-align: left;
  flex: 1;

  ::marker {
    font-size: 24px;
  }

  img {
    height: 75px;
  }

  ul {
    font-size: 16px;
    padding-left: 28px;
    list-style: disc;
  }

  li:not(:last-child) {
    margin-bottom: 6px;
  }

  img, h3 {
    margin-bottom: 15px;
  }
}
</style>
