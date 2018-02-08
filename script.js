//アニメーション
id = setInterval( function(){
  $('.wrapper').removeClass('opnone');
}, 250);

setTimeout( function(){
    clearInterval(id);
}, 1000);

//プロフィール
function mtdshow(){
  document.getElementById('membervoid').innerHTML = '<h3>MTDTR</h3><p class="small"><i>a.k.a.あきやま</i></p><p>役職:<b>主宰者</b></p><p>このサークルの主宰者。どうしようもない系廃人。</p><p>産業廃棄物みたいなこのサイトを作った犯人はこいつです。</p><p>ピアノを弾いてるのもこいつです。</p><p><del>本当は一人なのに同人サークルとか言ってるのもこいつです。</del><b>祝!ぼっちサークル卒業!</b></p><p><span style="background-color:#777777;color:#ffffff;">担当楽器:ピアノ</span></p><p><a href="https://twitter.com/MTDTR_tk" target="_blank"><img class="menu" height="50px" src="img/twitterlogo.png" alt="twitter" title=この廃人のツイッターを訪ねる></a><a href="http://mstdn.jp/@MTDTR" target="_blank"><img class="menu" height="40px" src="https://mstdn.jp/favicon.ico" alt="mstdn" title=この廃人のマストドンを訪ねる></a><a href="https://github.com/MTDTR" target="_blank"><img class="menu" height="50px" src="img/github.png" alt="github" title=この廃人のGitHubを訪ねる></a>';
}

function pianoshow(){
  document.getElementById('membervoid').innerHTML = '<h3>ピアノさん</h3><p>役職:<b>ピアノ</b></p><p>ろーらんど王国生まれの電子ピアノ。</p><p>このサークルに絶対必要なメンバー。</p><p>初期にはこの人がいないと同人サークルとして成立しなかったんだよね。。。</p>';
}

function genkanshow(){
  document.getElementById('membervoid').innerHTML = '<h3>玄関</h3><p class="small"><i>a.k.a.リボーン</i></p><p>役職:<b>ケミカルライト･ミュージック･コンポーザー</b></p><p>ラ<br>ララ<br>ら・ララランド<br>魚が好き(本人談)</p><p>当サークル専属メイドさん。<br></p><p><span style="background-color:#777777;color:#ffffff;">担当楽器:サイリウム</span></p>';
}

function domashow(){
  document.getElementById('membervoid').innerHTML = '<h3>土間</h3><p class="small"><i>a.k.a.シャロリング</i></p><p>役職:<b>アートワークディレクター</b></p><p>当サークル専属絵師にして3人目のメンバー(ピアノ含む)。アイコンは本人が描いてくれました!</p><p><span class="small" style="color:#999999;">某</span>和太鼓<span class="small" style="color:#999999;">風ゲーム</span>8段取得。</p><p><span style="background-color:#777777;color:#ffffff;">担当楽器:和太鼓・サイリウム・ピアノ(予定)</span></p>';
}

function kutsubakoshow(){
  document.getElementById('membervoid').innerHTML = '<h3>玄関</h3><p class="small"><i>a.k.a.ふぃぎゅ</i></p><p>役職:<b>デザインマネージャー</b></p><p>保健の成績は5だけど体育の成績は1。(本人談)</p><p>そろばん(マラカス)初段取得。</p><p>アイコンは土間さんが描いてくれました。</p><p><span style="background-color:#777777;color:#ffffff;">担当楽器:そろばんマラカス・サイリウム</span></p>';
}

//メルマガ関連(必要か?)
function merumagaen(){
  document.getElementById('submit').innerHTML = "<input type='submit' value='規約に同意して進む'>"
}

function merumagadis(){
  document.getElementById('submit').innerHTML = "<input type='submit' value='次へ'>"
}

//オープニングアニメーション
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
