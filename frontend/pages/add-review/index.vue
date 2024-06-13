<script setup lang="ts">
import BlankLayout from "../../layouts/blank.vue";
const title = ref("Write A Review | Share your Experience | Affiliation website list");

definePageMeta({
  layout: "blank",
});
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <div class="flex justify-center">
    <router-link to="/"><img src="/images/logo.png" class="dark:invert mt-16" alt="" /></router-link>
  </div>
  <!-- Add Data -->
  <main class="flex justify-center items-center min-h-screen pt-10">
    <div
      class="2xl:w-[800px] xl:w-[800px] md:w-[800px] lg:w-[800px] w-full p-8 bg-white rounded-3xl shadow-2xl"
    >
      <img src="/images/sellhealth_728x90-1.gif" class="w-full" alt="" />

      <div class="w-full mt-4">
        <label for="" class="font-medium"
          >User Email Please? <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
        />
      </div>
      <div class="w-full my-4">
        <label for="" class="font-medium">Your Name Please?</label>
        <input
          type="text"
          class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
        />
      </div>
      <label for="" class="font-medium"
        >Could you tell a little more about Network?
        <span class="text-red-500">*</span></label
      >
      <div
        class="flex 2xl:flex-row mt-4 xl:flex-row md:flex-row lg:flex-row flex-col items-center"
      >
        <div class="flex flex-row gap-6">
          <div class="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox1" />
            <label for="checkbox1" class="font-normal text-sm text-gray-600">
              <span class="text-gray-600 text-sm">Network Offers</span>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox2" />
            <label for="checkbox2" class="font-normal text-sm text-gray-600">
              <span class="text-gray-600 text-sm">Payment Proof</span>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox3" />
            <label for="checkbox3" class="font-normal text-sm text-gray-600">
              <span class="text-gray-600 text-sm">Tracking System</span>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox3" />
            <label for="checkbox3" class="font-normal text-sm text-gray-600">
              <span class="text-gray-600 text-sm">Rip off Your Money</span>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox3" />
            <label for="checkbox3" class="font-normal text-sm text-gray-600">
              <span class="text-gray-600 text-sm">More About</span>
            </label>
          </div>
        </div>
      </div>
      <div class="w-full mt-6">
        <label for="" class="font-medium"
          >Send your payment Screenshot Proof <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
        />
      </div>
      <div class="w-full mt-6">
        <label for="" class="font-medium"
          >Affiliate Network <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
        />
      </div>
      <div class="w-full mt-6">
        <label for="" class="font-medium">Add A Review Here</label>
        <textarea
          type="text"
          cols="8"
          rows="8"
          class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
        />
      </div>
      <button
        type="button"
        class="px-5 w-fit py-2 mt-4 bg-slate-100 border border-solid border-slate-300 text-sm"
      >
        Submit
      </button>
    </div>
  </main>
</template>
