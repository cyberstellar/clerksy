<script setup>
import ServiceCard from '@/components/FeatureCard.vue'

const cards = [
  {
    iconSrc: 'icons/shield.svg',
    title: 'Protect Your Company',
    list: [
      'Compliance Audits & Training',
      'Employee Data Storage',
      'Policy Drafting'
    ]
  },
  {
    iconSrc: 'icons/star.svg',
    title: 'Set Your Employees Up For Success',
    list: [
      'Learning & Development',
      'Employee Relations',
      'Benefit Management',
      'Employee Performance'
    ]
  },
  {
    iconSrc: 'icons/magnifier.svg',
    title: 'Know Your Industry\'s Legal Landscape',
    list: [
      'Work Place Investigations',
      'Employee Mediations',
      'Performance Tracking'
    ]
  }
]
</script>

<template>
  <section class="services">
    <div class="container">
      <h2>Consider everyone's best interest</h2>
      <p>HR is for everyone. Clerksy can help you.</p>
      <div class="cards">
        <ServiceCard v-for="card in cards"
                     :icon-src="card.iconSrc"
                     :title="card.title"
                     :list="card.list" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
}

.cards {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 60px;
  gap: 40px;
}

@media screen and (max-width: 820px){
  .cards {
    flex-direction: column;
    align-items: normal;
  }
}
</style>
