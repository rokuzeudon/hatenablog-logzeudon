import Vue from 'vue'

import Header from '~/components/layouts/header'
import TopEditarea from '~/components/layouts/top-editarea'
import BottomEditarea from '~/components/layouts/bottom-editarea'
import Box2 from '~/components/layouts/box2'

Vue.mixin({
  components: {
    Header,
    TopEditarea,
    BottomEditarea,
    Box2
  }
})
