<template lang="pug">
  .archive-entry.autopagerize_page_element
    .archive-entry-header
      .date.archive-date
        nuxt-link(to="page-archive-category")
          time(datetime="2019-07-14" title="2019-07-14")
            span.date-year 2019
            span.hyphen -
            span.date-month 07
            span.hyphen -
            span.date-day 14
      h1.entry-title
        nuxt-link.entry-title-link(to="page-entry") 記事タイトル記事タイトル記事タイトル記事タイトル
    .categories
      nuxt-link.archive-category-link(to="page-archive-category") blog
      nuxt-link.archive-category-link(to="page-archive-category") diary
      nuxt-link.archive-category-link(to="page-archive-category") study
      nuxt-link.archive-category-link(to="page-archive-category") log
      nuxt-link.archive-category-link(to="page-archive-category") はてなブログ
      nuxt-link.archive-category-link(to="page-archive-category") Adobe
    nuxt-link.entry-thumb-link(to="page-entry")
      .entry-thumb(style="background-image: url('https://cdn.image.st-hatena.com/image/square/41be5e45a9e20944bb099fedff4e00a5ee538bc9/backend=imagemagick;height=500;quality=80;version=1;width=500/https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_gold%2Ff232092-hekinan%2Fbn%2F201906%2Fh004-029.jpg%3F_ex%3D128x128');")
    .archive-entry-body
      p.entry-description テキストが入ります。テキストが入ります。 大見出し 中見出し 小見出し 大見出し 中見出し 小見出し テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。 テキストが入ります。 数字リスト テキス…
      .social-buttons
        a.bookmark-widget-counter(href="#") <img src="https://b.hatena.ne.jp/entry/image/https://6qd.hateblo.jp/entry/2019/07/14/154556" alt="はてなブックマーク - カテゴリー付与したサンプル記事">
        span.star-container
          span.hatena-star-comment-container <img src="https://s.hatena.ne.jp/images/comment.gif" tabindex="0" alt="Comments" title="Comments" class="hatena-star-comment-button" style="cursor: pointer; margin: 0px; padding: 0px; border: none; vertical-align: middle; display: none;">
          span.hatena-star-star-container <img src="https://cdn.blog.st-hatena.com/images/theme/star/hatena-star-add-button.svg" tabindex="0" alt="Add Star" title="Add Star" class="hatena-star-add-button" style="cursor: pointer; margin: 0px 3px; padding: 0px; border: none; vertical-align: middle;">
</template>
