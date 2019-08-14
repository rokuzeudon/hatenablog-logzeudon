<template>
<div id="bottom-editarea">
<!--ここから-->

<footer id="footer">
  <iframe src="https://blog.hatena.ne.jp/rokuzeudon/rokuzeudon.hatenablog.jp/subscribe/iframe" allowtransparency="true" frameborder="0" scrolling="no" width="150" height="28"></iframe>

  <p><a href="/about">このブログについて</a>｜<a href="/about#privacy">プライバシーポリシー</a></p>
  <p>©︎ rokuzeudon 2018</p>
</footer>

<script type="text/javascript" src="https://cdn.blog.st-hatena.com/js/external/jquery.min.js?version=1.12.3"></script>
<!--この記事のURLとタイトルをコピーする-->
<script src="//cdn.jsdelivr.net/clipboard.js/1.5.13/clipboard.min.js"></script>
<script>
  var clipboard = new Clipboard('.copy-btn');
  $(function(){
    $('.copy-btn').click(function(){
      $(this).addClass('copied');
      $(this).text('コピーしました');
    });
  });
</script>

<!--ここまで-->
</div>
</template>
