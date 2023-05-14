<template>
  <div>
    <div v-for="product in products.data" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">
        <h1 class="font-bold">{{ product.attributes.title }}</h1>
        {{ product.attributes.description }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch(
  "http://191.96.251.66:1337/api/products"
);
</script>
