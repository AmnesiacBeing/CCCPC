<template>
  <v-card style="margin:10px 20px;">
    <v-list subheader two-line>
      <v-subheader>
        {{ this.$store.state.devices.length == 0 ? "无" : "" }}配对设备
        <v-spacer />
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-btn outlined title="连接新设备" v-on="menu">
              添加
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('qrcode')">
              <v-list-item-icon>
                <v-icon>mdi-qrcode</v-icon>
              </v-list-item-icon>
              <v-list-item-title>显示二维码</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('qrcodescan')">
              <v-list-item-icon>
                <v-icon>mdi-qrcode-scan</v-icon>
              </v-list-item-icon>
              <v-list-item-title>扫描二维码</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-subheader>
      <device-info
        :device="this.$store.state.devices[0]"
        @click=";"
        @info="openDialog($event)"
        v-if="this.$store.state.devices.length >= 1"
      />
      <v-list-group v-if="this.$store.state.devices.length > 1">
        <template v-slot:activator>
          <v-list-item-subtitle>查看更多</v-list-item-subtitle>
        </template>
        <template v-for="(item, index) in this.$store.state.devices">
          <device-info
            :device="item"
            :key="item.uuid"
            @click=";"
            @info="openDialog($event)"
            v-if="index != 0"
          />
        </template>
      </v-list-group>
    </v-list>
    <v-divider />
    <v-list>
      <v-subheader>
        功能
        <v-spacer />
        <v-btn outlined title="设置">
          设置
          <v-icon>mdi-settings</v-icon>
        </v-btn>
      </v-subheader>
      <template v-for="func in funcs">
        <v-list-item :key="func.name" @click=";">
          <v-list-item-avatar>
            <v-icon v-text="func.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="func.name">功能名称</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click=";" icon>
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>

    <v-dialog
      max-width="80%"
      v-model="showDialog"
      v-show="selectedDevice !== undefined"
    >
      <v-card>
        <device-info-detail :device="selectedDevice" />
        <v-card-actions>
          <v-btn
            @click="deleteDevice(selectedDevice.uuid)"
            color="red darken-1"
            text
            >删除</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click="showDialog = false" color="green darken-1" text
            >确定</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import DeviceInfo from '@/components/DeviceInfo.vue'
import DeviceInfoDetail from '@/components/DeviceInfoDetail.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    DeviceInfo,
    DeviceInfoDetail
  },
  data: () => ({
    showDialog: false,
    selectedDevice: undefined,
    funcs: [
      {
        icon: 'mdi-clipboard-flow',
        name: '分享剪贴板'
      },
      {
        icon: 'mdi-share',
        name: '分享文件'
      },
      {
        icon: 'mdi-cast',
        name: '分享屏幕'
      }
    ]
  }),
  methods: {
    openDialog (device: undefined) {
      this.showDialog = true
      this.selectedDevice = device
    },
    closeDialog () {
      this.selectedDevice = undefined
      this.showDialog = false
    },
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
    },
    deleteDevice (uuid: string) {
      this.closeDialog()
      this.$store.commit('removeDevice', uuid)
    }
  }
})
</script>
