<template>
  <v-app>
    <div id="appbar-drag-region"></div>
    <v-app-bar app color="primary" dark>
      <v-btn icon title="返回">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ tipTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon title="置顶窗口">
        <v-icon>{{lock?'mdi-lock':'mdi-lock-open'}}</v-icon>
      </v-btn>
      <v-btn icon title="自适应窗口">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon title="关闭窗口">
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

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    tipTitle: 'CCC',
    lock: false
  })
})
</script>

<style>
html {
  overflow: hidden !important;
}

#appbar-drag-region {
  position: fixed;
  left: 48px;
  top: 2px;
  right: 144px;
  height: 48px;
  -webkit-app-region: drag;
}

.titleBar {
  height: 40px;
  padding: 0 0;
  background: #409eff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tipTitle {
  flex: 1;
  color: white;
}
</style>
