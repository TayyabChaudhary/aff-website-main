<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div class="2xl:hidden xl:hidden md:hidden lg:hidden block px-4">
    <div class="flex items-center gap-x-2">
      <svg
        @click="isOpen = true"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-menu"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <img src="/images/logo.png" class="size-20 object-contain dark:invert" alt="" />
    </div>

    <USlideover class="dark:bg-black" :overlay="true" v-model="isOpen" :transition="true">
      <div class="p-4 flex-1">
        <div class="flex justify-center items-center h-20">
          <img src="/images/logo.png" class="dark:invert" alt="" />
        </div>
        <ul class="mt-6 flex flex-col gap-y-2">
          <li
            class="flex border-b border-solid border-slate-200 dark:border-white/20 justify-between pb-3 items-center"
          >
            <router-link
              to="/"
              class="text-sm font-medium flex gap-x-2 flex-row items-center"
            >
              <Icon name="uim:list-ul" color="gray" size="18px" />
              Affiliate Networks</router-link
            >
            <Icon name="ep:arrow-right" color="gray" size="18px" />
          </li>
          <router-link
            to="/"
            class="text-sm font-medium h-9 border-b border-solid border-slate-200 dark:border-white/20 flex gap-x-2 flex-row items-center"
          >
            <img src="/svg/book.svg" class="size-4 dark:invert" alt="" />
            Affiliate Offers</router-link
          >
          <router-link
            to="/"
            class="text-sm h-9 border-b border-solid border-slate-200 dark:border-white/20 font-medium flex gap-x-1 flex-row items-center"
            ><Icon name="uim:list-ul" color="gray" size="22px" />Advertising
            Networks</router-link
          >
          <router-link
            to="/blog"
            class="text-sm h-9 border-b border-solid border-slate-200 dark:border-white/20 font-medium flex flex-row items-center"
            >Blog</router-link
          >
          <router-link
            to="/"
            class="text-sm h-9 border-b border-solid border-slate-200 dark:border-white/20 font-medium flex flex-row items-center"
            >Add review</router-link
          >
          <router-link
            to="/"
            class="text-sm h-9 border-b border-solid border-slate-200 dark:border-white/20 font-medium flex flex-row items-center"
            >Free Help</router-link
          >
          <router-link
            to="/"
            class="text-sm h-9 border-b border-solid border-slate-200 dark:border-white/20 font-medium flex flex-row items-center"
            >Free Tutorials</router-link
          >
          <router-link
            to="/"
            class="text-sm font-normal text-blue-500 h-9 flex flex-row items-center"
            >ADD YOUR NETWORK</router-link
          >
          <div class="flex justify-center">
            <button
              @click="isOpen = false"
              type="button"
              class="w-10 h-10 bg-white dark:bg-white/20 shadow-lg rounded-full flex justify-center items-center"
            >
              <Icon name="iwwa:delete" color="gray" size="18px" />
            </button>
          </div>
        </ul>
      </div>
    </USlideover>
  </div>
</template>
