import Vue from 'vue'

import c_ArchiveEntry from '~/components/layouts/archive-entry'
import c_Header from '~/components/layouts/header'
import c_Box2 from '~/components/layouts/box2'
import c_TopEditarea from '~/components/edit/top-editarea'
import c_BottomEditarea from '~/components/edit/bottom-editarea'
import c_EntryHeaderHtml from '~/components/edit/entry-header-html'
import c_EntryFooterHtml from '~/components/edit/entry-footer-html'

Vue.mixin({
  components: {
    c_ArchiveEntry,
    c_Header,
    c_Box2,
    c_TopEditarea,
    c_BottomEditarea,
    c_EntryHeaderHtml,
    c_EntryFooterHtml
  }
})
