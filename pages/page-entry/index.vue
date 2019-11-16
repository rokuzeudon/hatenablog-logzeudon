<template lang="pug">
  .page-entry.header-image-only.globalheader-off
    #container
      #container-inner
        //- header
        c_Header
        c_TopEditarea
        #top-box
          .breadcrumb
            .breadcrumb-inner
              a.breadcrumb-link(href="https://blog.rokuzeudon.com/"): span トップ
              span.breadcrumb-gt &gt;
              span.breadcrumb-child
                a.breadcrumb-child-link(href="https://blog.rokuzeudon.com/category/%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F"): span つくった
              span.breadcrumb-gt &gt;
              span.breadcrumb-child
                span AdobeXDで使えるBootstrap4のテンプレートデータをつくってみた（Mac向け）
        //- contents
        #content
          #content-inner
            #wrapper
              #main
                #main-inner
                  .entry.hentry.date-first.autopagerize_page_element
                    .entry-inner
                      //- entry header
                      .entry-header
                        .date.entry-date.first
                          nuxt-link(to="page-archive-category")
                            time(datetime="2019-07-14" title="2019-07-14")
                              span.date-year 2019
                              span.hyphen -
                              span.date-month 07
                              span.hyphen -
                              span.date-day 14
                        h1.entry-title: a.entry-title-link.bookmark(href="#") サンプルエントリーです。
                        .entry-categories.categories
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") blog
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") diary
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") study
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") log
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") はてなブログ
                          nuxt-link.entry-category-link.category-diary(to="page-archive-category") Adobe
                        .customized-header
                          c_EntryHeaderHtml
                        .entry-header-menu 編集
                      //- entry content
                      .entry-content
                        p.mainimage
                          span.bg(style="background:url(//data.rokuzeudon.com/blog/img/bootstrap-xd.svg) no-repeat;")
                          img.mv(title="" src="//data.rokuzeudon.com/blog/img/bootstrap-xd.svg" alt="AdobeXDで使えるBootstrap4のテンプレートデータをつくってみた（Mac向け）")
                        p テキストが入ります
                        ul.table-of-contents
                          li 
                            a(href="#heading1") 大見出し
                            ul
                              li
                                a(href="#heading2") 中見出し
                                ul
                                  li
                                    a(href="#heading3s") 小見出し
                        h3#heading1 大見出し
                        h4#heading2 中見出し
                        h5#heading3s 小見出し
                        ul
                          li テキストが入ります。
                            ul
                              li テキストが入ります。
                                ul
                                  li テキストが入ります。
                                  li テキストが入ります。
                                  li テキストが入ります。
                                  li テキストが入ります。
                        p 数字リスト
                        ol
                          li テキストが入ります。
                            ol
                              li テキストが入ります。
                                ol
                                  li テキストが入ります。
                          li テキストが入ります。
                            ol
                              li テキストが入ります。
                          li テキストが入ります。
                        table
                          thead
                            tr
                              th 見出し
                              th 見出し
                              th 見出し
                          tbody
                            tr
                              td テキストが入ります。
                              td テキストが入ります。テキストが入ります。
                              td テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        blockquote
                          p 引用テキストが入ります。引用テキストが入ります。引用テキストが入ります。引用テキストが入ります。引用テキストが入ります。引用テキストが入ります。引用テキストが入ります。
                          //- 楽天
                        pre.code.lang-html
                          <span class="synIdentifier">&lt;</span><span class="synStatement">div</span><span class="synIdentifier"> </span><span class="synType">id</span><span class="synIdentifier">=</span><span class="synConstant">"bodymovin"</span><span class="synIdentifier">&gt;&lt;/</span><span class="synStatement">div</span><span class="synIdentifier">&gt;</span>
                          <span class="synIdentifier">&lt;</span><span class="synStatement">script</span><span class="synIdentifier"> </span><span class="synType">src</span><span class="synIdentifier">=</span><span class="synConstant">"bodymovin.js"</span><span class="synIdentifier">&gt;&lt;/</span><span class="synStatement">script</span><span class="synIdentifier">&gt;</span>
                          <span class="synIdentifier">&lt;</span><span class="synStatement">script</span><span class="synIdentifier">&gt;</span>
                          <span class="synIdentifier">var</span><span class="synSpecial"> animData = </span><span class="synIdentifier">{</span>
                          <span class="synSpecial">    wrapper: </span><span class="synStatement">document</span><span class="synSpecial">.getElementById</span>(<span class="synConstant">'bodymovin'</span>)<span class="synSpecial">,</span> <span class="synSpecial">    wrapper: </span><span class="synStatement">document</span><span class="synSpecial">.getElementById</span>(<span class="synConstant">'bodymovin'</span>)<span class="synSpecial">,</span> <span class="synSpecial">    wrapper: </span><span class="synStatement">document</span><span class="synSpecial">.getElementById</span>(<span class="synConstant">'bodymovin'</span>)<span class="synSpecial">,</span> <span class="synSpecial">    wrapper: </span><span class="synStatement">document</span><span class="synSpecial">.getElementById</span>(<span class="synConstant">'bodymovin'</span>)<span class="synSpecial">,</span>
                          <span class="synSpecial">    animType: </span><span class="synConstant">'svg'</span><span class="synSpecial">,</span>
                          <span class="synSpecial">    loop: </span><span class="synConstant">true</span><span class="synSpecial">,</span>
                          <span class="synSpecial">    prerender: </span><span class="synConstant">true</span><span class="synSpecial">,</span>
                          <span class="synSpecial">    autoplay: </span><span class="synConstant">true</span><span class="synSpecial">,</span>
                          <span class="synSpecial">    path: </span><span class="synConstant">'data.json'</span>
                          <span class="synIdentifier">}</span><span class="synSpecial">;</span>
                          <span class="synIdentifier">var</span><span class="synSpecial"> anim = bodymovin.loadAnimation</span>(<span class="synSpecial">animData</span>)<span class="synSpecial">;</span>
                          <span class="synIdentifier">&lt;/</span><span class="synStatement">script</span><span class="synIdentifier">&gt;</span>
                        .hatena-asin-detail.hatena-rakuten-detail
                          a(href="#"): img.hatena-asin-detail-image(alt="" title="" src="https://thumbnail.image.rakuten.co.jp/@0_gold/f232092-hekinan/bn/201906/h004-029.jpg?_ex=128x128")
                          .hatena-asin-detail-info
                            p.hatena-asin-detail-title: a(href="#") 【ふるさと納税】甘さ抜群!!トマト嫌いも食べられるトマトベリー約1.6kg　H004-029
                            ul
                              li
                                span.hatena-asin-detail-label ジャンル:
                                a(href="#" target="_blank") トマト
                              li
                                span.hatena-asin-detail-label ショップ:
                                a(href="" target="_blank") 愛知県碧南市
                              li: <span class="hatena-asin-detail-label">価格:</span> 10,000円
                          .hatena-asin-detail-foot
                        //- amazon
                        .hatena-asin-detail
                          a(href="#"): img.hatena-asin-detail-image(alt="" title="" src="https://images-fe.ssl-images-amazon.com/images/I/41gpgkJyo1L._SL160_.jpg")
                          .hatena-asin-detail-info
                            p.hatena-asin-detail-title
                              a href="#" 伊藤園 理想のトマト (紙パック)200ml×24本</a>
                            ul
                              li: <span class="hatena-asin-detail-label">出版社/メーカー:</span> 伊藤園
                              li: <span class="hatena-asin-detail-label">発売日:</span> 2016/09/12
                              li: <span class="hatena-asin-detail-label">メディア:</span> 食品&amp;飲料
                              li: a(href="#" target="_blank") この商品を含むブログを見る
                          .hatena-asin-detail-foot
                        //- figure
                        figure.figure-image.figure-image-fotolife
                          .images-row.mceNonEditable
                            span(itemscope="" itemtype="http://schema.org/Photograph"): img.hatena-fotolife(src="https://cdn-ak.f.st-hatena.com/images/fotolife/r/rokuzeudon/20190603/20190603122406.jpg" alt="" title="" itemprop="image")
                            span(itemscope="" itemtype="http://schema.org/Photograph"): img.hatena-fotolife(src="https://cdn-ak.f.st-hatena.com/images/fotolife/r/rokuzeudon/20190603/20190603122402.jpg" alt="" title="" itemprop="image")
                          figcaption 横並びの写真
                        figure.figure-image.figure-image-fotolife
                          span(itemscope="" itemtype="http://schema.org/Photograph"): img.hatena-fotolife(src="https://cdn-ak.f.st-hatena.com/images/fotolife/r/rokuzeudon/20190603/20190603122456.jpg" alt="" title="" itemprop="image")
                          span(itemscope="" itemtype="http://schema.org/Photograph"): img.hatena-fotolife(src="https://cdn-ak.f.st-hatena.com/images/fotolife/r/rokuzeudon/20190603/20190603122451.jpg" alt="" title="" itemprop="image")
                          figcaption 縦並びの写真
                        p 脚注<a href="#f-303d93fc" name="fn-303d93fc" title="脚注の中身">*1</a>です。
                        .footnote
                          p.footnote
                            a(href="#fn-303d93fc" name="f-303d93fc" class="footnote-number") *1
                            span.footnote-delimiter :
                            span.footnote-text 脚注の中身

                      //- entry footer
                      .entry-footer
                        p.entry-footer-section
                          span.author.vcard: span.fn(data-load-nickname="1" data-user-name="rokuzeudon") rokuzeudon
                          span.entry-footer-time
                            nuxt-link(to="page-archive-category"): time.updated(data-relative="" datetime="2019-07-14T06:44:05Z" title="2019-07-14T06:44:05Z" pubdate="") 14時間前
                        .hatena-star-container
                          span.hatena-star-comment-container: img.hatena-star-comment-button(src="https://s.hatena.ne.jp/images/comment.gif" tabindex="0" alt="Comments" title="Comments" style="cursor: pointer; margin: 0px; padding: 0px; border: none; vertical-align: middle; display: none;")
                          span.hatena-star-star-container: img.hatena-star-add-button(src="https://cdn.blog.st-hatena.com/images/theme/star/hatena-star-add-button.svg" tabindex="0" alt="Add Star" title="Add Star" style="cursor: pointer; margin: 0px 3px; padding: 0px; border: none; vertical-align: middle;")
                        .customized-footer
                          .entry-footer-modules#entry-footer-secondary-modules
                            .hatena-module.hatena-module-related-entries
                              .hatena-module-title 関連記事
                              .hatena-module-body
                                ul.hatena-urllist.urllist-with-thumbnails.related-entries
                                  li.urllist-item.related-entries-item
                                    .urllist-item-inner.related-entries-item-inner
                                      a.urllist-image-link.related-entries-image-link(href="https://www.hello-ferret.com/entry/2019/04/26/015923")
                                        img.urllist-image.related-entries-image(alt="" src="https://cdn.image.st-hatena.com/image/square/e213191390f373cc89f01921887796d2b9a36d4e/backend=imagemagick;height=100;version=1;width=100/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fr%2Frokuzeudon%2F20190426%2F20190426015436.jpg" title="" width="100")
                                      .urllist-date-link.related-entries-date-link
                                        nuxt-link(to="page-archive-category")
                                          time(pubdate="" datetime="2019-04-25T16:59:23Z" title="2019-04-25T16:59:23Z") 2019-04-26
                                      a.urllist-title-link.related-entries-title-link.urllist-title.related-entries-title(href="#") フェレットたちの最近の様子
                                      .urllist-entry-body.related-entries-entry-body 最近は特別変わったこともなく平和に元気に過ごしています。 す…
                          c_EntryFooterHtml
                        .comment-box
                          a.leave-comment-title コメントを書く
                          ul.comment
                            li.entry-comment.comment-hatena-user
                              p.comment-user-name
                                img.hatena-id-icon(src="https://cdn.profile-image.st-hatena.com/users/rokuzeudon/profile.png" alt="" title="")
                                a.comment-user-id(href="#")
                                  span.comment-nickname id:rokuzeudon
                              .comment-content
                                p
                                  | 返信遅くなりすいません。無事出来ました！
                                  | ありがとうございます！
                              p.comment-metadata
                                time(datetime="2019-04-27T16:26:26Z" data-relative="" data-epoch="1556382386000") 78日前
                                span.hatena-star-comment-container: img.hatena-star-comment-button(src="https://s.hatena.ne.jp/images/comment.gif" tabindex="0" alt="Comments" title="Comments" style="cursor: pointer; margin: 0px; padding: 0px; border: none; vertical-align: middle; display: none;")
                                span.hatena-star-star-container
                                  img(src="https://cdn.blog.st-hatena.com/images/theme/star/hatena-star-add-button.svg?version=a92f401ca7c30a0f4bba9d391f53f660" tabindex="0" alt="Add Star" title="Add Star" class="hatena-star-add-button" style="cursor: pointer; margin: 0px 3px; padding: 0px; border: none; vertical-align: middle;")
                                  a(href="#")
                                    span.hatena-big-star-star-container
                                      img.hatena-star-user(src="https://cdn.profile-image.st-hatena.com/users/rokuzeudon/profile.png" tabindex="0" style="padding: 0px; border: none;")
                                      img.hatena-star-star(src="https://s.hatena.ne.jp/images/star.gif" tabindex="0" style="padding: 0px; border: none;" alt="rokuzeudon" title="")
                                  a(href="#")
                                    span.hatena-big-star-star-container
                                      img.hatena-star-user(src="https://cdn.profile-image.st-hatena.com/users/rokuzeudon/profile.png" tabindex="0" style="padding: 0px; border: none;")
                                      img.hatena-star-star(src="https://s.hatena.ne.jp/images/star.gif" tabindex="0" style="padding: 0px; border: none;" alt="rokuzeudon" title="")
                                  a(href="#")
                                    span.hatena-big-star-star-container
                                      img.hatena-star-user(src="https://cdn.profile-image.st-hatena.com/users/rokuzeudon/profile.png" tabindex="0" style="padding: 0px; border: none;")
                                      img.hatena-star-star(src="https://s.hatena.ne.jp/images/star.gif" tabindex="0" style="padding: 0px; border: none;" alt="rokuzeudon" title="")
                              a.comment-delete-button(href="#")
                                img(src="//blog.hatena.ne.jp/api/comment.delete.image?comment=17680117127084552982&amp;blog=12921228815714864405" alt="delete")
                            li.read-more-comments
                              a もっと読む
                  .pager.pager-permalink.permalink
                    span.pager-prev
                      a(href="#" rel="prev") <span class="pager-arrow">« </span> こがねっちの体調が良くなかったので病院…
                    span.pager-next
                      a(href="#" rel="next") フェレットたちは4歳になりました <span class="pager-arrow"> »</span>
              aside#box1
                #box1-inner
            c_Box2
        c_BottomEditarea
</template>
