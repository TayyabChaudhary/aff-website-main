<script setup lang="ts">
import { ref, onMounted } from "vue";
import { defineComponent } from "vue";
const { $axios } = useNuxtApp();


interface AffiliateNetworksListsInterface {
  _id: number;
  offerImage: string;
  offerName: string;
  landingPage: string;
  country: string;
  payouts: string;
  tags: string;
  tagslink: string;
}
/* ========== Advertising Offer Interfaces ============ */
const affiliateOffer = ref<AffiliateNetworksListsInterface[] | []>([]);
onMounted(async () => {
  const { data } = await $axios.$get<AffiliateNetworksListsInterface[]>(
    "/api/affiliate-all"
  );
  console.log(data);
  affiliateOffer.value = data;
});
</script>

<template>
  <div>
    <div class="relative overflow-x-auto mt-4">
      <table class="w-full text-sm" v-if="affiliateOffer.length > 0">
        <tbody>
          <tr
            v-for="item in affiliateOffer"
            key="{{ item._id }}}"
            class="bg-white hover:bg-gray-50 dark:bg-black border-b dark:hover:bg-white/5 border-slate-200 border-solid dark:border-white/10"
          >
            <th
              scope="row"
              class="flex gap-4 items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img class="w-28 h-12" src="/images/vavada.png" alt="Jese image" />
              <div class="ps-3 line-clamp-3 space-y-2">
               <router-link to="">
                <p
                class="text-base truncate font-semibold break-all text-left flex items-center gap-1 text-[#0000ff] dark:text-white"
              >
                {{ item.offerName }} <span class="text-[#339966]">⍟</span>
              </p>
               </router-link>
                <p class="text-xs text-left font-normal">
                  Vavada Casino gambling platform offering casino.
                </p>
                <p class="text-xs font-normal">
                  Self Tracker -- $50 Payout --
                  <router-link to=""
                    ><span class="text-[#0000ff]">
                      CPA upto 300$ (50% Reveshare)</span
                    ></router-link
                  >
                </p>
                <p
                  class="text-black font-medium flex items-center gap-2 text-left text-xs"
                >
                  # Casino # Betting # Games # Financial # Gambling # Crytpo
                </p>
              </div>
            </th>

            <td class="px-6 py-4">
              <div class="flex flex-col items-center gap-3">
                <p class="text-black truncate text-sm dark:text-white">
                  5.0 <span class="text-[#ff6633]">★★★★★</span>
                </p>
                <p class="text-slate-600 truncate text-sm dark:text-white">
                  (18 Reviews)
                </p>
                <p class="truncate text-sm dark:text-white">Write a Review</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <router-link :to="item.tagslink" target="_blank">
                <button
                  type="button"
                  class="px-3 py-2 text-sm font-normal text-center text-white border border-solid border-white bg-blue-500 rounded-md"
                >
                  Join Now
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center text-gray-500 mt-4">No data found</div>
      <!-- Pagination -->
      <nav
        class="flex items-center py-6 border-t border-solid dark:bg-black border-slate-200 dark:border-white/10 flex-column flex-wrap md:flex-row justify-center pt-4"
        aria-label="Table navigation"
      >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-chevrons-left"
              >
                <path d="m11 17-5-5 5-5" />
                <path d="m18 17-5-5 5-5" />
              </svg>
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <Icon name="ep:arrow-left" color="gray" size="8px" />
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 ms-0 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >...</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >1</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >2</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              aria-current="page"
              class="flex items-center justify-center px-3 h-9 border dark:border-white/10 border-slate-200 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >4</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >5</router-link
            >
          </li>
          <li>
            <button
              type="button"
              class="flex bg-transparent outline-none focus:outline-none items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <Icon name="ep:arrow-right" color="gray" size="8px" />
            </button>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-chevrons-right"
          >
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
