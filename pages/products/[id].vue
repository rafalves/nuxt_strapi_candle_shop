<template>
  <div>
    <Container class="grid grid-cols-12 gap-2 pt-32 pb-24 md:gap-12">
      <div class="col-span-12 md:col-span-6 lg:col-span-5">
        <ProductImage :product="product.data" />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-7">
        <Heading tag="h2" font-style="h1">{{
          product.data.attributes.title
        }}</Heading>
        <p class="mb-6 text-2xl text-brand-grey-600">
          £{{ product.data.attributes.price }}
        </p>
        <p class="pr-12 mb-6 text-brand-grey-400">
          {{ product.data.attributes.description }}
        </p>

        <div class="flex items-center">
          <input-field type="number" class="mr-4" min="1" v-model="quantity" />
          <Btn
            class="snipcart-add-item"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.price"
            :data-item-description="product.data.attributes.description"
            :data-item-name="product.data.attributes.title"
            :data-item-image="imageUrl"
            :data-item-quantity="quantity"
            >Add to basket</Btn
          >
        </div>
      </div>
    </Container>
    <Container>
      <div class="pb-8">
        <Heading tag="h3" font-style="h3">Related products</Heading>
        <Heading tag="h2" font-style="h2">Other sick wicks</Heading>
      </div>
      <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
        <ProductTeaser
          class="col-span-1"
          v-for="product in products.data"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="flex justify-center pt-12 pb-32">
        <Btn theme="secondary">View the other sick wicks</Btn>
      </div>
    </Container>
  </div>
</template>

<script setup>
const qs = require("qs");
const route = useRoute();
const config = useRuntimeConfig();
const quantity = ref(1);

const { data: product } = await useFetch(
  `${config.public.apiBase}/api/products/${route.params.id}?populate=*`
);

const { data: products } = await useFetch(
  `${config.public.apiBase}/api/products?populate=*`
);

const imageUrl = computed(() => {
  if (!product._rawValue.data) {
    return null;
  }
  return `${config.public.apiBase}${product._rawValue.data.attributes.images.data[0].attributes.formats.medium.url}`;
});
</script>
