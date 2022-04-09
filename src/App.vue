<template>
  <div class="fill-height">
    <MessageService />
    <AppNoLayout v-if="$route.meta.noLayout" />
    <AppLayout v-else />
  </div>
</template>

<script>
import AppLayout from "@/modules/shared/components/app-layout";
import AppNoLayout from "@/modules/shared/components/app-no-layout";
import MessageService from "@/modules/shared/components/message-service";
export default {
  components: {
    AppLayout,
    AppNoLayout,
    MessageService,
  },
};
</script>
<style></style>
