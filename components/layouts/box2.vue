<template lang="pug">
  #box2
    #box2-inner
      m_SearchBox
      m_Category
</template>

<script>
import m_Category from '~/components/modules/hatena-module-category'
import m_SearchBox from '~/components/modules/hatena-module-search-box'

export default {
  components: {
    m_SearchBox,
    m_Category
  }
}
</script>
