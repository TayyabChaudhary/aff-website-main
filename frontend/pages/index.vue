<script setup lang="ts">
const title = ref("List of Affiliate Networks | Offers - CPA Affiliate Directory");
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <UContainer>
    <div
      class="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col gap-4 w-full"
    >
      <!-- =========== Left Side Main Content ========= -->
      <div class="w-full xl:w-[73%] lg:w-[73%] md:w-[73%] flex flex-col gap-10 py-6">
    
        <h3 class="text-center text-xl font-medium">Affiliate Networks List</h3>
        <div
          class="w-full border border-solid border-slate-200 dark:border-white/10 rounded"
        >
          <!-- ============ Filter Dropdown Select ======= -->
          <div
            class="grid 2xl:grid-cols-3 gap-4 xl:grid-cols-3 p-4 md:grid-cols-3 lg:grid-cols-3 grid-cols-1"
          >
            <div class="w-full flex flex-col gap-2 relative">
              <label for="" class="font-medium text-sm">🔍 FILTERS by Category</label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down absolute right-2 top-9 z-10"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <select
                name="filters"
                id="filters"
                class="border dark:bg-[#12121212] border-solid dark:border-white/10 border-slate-200 text-sm appearance-none outline-none px-3 p-1 py-1.5 rounded"
              >
                <option class="dark:bg-black" value="all">All</option>
                <option class="dark:bg-black" value="winPartner">1 win Partners</option>
                <option class="dark:bg-black" value="1xBet Partners">1xBet Partners</option>
                <option class="dark:bg-black" value="1xSlot Partners">1xSlot Partners</option>
                <option class="dark:bg-black" value="249 Media">249 MediaClickbank</option>
                <option class="dark:bg-black" value="360 Affiliates">360 Affiliates</option>
                <option class="dark:bg-black" value="3snet">3snet</option>
                <option class="dark:bg-black" value="A4D">A4D</option>
                <option class="dark:bg-black" value="Accordmobi">Accordmobi</option>
                <option class="dark:bg-black" value="Acom Dgtl">Acom Dgtl</option>
                <option class="dark:bg-black" value="ACPA">ACPA</option>
                <option class="dark:bg-black" value="Adaffy">Adaffy</option>
                <option class="dark:bg-black" value=""></option>
              </select>
            </div>
            <div class="flex flex-col gap-2 relative">
              <label for="" class="font-medium text-sm">🔍 Filter by Network</label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down absolute right-2 top-9 z-10"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <select
                name="filters"
                id="filters"
                class="border dark:bg-[#12121212] border-solid dark:border-white/10 border-slate-200 text-sm appearance-none outline-none px-3 py-1.5 p-1 rounded"
              >
                <option class="dark:bg-black" value="all">All</option>
                <option class="dark:bg-black" value="saab">Saab</option>
                <option class="dark:bg-black" value="mercedes">Mercedes</option>
                <option class="dark:bg-black" value="audi">Audi</option>
              </select>
            </div>
          </div>
          <!-- ============ Main Table Content ======= -->
          <Table />
        </div>
      </div>
      <!-- =========== Right Side Main Content ========= -->
      <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 flex flex-col gap-3 p-3">
        <h4 class="text-lg">Search Best Network</h4>
        <div class="border-b border-solid border-slate-200 dark:border-white/10 relative">
          <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
        </div>
        <!-- ========= Search theBest Network form Input ========== -->
        <form class="relative w-full mt-3 mb-4">
          <input
            type="text"
            placeholder="Search"
            class="w-full h-11 px-3 rounded border border-solid dark:bg-transparent border-slate-200 dark:border-white/10 outline-none text-sm"
          />
          <button
            type="button"
            class="absolute right-0 top-0.5 size-10 flex justify-center items-center rounded-tr-md dark:bg-black !bg-black text-white"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <h4 class="text-lg">Premium Top Network</h4>
        <div class="border-b border-solid border-slate-200 dark:border-white/10 relative">
          <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
        </div>
        <img src="/images/sellhealth_300x300-1.gif" class="w-full h-auto mb-4" alt="" />
        <h4 class="text-lg">Earn CPA upto 300$ (50% Reveshare)</h4>
        <div class="border-b border-solid border-slate-200 dark:border-white/10 relative">
          <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
        </div>
        <router-link
          to="http://qjgsn.bemobtrcks.com/go/31f6d858-16bc-4410-b38b-8c5e567c3d13"
          class="text-sm text-blue-500 hover:text-black tracking-wide px-2 h-9 flex flex-row items-center"
          >Live Chat on Telegrham</router-link
        >
        <router-link
          to="http://7l8t0.bemobtrk.com/go/8d78c62e-5455-4c81-b459-82178c77bc07"
          class="text-sm text-blue-500 hover:text-black tracking-wide px-2 h-9 flex flex-row items-center"
          >Live Chat on Skype</router-link
        >

        <img src="/images/300х300-300x300.gif" class="w-full h-auto mb-4" alt="" />
        <img src="/images/d-white.gif" class="w-full h-auto mb-4" alt="" />
        <button
          class="bg-[#E5E5E5] dark:bg-black cursor-default w-full rounded-md py-3 flex items-center justify-center"
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
import Table from "~/components/affiliate-network-lists-table.vue";
export default {
  components: { Reviews, Table },
};
</script>
