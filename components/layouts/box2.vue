<template lang="pug">
  #box2
    #box2-inner
      .hatena-module.hatena-module-search-box
        .hatena-module-title 検索
        .hatena-module-body
          form.search-form(role="search" action="https://6qd.hateblo.jp/search" method="get")
            input(type="text" name="q" class="search-module-input" value="" placeholder="記事を検索" required="")
            input(type="submit" value="検索" class="search-module-button")
      .hatena-module.hatena-module-category
        .hatena-module-title カテゴリー
        .hatena-module-body
          ul.hatena-urllist
            li: nuxt-link(to="page-archive-category") blog (1)
            li: nuxt-link(to="page-archive-category") diary (1)
            li: nuxt-link(to="page-archive-category") study (1)
            li: nuxt-link(to="page-archive-category") log (1)
            li: nuxt-link(to="page-archive-category") はてなブログ (1)
            li: nuxt-link(to="page-archive-category") Adobe (1)
</template>
