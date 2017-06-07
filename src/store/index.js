import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as Types from './types'
import createLogger from 'vuex/dist/logger'
const state = {
  user: {}
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: __DEV__ ? [createLogger({
    collapsed: false, // 自动展开记录的 mutation
    transformer(state) {
      // 在开始记录之前转换状态
      // 例如，只返回指定的子树
      return state
    },
    mutationTransformer(mutation) {
      // mutation 按照 { type, payload } 格式记录
      // 我们可以按任意方式格式化
      return mutation
    }
  })] : []
})