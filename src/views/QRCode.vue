<template>
  <v-card class="center">
    <v-card-title>这里应该有一些提示信息……</v-card-title>
    <qrcode-vue :size="size" :value="value" level="H"></qrcode-vue>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import QrcodeVue from 'qrcode.vue'

export default Vue.extend({
  data () {
    return {
      value: 'https://example.com',
      size: 300
    }
  },
  components: {
    QrcodeVue
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
