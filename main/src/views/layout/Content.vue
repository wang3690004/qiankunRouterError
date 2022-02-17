<template>
  <div class="content">
    <div style="width: 100%; height: 100px; background-color: grey">
      <button @click="$router.push({ path: '/app/cmdb/general' })">cmdb</button>
      <button @click="$router.push({ path: '/app/auth/usergeneral' })">
        auth
      </button>
    </div>
    <section id="micotemplate" style="width: 100%; height: 100%"></section>
  </div>
</template>

<script>
import start from "@/micro/index";
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start({
        prefetch: "all",
      });
    }
  },
  methods: {
    getSubApp(url) {
      history.pushState(null, null, url);
    },
  },
};
</script>
<style>
div[data-name="CMDBApp"],
div[data-name="AUTHApp"] {
  height: 100%;
  width: 100%;
}
</style>
