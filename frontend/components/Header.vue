<template>
  <div>
    <header
      class="w-full 2xl:block xl:block md:block lg:block hidden p-2.5 !bg-[#007bff] h-auto"
    >
      <nav>
        <UContainer>
          <div
            class="2xl:flex xl:flex md:flex lg:flex hidden justify-between items-center"
          >
            <ul class="flex items-center space-x-5 text-xs text-white">
              <li>
                <router-link to="/add-review" class="hover:underline">Add review</router-link>
              </li>
              <li>
                <router-link to="/free-help" class="hover:underline"
                  >Free Help</router-link
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@discountlisted6321"
                  target="_blank"
                  class="hover:underline"
                  >Free Tutorials</a
                >
              </li>
            </ul>
            <ul class="flex items-center space-x-5 text-white text-xs">
              <li>
                <router-link to="/add-your-network" target="_blank" class="uppercase"
                  >Add Your Network</router-link
                >
              </li>
            </ul>
          </div>
        </UContainer>
      </nav>
    </header>
    <!-- ============ Responsive Navigation ====== -->
    <div
      class="w-full 2xl:hidden xl:hidden lg:hidden md:hidden block bg-slate-50 h-16 dark:bg-[#121212] border-b border-solid dark:border-white/20 flex justify-between items-center"
    >
      <ResponsiveNav />
    </div>
    <!-- ======== Logo Header Navigation ========= -->
    <header
      class="w-full py-5 bg-white dark:bg-[#121212] h-auto 2xl:block xl:block md:block lg:block hidden"
    >
      <UContainer>
        <div class="grid 2xl:grid-cols-3 items-center xl:grid-cols-3 grid-cols-1 gap-8">
          <router-link to="/"><img src="/images/logo.png" class="dark:invert" alt="" /></router-link>
          <img src="/images/banner-2.gif" alt="" />
          <img src="/images/728х90_4_contacts-1.gif" alt="" />
        </div>
       
      </UContainer>
      <!-- ======= Dropdown Menu Navigation Header ======= -->
      <div
        class="bg-[#fcfcfc] dark:bg-[#121212] border-t border-b border-slate-200 dark:border-white/10 dark:text-white dark:border-gray-200 p-0"
      >
        <UContainer>
          <nav
            aria-label="primary"
            class="relative z-20 flex-row flex-grow hidden pb-4 md:pb-0 md:flex items-center"
          >
            <div class="relative group">
              <button
                id="style-2"
                class="flex flex-row items-center w-full px-3.5 space-x-1 border-r border-solid border-slate-200 dark:border-white/10 h-9 text-base tracking-wide bg-transparent md:w-auto md:inline md:mt-0 focus:outline-none"
              >
                <Icon name="uim:list-ul" color="gray" size="22px" />
                <span>Affiliate Networks</span>
                <Icon name="ep:arrow-down" />
              </button>
              <div class="absolute z-50 hidden bg-grey-200 group-hover:block">
                <div
                  class="pt-2 pb-4 bg-white z-50 dark:bg-black w-max px-0 shadow-lg transform translate-y-2 transition-opacity ease-linear duration-75"
                >
                  <div class="grid grid-cols-1 md:grid-cols-1">
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Finance Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Crypto Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Loan Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Casino Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Surveys Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Insurance Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Business Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Software Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Travel Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Sweepstakes Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Forex Trading Affiliate Networks</router-link
                    >
                    <router-link
                      to="/"
                      class="tracking-wide h-9 flex flex-row items-center w-full p-2 hover:bg-slate-50 dark:hover:bg-white/5 px-9 text-sm transition-all ease-linear duration-500"
                      >Health/Nutra Affiliate Networks</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <router-link
              id="style-2"
              to="/list-of-affiliate-offers"
              class="text-base px-3.5 h-9 flex gap-x-2 flex-row items-center border-r border-solid border-slate-200 dark:border-white/10"
            >
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
                class="lucide lucide-book-text"
              >
                <path
                  d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
              </svg>
              Affiliate Offers</router-link
            >
            <router-link
              id="style-2"
              to="/advertising-network"
              class="text-base px-3.5 h-9 flex space-x-1 flex-row items-center border-r border-solid border-slate-200 dark:border-white/10"
              ><Icon name="uim:list-ul" color="gray" size="22px" />Advertising
              Networks</router-link
            >
            <router-link
              id="style-2"
              to="/blog"
              class="text-base px-3.5 h-9 flex flex-row items-center"
              >Blog</router-link
            >
          </nav>
        </UContainer>
      </div>
    </header>
  </div>
</template>

<script>
import ResponsiveNav from "~/components/Responsive-Nav.vue";

export default {
  components: {
    ResponsiveNav,
  },
};
</script>
