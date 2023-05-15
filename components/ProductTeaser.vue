<template>
  <article>
    <NuxtLink :to="`/products/${product.id}`">
      <ProductImage
        :product="product"
        class="mb-6 transition-transform transform hover:scale-105"
      />
      <Heading tag="h3" font-style="h4">{{ product.attributes.title }}</Heading>
      <p class="text-lg text-brand-grey-400">£{{ product.attributes.price }}</p>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>
