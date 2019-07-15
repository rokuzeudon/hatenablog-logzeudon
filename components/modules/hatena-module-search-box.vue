<template lang="pug">
  .hatena-module.hatena-module-search-box
    .hatena-module-title 検索 Search
    .hatena-module-body
      form.search-form(role="search" action="https://6qd.hateblo.jp/search" method="get")
        input(type="text" name="q" class="search-module-input" value="" placeholder="記事を検索" required="")
        input(type="submit" value="検索" class="search-module-button")
</template>
