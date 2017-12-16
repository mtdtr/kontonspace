id = setInterval( function(){
  $('.wrapper').removeClass('opnone');
}, 250);

setTimeout( function(){
    clearInterval(id);
}, 1000);

function mtdshow(){
  document.getElementById('membervoid').innerHTML = '<h3>MTDTR</h3><p>このサークルの主宰者。どうしようもない系廃人。</p><p>産業廃棄物みたいなこのサイトを作った犯人はこいつです。</p><p>ピアノを弾いてるのもこいつです。</p><p><del>本当は一人なのに同人サークルとか言ってるのもこいつです。</del><b>祝!ぼっちサークル卒業!</b></p><p><a href="https://twitter.com/MTDTR_tk" target="_blank"><img class="menu" height="50px" src="img/twitterlogo.png" alt="twitter" title=この廃人のツイッターを訪ねる></a><a href="http://mstdn.jp/@MTDTR" target="_blank"><img class="menu" height="40px" src="https://mstdn.jp/favicon.ico" alt="mstdn" title=この廃人のマストドンを訪ねる></a><a href="https://github.com/MTDTR" target="_blank"><img class="menu" height="50px" src="img/github.png" alt="github" title=この廃人のGitHubを訪ねる></a>';
}

function pianoshow(){
  document.getElementById('membervoid').innerHTML = '<h3>ピアノ</h3><p>ろーらんど王国生まれの電子ピアノ。</p><p>このサークルに絶対必要なメンバー。</p><p>初期にはこの人がいないと同人サークルとして成立しなかったんだよね。。。</p>';
}

function merumagaen(){
  document.getElementById('submit').innerHTML = "<input type='submit' value='規約に同意して進む'>"
}

function merumagadis(){
  document.getElementById('submit').innerHTML = "<input type='submit' value='次へ'>"
}

function kontonindex(){
  $('.indexwrapper').toggleClass('indexactive');
  $('.center').toggleClass('centeractive');
  $('.footindex').toggleClass('footactive');
  var wid = window.innerWidth;
  var hei = window.innerHeight;
  wid = wid - 20;
  heif = hei - 40;
  hei = hei / 2 - 20;
  $(".indexactive").css({
    "width" : wid ,
    "top" : hei
  });
  $('.footindex').css({
    'top' : heif
  });
  $('.footactive').css({
    'width' : wid
  });
}
