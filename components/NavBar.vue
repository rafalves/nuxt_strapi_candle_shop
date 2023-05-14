<template>
  <nav>
    <ul
      class="flex flex-col items-center justify-center gap-6 text-center md:flex-row"
    >
      <li
        class="text-xl font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-orange"
      >
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li
        class="text-xl font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-orange"
      >
        <NuxtLink to="/">Shop</NuxtLink>
      </li>
      <li
        class="text-xl font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-orange"
      >
        <NuxtLink to="/">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-brand-orange;
}
</style>
