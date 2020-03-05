<template>
  <v-app>
    <div id="appbar-drag-region"></div>
    <v-app-bar app color="primary" dark>
      <v-btn :disabled="cantBack()" @click="goBack()" icon title="返回">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title v-text="tipTitle()"></v-toolbar-title>
      <v-spacer />
      <v-btn @click="toggleLock()" icon title="置顶窗口">
        <v-icon>{{ lock ? "mdi-lock" : "mdi-lock-open" }}</v-icon>
      </v-btn>
      <v-btn @click="reset()" icon title="自适应窗口">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn @click="close()" icon title="关闭窗口">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { remote } from 'electron'

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    lock: false
  }),
  methods: {
    // 标题栏变一下而已
    tipTitle () {
      const device = this.$store.getters.getConnectedDevice()
      if (device !== undefined) return '已连接到 ' + device.name
      else return '未连接'
    },
    // 决定左上角那个按钮能不能点下去
    cantBack () {
      return this.$router.currentRoute.path === '/'
    },
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    // 设置窗口是否置顶
    toggleLock () {
      this.lock = !this.lock
      remote.getCurrentWindow().setAlwaysOnTop(this.lock)
    },
    // 重新设定窗口大小
    reset () {
      remote.getCurrentWindow().setContentSize(480, 800)
    },
    // 关闭窗口
    close () {
      remote.getCurrentWindow().close()
    }
  }
})
</script>

<style>
/* vuetify在默认情况下会显示滚动条，隐藏掉 */
html {
  overflow: hidden !important;
  user-select: none;
}

/* 窗口拖动区域 */
#appbar-drag-region {
  position: fixed;
  left: 48px;
  top: 2px;
  right: 144px;
  height: 48px;
  -webkit-app-region: drag;
}
</style>
