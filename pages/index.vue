<template lang="pug">
  .page-index.header-image-only.page-archive.globalheader-off
    #container
      #container-inner
        //- header
        c_Header
        c_TopEditarea
        //- contents
        #content
          #content-inner
            #wrapper
              #main
                #main-inner
                  .archive-entries
                    c_ArchiveEntry
                    c_ArchiveEntry
                    c_ArchiveEntry
                    c_ArchiveEntry
                    c_ArchiveEntry
                    c_ArchiveEntry
                  .pager.autopagerize_insert_before
                    span.pager-next
                      a(href="#" rel="next") 次のページ
            c_Box2
        c_BottomEditarea
</template>
