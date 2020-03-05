<template>
  <v-card class="center">

    <qrcode-drop-zone @decode="onDecode" @init="logErrors">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </qrcode-drop-zone>

    <qrcode-capture @decode="onDecode" v-if="noStreamApiSupport" />
  </v-card>
</template>

<script>
import Vue from 'vue'
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default Vue.extend({
  components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },
  data: () => ({
    result: '',
    noStreamApiSupport: false
  }),
  methods: {
    onDecode (result) {
      this.result = result
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
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
