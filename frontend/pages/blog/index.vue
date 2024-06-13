<script setup lang="ts">
const title = ref("List of Affiliate Networks | Offers - CPA Affiliate Directory");
const { $axios } = useNuxtApp();

interface BlogDataInterface {
  _id: number;
  blogImage: string;
  blogTitle: string;
  blogDescription: string;
}

/* ========== Import Blog Data Interfaces ============ */
const blogData = ref<BlogDataInterface[] | []>([]);

onMounted(async () => {
  const { data } = await $axios.$get<BlogDataInterface[]>("/api/blog-all");
  blogData.value = data;

  //  const response = await $axios.$delete<AdvertisingOfferInterface[]>("/api/affiliate-all");
});
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <UContainer>
    <div
      class="flex 2xl:flex-row xl:flex-row mt-4 md:flex-row lg:flex-row flex-col gap-4"
    >
      <div class="2xl:w-3/4 xl:w-3/4 md:w-3/4 lg:w-3/4 w-full">
        <h2 class="text-xl mb-8 font-medium">Blog</h2>
        <img src="/images/728х90_4_contacts-1.gif" class="w-full" alt="Discover Nuxt 3" />
        <div
          v-for="blogs in blogData" :key="blogs._id"
          class="w-full border border-solid bordergray-400 dark:border-white/15 p-6 mt-3 mb-8 rounded-md"
        >
          <nuxt-link :to="`/blog/${blogs._id}}`">
            <div class="flex md:flex-row flex-col gap-6">
              <div class="w-40 h-24">
                <img
                  src="/assets/img/7347373.png"
                  class="w-full h-full object-cover"
                  alt="Discover Nuxt 3"
                />
              </div>
              <div class="space-y-3 w-3/4">
                <h2 class="text-xl font-bold">
                  {{ blogs.blogTitle }}
                </h2>
                <div class="">
                  <p class="text-sm cursor-default">
                    ProfitPixels connects advertisers with affiliates and offers a wide
                    range of affiliate offers in the financial, credit, insurance, dating,
                    sweepstakes, crypto
                    {{ blogs.blogDescription }}
                  </p>
                </div>
              </div>
            </div>
          </nuxt-link>
          <div class="flex justify-end">
            <button
              type="button"
              class="bg-transparent text-sm border border-solid border-gray300 rounded px-2 py-0.5 hover:text-white hover:bg-[#007bff]"
            >
              Read More +
            </button>
          </div>
        </div>
      </div>
      <div class="2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 w-full">
        <div class="w-full border-2 border-solid border-[#007bff] p-3"></div>
        <div
          class="w-full p-3 border-2 border-solid border-gray-300 dark:border-white/20 mt-4"
        >
          <ul>
            <li
              class="pb-3 border-b border-solid border-gray-300 dark:border-gray-200 mb-3 text-sm font-medium"
            >
              Browse Categories:
            </li>
            <li
              class="pb-2 border-b border-solid border-gray-300 dark:border-gray-400 mb-3 text-sm"
            >
              <router-link to=""> Articles </router-link>
            </li>
            <li
              class="pb-2 border-b border-solid border-gray-300 dark:border-gray-400 mb-3 text-sm"
            >
              <router-link to=""> Guides </router-link>
            </li>
            <li
              class="pb-2 border-b border-solid border-gray-300 dark:border-gray-400 mb-3 text-sm"
            >
              <router-link to=""> News </router-link>
            </li>
            <li
              class="pb-2 border-b border-solid border-gray-300 dark:border-gray-400 mb-3 text-sm"
            >
              <router-link to=""> Make Money </router-link>
            </li>
            <li
              class="pb-2 border-b border-solid border-gray-300 dark:border-gray-400 mb-3 text-sm"
            >
              <router-link to=""> Top Ten </router-link>
            </li>
            <li class="pb-2 mb-3 text-sm">
              <router-link to=""> Affiliate Network </router-link>
            </li>
          </ul>
        </div>
        <h4 class="text-sm mt-4 mb-2">Network of The Year (Premium Network)</h4>
        <div class="border-b border-solid border-slate-200 dark:border-white/10 relative">
          <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
        </div>
        <img src="/images/max.webp" class="w-full mt-4" alt="" />
        <button
          class="bg-[#E5E5E5] mt-6 dark:bg-black cursor-default w-full rounded-md py-3 flex items-center justify-center"
        >
          ∇ Featured Networks
        </button>
        <ul>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/vavada.png" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Vavada Asino</span>
              <small class="text-slate-400">♦Betting ♦Casino</small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/Lemonad.jpg" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Limonad</span>
              <small class="text-slate-400">♦Health ♦ Adult</small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/alfaleads.png" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">AlfaLeads</span>
              <small class="text-slate-400">♦Gambling ♦ Dating</small>
            </div>
            <router-link
              to="/"
              class="px-6 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/processed.jpeg" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Profit Nxt</span>
              <small class="text-slate-400">♦Health ♦Financial </small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/Untitleda.png" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Vavada Asino</span>
              <small class="text-slate-400">♦Betting ♦Casino</small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/procft.png" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Ambalaya Affiliates</span>
              <small class="text-slate-400">♦Biz Opp ♦Sweeps</small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
          <li
            class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
          >
            <div
              class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
            >
              <img src="/images/alfaleads-01.png" alt="" />
            </div>
            <div class="flex flex-col items-center">
              <span class="tracking-wide text-sm font-medium">Profit Pixels</span>
              <small class="text-slate-400">♦All in One Offers</small>
            </div>
            <router-link
              to="/"
              class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
            >
              <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
            </router-link>
          </li>
        </ul>
        <button
          class="bg-[#69727d] cursor-default w-full rounded-md py-2 mt-4 text-white text-sm flex items-center justify-center"
        >
          Top10 Reviews Rated Affiliate Websites
        </button>

        <Reviews />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts">
import Reviews from "~/components/Reviews.vue";

export default {
  components: {
    Reviews,
  },
};
</script>
