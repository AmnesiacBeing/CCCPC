<template>
  <v-card>
    <v-list subheader two-line>
      <v-subheader>
        {{ tipTitle }}
        <v-spacer />
        <v-btn icon title="连接新设备">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-subheader>
      <v-list-item @click=";" v-if="items.length>=1">
        <v-list-item-avatar>
          <v-icon v-text="items[0].type" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="items[0].name">设备名称</v-list-item-title>
          <v-list-item-subtitle v-text="items[0].status">设备状态</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click.stop="showRemoveDeviceDialog=true" icon>
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-group v-if="items.length>1">
        <template v-slot:activator>
          <v-list-item-subtitle>查看更多</v-list-item-subtitle>
        </template>
        <template v-for="(item,index) in items">
          <v-list-item :key="item.uuid" @click=";" v-if="index!=0">
            <v-list-item-avatar>
              <v-icon v-text="item.type" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.name">设备名称</v-list-item-title>
              <v-list-item-subtitle v-text="item.status">设备状态</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>
    <v-divider />
    <v-subheader>功能</v-subheader>
    <v-list>
      <template v-for="func in funcs">
        <v-list-item :key="func.name" @click="consolo.log(`func click`)">
          <v-list-item-avatar>
            <v-icon v-text="func.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="func.name">功能名称</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click="consolo.log(`icon click`);" icon>
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>

    <v-dialog max-width="290" v-model="showRemoveDeviceDialog">
      <v-card>
        <v-list dense>
          <v-list-item>设备名称：</v-list-item>
          <v-list-item>设备状态：</v-list-item>
          <v-list-item>UUID：</v-list-item>
          <v-list-item>操作系统：</v-list-item>
          <v-list-item>支持WiFi：</v-list-item>
          <v-list-item>支持WiFi-P2P：</v-list-item>
          <v-list-item>支持蓝牙：</v-list-item>
          <v-list-item>支持NFC：</v-list-item>
          <v-list-item>支持摄像头：</v-list-item>
          <v-list-item>屏幕分辨率：</v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn @click="showRemoveDeviceDialog = false" color="red darken-1" text>删除</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="showRemoveDeviceDialog = false" color="green darken-1" text>确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      tipTitle: '无配对设备',
      tipDeviceName: '设备名称',
      tipDeviceStatus: '设备状态',
      tipDialogTitle: '取消配对？',
      showRemoveDeviceDialog: false,
      dialog: false,
      items: [
        {
          type: 'mdi-laptop',
          uuid: '123456',
          name: '设备名称1',
          status: '已连接',
          infos: [
            { prop: '支持蓝牙', value: 'yes' }
          ]
        },
        {
          type: 'mdi-cellphone',
          uuid: '13sdfg345',
          name: '设备名称2',
          status: '没有状态',
          infos: [
            { prop: '支持蓝牙', value: 'yes' }
          ]
        },
        {
          type: 'mdi-laptop',
          uuid: '123434556',
          name: '设备名称3',
          status: '没有状态',
          infos: [
            { prop: '支持蓝牙', value: 'yes' }
          ]
        }
      ],
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
    }
  },
  methods: {
    openRemoveDeviceDialog () {
      this.showRemoveDeviceDialog = true
    },
    closeRemoveDeviceDialog () {
      this.showRemoveDeviceDialog = false
    }
  }
}
</script>

<style>
.card {
  width: 90%;
  margin: 15px auto;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.cardDeviceInfo {
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.test1 {
  background: yellow;
  height: 20px;
}

.test2 {
  background: blue;
}
</style>
