<script setup lang="ts">
import { defineComponent } from 'vue';
const { $axios } = useNuxtApp();

interface AdvertisingOfferInterface {
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
const affiliateOffer = ref<AdvertisingOfferInterface[] | []>([]);

onMounted(async () => {
  const { data } = await $axios.$get<AdvertisingOfferInterface[]>("/api/affiliate-all", {
    params: {
      page: 1,
      limit: 100,
      selectedCategory: '',
      categories: []
    }
  });
  console.log(data);
  affiliateOffer.value = data;
});

</script>

<template>
  <div>
    <div class="relative overflow-x-auto mt-4">
      <table class="w-full text-sm" v-if="affiliateOffer.length > 0">
        <thead class="text-xs text-left p-2.5 text-white bg-[#007bff]">
          <tr>
            <th scope="col" class="px-6 py-3">Offer Name</th>
            <th scope="col" class="px-6 py-3">Landing Page</th>
            <th scope="col" class="px-6 py-3">Payout</th>
            <th scope="col" class="px-6 py-3">Country</th>
            <th scope="col" class="px-6 py-3">Link</th>
          </tr>
        </thead>
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
              <img class="size-7" src="/images/vavada.png" alt="Jese image" />
              <div class="ps-3 line-clamp-3 space-y-3">
                <p class="text-base truncate font-semibold break-all text-left dark:text-white">
                  {{ item.offerName }}
                </p>
                <div class="text-[#7f8c8d] font-medium flex items-center gap-2 text-left text-xs">
                  <router-link to=""><span class="text-blue-500">{{ item.tagslink }} </span></router-link> {{ item.tags }}
                </div>
              </div>
            </th>
            <td class="px-6 py-4">{{ item.landingPage }}</td>
            <td class="px-6 py-4">
              <p class="flex truncate text-blue-500 font-medium items-center">
                ${{ item.payouts }}
              </p>
            </td>
            <td class="px-6 py-4">
              <p class="text-black truncate text-sm dark:text-white">{{ item.country }}</p>
            </td>
            <td class="px-6 py-4">
              <router-link :to="item.tagslink" target="_blank">
                <button
                  type="button"
                  class="px-3 py-2 text-sm font-medium text-center text-white border border-solid border-white bg-blue-500 rounded"
                >
                  Run Offer
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center text-gray-500 mt-4">No data found</div>
      <!-- Pagination -->
      <nav
        class="flex items-center pb-3 border-t border-solid dark:bg-black border-slate-200 dark:border-white/10 flex-column flex-wrap md:flex-row justify-center pt-4"
        aria-label="Table navigation"
      >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <Icon name="ep:arrow-left" color="gray" size="13px" />
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >.....</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >1</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >2</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 border dark:border-white/10 border-slate-200 bg-slate-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >4</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >5</router-link
            >
          </li>
          <li>
            <button
              type="button"
              class="flex bg-transparent outline-none focus:outline-none items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
              >
              <Icon name="ep:arrow-right" color="gray" size="13px" />
            </button>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border dark:border-white/10 dark:bg-black border-slate-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <Icon name="iwwa:add-15m" color="gray" size="13px" />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
