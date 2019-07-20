<template>
<div class="entry-header-html">

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

</div>
</template>
