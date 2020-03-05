<template>
  <v-card class="center">
    <v-card-title>该设备二维码与信息：</v-card-title>
    <qrcode-vue :size="size" :value="value" level="H"></qrcode-vue>
    <device-info-detail />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import QrcodeVue from 'qrcode.vue'
import DeviceInfoDetail from '@/components/DeviceInfoDetail.vue'

export default Vue.extend({
  data: () => ({
    value: 'https://example.com',
    size: 240
  }),
  components: {
    QrcodeVue,
    DeviceInfoDetail
  }
})
</script>

<style>
.center {
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
