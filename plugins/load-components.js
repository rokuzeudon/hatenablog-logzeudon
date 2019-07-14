import Vue from 'vue'

import c_Header from '~/components/layouts/header'
import c_TopEditarea from '~/components/layouts/top-editarea'
import c_BottomEditarea from '~/components/layouts/bottom-editarea'
import c_Box2 from '~/components/layouts/box2'

Vue.mixin({
  components: {
    c_Header,
    c_TopEditarea,
    c_BottomEditarea,
    c_Box2
  }
})
