// @flow
import initState from '@/redux/store/initState'
import { createReducer } from './index'
import {
  SET_HOME_FEED
} from '../consts'

const homeFeed = createReducer(initState.homeFeed, {
  [SET_HOME_FEED]: (state, { payload }) => {
    const [ daily ] = payload.dailyList
    const { videoList } = daily
    return videoList
  }
})

export default {
  homeFeed
}
// 等同于下面这段
// export default function (state = initState.homeFeed, { type, payload }) {

//   switch (type) {

//     case FETCH_HOME_FEED:
//       return reducerHomeFeed(payload)

//     default:
//       return state

//   }

// }
