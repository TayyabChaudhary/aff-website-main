
<script lang="ts">
import Table from "~/components/Table.vue";
import Footer from "~/components/Footer.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
const title = ref("Post Your Website in our Affiliate Directory List");
export default {
  components: { Table, Footer, VueTelInput },

  setup() {
    const phone = ref(null);

    return {};
  },
};
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
          <h3 class="text-left text-2xl font-bold">About Us</h3>
          <div class="flex justify-center w-full">
            <div class="flex flex-col items-center">
              <div class="flex justify-center">
                <img src="/images/affiliate-website.png" class="2xl:w-3/5 xl:w-3/5 md:w-3/5 lg:w-3/5 w-full" alt="" />
              </div>
              <div class="2xl:w-3/5 xl:w-3/5 md:w-3/5 lg:w-3/5 w-full">
                <p class="mt-8 text-sm">
                  AffWebsite.com is the first & largest affiliate marketing resources
                  Directory website. We listed 1000+ CPA affiliate networks, and
                  Advertising Networks and 50,000+ affiliate networks Offers.
                </p>
                <p class="mt-4 text-sm">
                  We also offer CPA network reviews, Live Earning Proof of networks,
                  Payout network details, CPA offers, industry news, affiliate marketer
                  community, affiliate Blogging to save your time.
                </p>
                <p class="mt-4 text-sm">
                  The right affiliate program can be track, Analyze And Optimize by help
                  of our website. Now You may find all your traffic sources and affiliate
                  networks in one place.
                </p>
                <p class="mt-8 text-sm">
                  we can help you in finding best affiliate network and its offer in a
                  huge list of top affiliate networks with categories of Biz Opp,
                  Health/Nutra, Crypto, Dating, eCommerce, Education Finance, Gambling,
                  Game, Software, Sweepstakes, Survey , Forex/Trading, Pay Per Call,
                  Incentive. Mobile, and Travel.
                </p>
                <h2 class="font-medium mt-10">AffWebsite.com is base on real affiliates</h2>
                <p class="mt-8 text-sm text-center">
                  If your affiliate network is not yet listed in the directory website,
                  please contact us by providing full details about affiliate network.
                  This Website listing in the directory is totaly free. we will put your
                  network beside our users, they will review on it real and promote by
                  sharing experience with yourself.
                </p>
                <p class="mt-8 text-sm text-center">
                  If you need to sponsor your affiliate network with us, then go to our
                  Page and Contact to Adverting Department.
                </p>
                <p class="mt-8 text-sm text-center">
                  If you have any questions, Complaint, comments or ideas, then kindly
                  feel free to drop us a message here.
                </p>
                <div class="flex justify-center mt-14">
                  <button type="button" class="px-20 font-medium border :border-solid border-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-linear duration-200 py-3 bg-blue-500 text-white rounded-full">
                      Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
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


