<template>
<div class="entry-footer-html">
  <!--ここから-->

<div class="hatena-module-title">記事を共有する</div>
<ul class="share-btns">
  <li>
    <a href="//twitter.com/intent/tweet?text={Title} - {BlogTitle} {URLEncodedPermalink}" class="share-btn">
      <img src="//data.rokuzeudon.com/blog/img/icn-twitter.svg" alt="Twitter">
    </a>
  </li>
  <li>
    <a href="//www.facebook.com/sharer.php?u={URLEncodedPermalink}" class="share-btn">
      <img src="//data.rokuzeudon.com/blog/img/icn-facebook.svg" alt="Facebook">
    </a>
  </li>
  <li>
    <a href="//b.hatena.ne.jp/entry/{URLEncodedPermalink}" data-hatena-bookmark-title="{Title}" data-hatena-bookmark-layout="simple" class="share-btn">
      <img src="//data.rokuzeudon.com/blog/img/icn-hatena.svg" alt="はてなブックマーク">
    </a>
  </li>
  <li>
      <button data-clipboard-text="{Title} - {BlogTitle} {Permalink}" class="share-btn copy-btn">Copy Title/URL</button>
  </li>
</ul>
<div class="hatena-module-title">この記事を書いた人</div>
<div class="author-box">
  <div class="author-left">
    <div class="author-img">
      <img src="//cdn-ak.f.st-hatena.com/images/fotolife/r/rokuzeudon/20181113/20181113094535.png" alt="rokuzeudon" class="">
    </div>
    <div class="author-name">
      <a href="../about#aboutme">ろくぜうどん</a>
    </div>
    <div class="author-id">id:rokuzeudon</div>
  </div>
  <div class="author-right">
    <div class="author-message">
      <p>名古屋で働いている、UI/UXについて考えるのが好きなWebデザイナーです。現在はインハウスで自社開発ツールのデザインに携わっています。</p>
      <div class="share-btns">
        <a class="share-btn" href="https://twitter.com/rokuzeudon"><img src="//data.rokuzeudon.com/blog/img/icn-twitter.svg" alt="Twitter"> フォロー</a>
        <a class="share-btn" href="http://blog.hatena.ne.jp/rokuzeudon/blog.rokuzeudon.com/subscribe" onclick="window.open('http://blog.hatena.ne.jp/rokuzeudon/blog.rokuzeudon.com/subscribe', '', 'width=500,height=400'); return false;"><img src="//data.rokuzeudon.com/blog/img/icn-hatenablog.svg" alt="はてなブログ"> 読者登録</a>
      </div>
    </div>
  </div>
</div>

<!--ここまで-->
</div>
</template>
