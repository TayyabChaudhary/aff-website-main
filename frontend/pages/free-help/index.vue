<script setup lang="ts">
const title = ref("Contact Us | info@affwebsite.com");
</script>

<template>
    <Head>
    <Title>{{ title }}</Title>
  </Head>
  <div>
    <UContainer>
      <div
        class="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col gap-4 w-full"
      >
        <!-- =========== Left Side Main Content ========= -->
        <div class="w-full xl:w-[73%] lg:w-[73%] md:w-[73%] flex flex-col gap-10 py-6">
          <img src="/images/sellhealth_728x90-1.gif" alt="" />
          <h3 class="text-left text-xl font-bold">Free Help</h3>
          <p class="mt-4">Our email id is: info@affwebsite.com</p>
          <p class="mt-2">Skype id: live:.cid.3cbd42d9c961dad6</p>
          <p class="mt-2">Telegram Id: T.me/Affwebsite</p>
          <div class="2xl:max-w-md xl:max-w-md md:max-w-md lg:max-w-md max-w-full">
            <div class="grid gap-6 items-center grid-cols-2">
              <div class="w-full">
                <label for="" class="font-medium">Name</label>
                <input
                  type="text"
                  class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                />
              </div>
              <div class="w-full">
                <label for="" class="font-medium">Last Name</label>
                <input
                  type="text"
                  class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                />
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium"
                    >Email <span class="text-red-500">*</span></label
                  >
                  <input
                    type="text"
                    class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                  />
                </div>
              </div>
            </div>
         
          </div>
          <div class="w-full">
              <label for="" class="font-medium"
                >Comment or Message</label
              >
              <textarea
                type="text"
                cols="8"
                rows="8"
                class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
              />
            </div>
            <button type="button" class="px-5 w-fit py-2 bg-slate-100 border border-solid border-slate-300 text-sm">Submit</button>
        </div>
        <!-- =========== Right Side Main Content ========= -->
        <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 flex flex-col gap-3 p-3">
          <h4 class="text-lg">Search Best Network</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
            <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
          </div>
          <!-- ========= Search theBest Network form Input ========== -->
          <form class="relative w-full mt-3 mb-4">
            <input
              type="text"
              placeholder="Search"
              class="w-full h-9 px-3 rounded border border-solid dark:bg-transparent border-slate-200 dark:border-white/10 outline-none text-sm"
            />
            <UButton
              square="{false}"
              class="absolute right-0 top-0.5 dark:bg-black"
              icon="i-heroicons-magnifying-glass"
              color="black"
              variant="solid"
            />
          </form>
          <h4 class="text-lg">Premium Top Network</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
            <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
          </div>
          <img src="/images/sellhealth_300x300-1.gif" class="w-full h-auto mb-4" alt="" />
          <h4 class="text-lg">Earn CPA upto 300$ (50% Reveshare)</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
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
          <img src="/images/300x300_affter.gif" class="w-full h-auto mb-4" alt="" />
          <img src="/images/d-white.gif" class="w-full h-auto mb-4" alt="" />
          <button
            class="bg-[#747373] text-white dark:bg-black cursor-default w-full rounded-md py-3 flex items-center justify-center"
          >
            ∇ Top10 Verified & Reviews Rated Affiliate Websites
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
        </div>
      </div>

      <Footer />
    </UContainer>
  </div>
</template>

<script lang="ts">
import Table from "~/components/Table.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: { Table, Footer },
};
</script>
