<template>
  <v-list-item @click="$emit('click')">
    <v-list-item-avatar>
      <v-icon v-text="getDeviceTypeIcon(device.type)" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="device.name">设备名称</v-list-item-title>
      <v-list-item-subtitle v-text="getDeviceStatus(device.status)">设备状态</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click.stop="$emit('info',device)" icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.component('device-info', {
  props: ['device'],
  methods: {
    getDeviceTypeIcon (type: string) {
      switch (type) {
        case 'pc':
          return 'mdi-laptop'
        case 'phone':
          return 'mdi-cellphone'
        case 'tv':
          return 'mdi-television'
        default:
          return 'mdi-help'
      }
    },
    getDeviceStatus (status: string) {
      if (status === 'connected') {
        return '已连接'
      } else {
        return '离线'
      }
    }
  }
})
</script>
