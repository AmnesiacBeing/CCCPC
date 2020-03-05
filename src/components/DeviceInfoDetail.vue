<template>
  <v-list dense>
    <v-list-item
      >设备名称：{{
        device !== undefined ? device.name : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >设备状态：{{
        device !== undefined
          ? getDeviceStatus(device.status)
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >UUID：{{
        device !== undefined ? device.uuid : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >操作系统：{{
        device !== undefined ? device.props.os : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >支持网络：{{
        device !== undefined
          ? device.props.network == true
            ? "是"
            : "否"
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >支持WiFi-P2P：{{
        device
          ? device.props.wifip2p == true
            ? "是"
            : "否"
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >支持蓝牙：{{
        device
          ? device.props.bluetooth == true
            ? "是"
            : "否"
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >支持NFC：{{
        device
          ? device.props.nfc == true
            ? "是"
            : "否"
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >支持摄像头：{{
        device
          ? device.props.camera == true
            ? "是"
            : "否"
          : "未知错误"
      }}</v-list-item
    >
    <v-list-item
      >屏幕分辨率：{{
        device ? device.props.screenResolution : "未知错误"
      }}</v-list-item
    >
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.component('device-info-detail', {
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
