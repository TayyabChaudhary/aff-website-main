<script setup lang="ts">
const { $axios } = useNuxtApp();
const { id } = useRoute().params;
const { data } = await $axios.$get(`/api/blog/${id}`);
</script>

<template>
  <UContainer>
    <div
      class="flex 2xl:flex-row xl:flex-row mt-4 md:flex-row lg:flex-row flex-col gap-4"
    >
      <div class="2xl:w-3/4 xl:w-3/4 md:w-3/4 lg:w-3/4 w-full">
        <img src="/images/728х90_4_contacts-1.gif" class="w-full" alt="Discover Nuxt 3" />
        <h2 class="text-xl mb-8 mt-8 font-bold">{{ data.blogTitle }}</h2>
        <p class="text-base mb-8">
          {{ data.blogDescription }}
        </p>
        <img
                  :src="data.blogImage"
                  class="w-full h-full"
                  alt="Discover Nuxt 3"
                />
      </div>
    </div>
  </UContainer>
</template>
