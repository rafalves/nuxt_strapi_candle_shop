<template>
  <div class="relative font-body">
    <HeaderSection />
    <div class="pt-24 bg-brand-beige-300">
      <slot />

      <div
        hidden
        id="snipcart"
        data-api-key="OTdmN2M5ZGUtMTc4OC00NGZkLWExNGEtNzVkYmQwMTY3NzY5NjM4MTk3NzkwNTgyODg4OTMx"
      ></div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
