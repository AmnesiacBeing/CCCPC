import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /*
      type: pc phone tv ...
      uuid: a valid uuid
      name: a valid name
      status: connected/offline
      props: Map(prop,value)
        prop:
          os: android linux windows ... + ver
          bluetooth: t/f
          network: t/f
          wifip2p: t/f
          camera: t/f
          nfc: t/f
          screenResolution DPI Orientation: x*y + dpi + orientation(vertical horizontal)
    */
    devices: [
      {
        type: 'pc',
        uuid: '7a80e87e-4fbf-4ce0-9401-7abb83c1f47f',
        name: '设备名称1',
        status: 'connected',
        props: {
          os: 'Linux 5.6',
          bluetooth: false,
          network: true,
          wifip2p: false,
          camera: true,
          nfc: true,
          screenResolution: '1920*1080',
          screenDPI: '1',
          screenOrientation: 'horizontal'
        }
      },
      {
        type: 'phone',
        uuid: '13ee00d7-3ddb-4db1-9896-a80c56604d02',
        name: '设备名称2',
        status: 'offline',
        props: {
          os: 'Android 10.0',
          bluetooth: false,
          network: true,
          wifip2p: false,
          camera: true,
          nfc: true,
          screenResolution: '2244*1080',
          screenDPI: '1',
          screenOrientation: 'vertical'
        }
      },
      {
        type: 'tv',
        uuid: '72aebf0f-a8fb-46b7-82ec-d1b326d7404e',
        name: '设备名称3',
        status: 'offline',
        props: {
          os: 'Android 8.0',
          bluetooth: false,
          network: true,
          wifip2p: false,
          camera: true,
          nfc: true,
          screenResolution: '2244*1080',
          screenDPI: '1',
          screenOrientation: 'vertical'
        }
      }
    ]
  },
  getters: {
    hasPairedDevice: state => () => {
      return state.devices.length
    },
    hasMoreThanOnePairedDevice: state => () => {
      return state.devices.length > 1
    },
    getConnectedDevice: state => () => {
      return state.devices.find((item) => item.status === 'connected')
    },
    getDeviceFromUUID: state => (uuid: string) => {
      return state.devices.find((item) => item.uuid === uuid)
    }
  },
  mutations: {
    addNewDevice (state, device) {
      state.devices.push(device)
    },
    removeDevice (state, uuid) {
      const index = state.devices.findIndex((item) => item.uuid === uuid)
      if (index > -1) { state.devices.splice(index, 1) }
    }
  },
  actions: {},
  modules: {}
})
