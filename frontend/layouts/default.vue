<template>
  <div class="defaultLayout">
    <Header />
    <slot />

    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
};
</script>
