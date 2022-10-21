@charset "UTF-8";

/*================================================
 *  CSSリセット
 ================================================*/
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;font-weight:normal;}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}

/*================================================
 *  一般&共通設定
 ================================================*/
body {
	font-size:14px;
	font-family:  
	'Josefin Sans', 
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	
	line-height:1.6;
}

header {
	width:100%;
	height:400px;
}

#contents {
	width:980px;
	margin:0 auto;
}

a {
	color:#043771;
}
a:hover {
	color:#144d8d;
}

h1 {font-family: 'Candal',  
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	font-size:28px;
}

h2 {font-family:'Candal',  
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin-top:50px;
	margin-bottom:0.5em;
	font-size:24px;
	color:#333;
	text-align:center;
}

h3 {font-family:'Candal', 
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin-bottom:0.25em;
	font-size:18px;
}

h4 {font-family:'Candal', 
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin-bottom:0.25em;
	font-size:16px;
}

h5 {font-family: 
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin-bottom:0.25em;
	padding-left:25px;
	font-size:16px;
	background:url('../images/bg_arrow_black.png') 0 50% no-repeat;
}

h6 {font-family: 
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin-bottom:0.25em;
	padding-left:5px;
	font-size:16px;
	font-weight:bold;
}

p {font-family: 
	'Josefin Sans', sans-serif,
	"メイリオ",Meiryo,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",Osaka,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;
	margin:0 0 1em 0;
}

img {
	vertical-align:bottom;
}

em {
	font-weight:bold;
}

strong {
	font-weight:bold;
	color:#ff0000;
}

pre {
	margin:1em 0;
	padding:1em;
}

blockquote {
	margin-bottom:1em;
	padding:1em;
	border:1px dotted #ddd;
	border-left:5px solid #ddd;
}

ul,ol,dl {
	margin:0 0 1em 0;
}
ul li {
	list-style:disc;
}
ol li {
	list-style:decimal;
}
li {
	margin-left:2em;
}

dt {
	margin-bottom:0.5em;
	border-bottom:1px dotted #ddd;
}
dd {
	margin-bottom:1em;
}

table {
	width:100%;
	margin-bottom:1em;
	border-collapse:collapse;
	border:1px solid #ddd;
}
th {
	padding:10px;
	text-align:center;
	vertical-align:middle;
	border:1px solid #ddd;
	background:#f1f1f1;
}
td {
	padding:10px;
	text-align:left;
	border:1px solid #ddd;
}

/*================================================
 *  汎用クラス
 ================================================*/
/* 写真中央寄せ */
.imgC {
	clear:both;
	overflow:hidden;
	margin-bottom:50px;
	text-align:center;
}
.imgC img {
	border-radius:5px;
	margin-bottom:0.5em;
}

/* 写真左寄せ */
.imgL {
	clear:both;
	overflow:hidden;
	margin-bottom:50px;
}
.imgL img {
	float:left;
	margin:0 1em 0.5em 0;
	border-radius:5px;
}

/* 写真右寄せ */
.imgR {
	clear:both;
	overflow:hidden;
	margin-bottom:50px;
}
.imgR img {
	float:right;
	margin:0 0 1em 0.5em;
	border-radius:5px;
}

/* 2カラム（スマートフォンでは1カラム) */
.twoCol {
	overflow:hidden;
	margin-bottom:50px;
}
.twoColInner {
	overflow:hidden;
	margin-right:-2%;
}
.twoColInner div {
	width:48%;
	float:left;
	margin-right:2%;
}
.twoColInner div:nth-child(2n+1) {
	clear:both;
}
.twoColInner img {
	width:100%;
	margin-bottom:0.5em;
	border-radius:5px;
}

/* 3カラム（スマートフォンでは1カラム) */
.threeCol {
	overflow:hidden;
	margin-bottom:50px;
}
.threeColInner {
	overflow:hidden;
	margin-right:-3%;
}
.threeColInner div {
	width:31%;
	float:left;
	margin-right:2%;
}
.threeColInner div:nth-child(3n+1) {
	clear:both;
}
.threeColInner img {
	width:100%;
	margin-bottom:0.5em;
	border-radius:5px;
}

/* ボタン（タイプ1） */
.btn01 a {
	display:block;
	padding:2% 2% 2% 50px;
	color:#fff;
	text-decoration:none;
	border-radius:5px;
	background:#1b1b1b url('../images/bg_arrow_white.png') 20px 50% no-repeat;
	transition:all 0.2s ease 0s;
}
.btn01 a:hover {
	background:#2e2e2e url('../images/bg_arrow_white.png') 20px 50% no-repeat;
	transition:all 0.2s ease 0s;
}

/* ボタン（タイプ2） */
.btn02 a {
	display:block;
	padding:2%;
	color:#1b1b1b;
	text-decoration:none;
	border-radius:5px;
	border:1px solid #1b1b1b;
	background:#fff;
	transition:all 0.2s ease 0s;
}
.btn02 a:hover {
	color:#fff;
	background:#1b1b1b;
	transition:all 0.2s ease 0s;
}

/*================================================
 *  ヘッダー
 ================================================*/
header {
	position:relative;
}
header h1 {
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	margin:auto;
	width:200px;
	height:200px;
	z-index:10;
}

/*================================================
 *  グローバルナビゲーション
 ================================================*/
nav {
	width:100%;
	position:fixed;
	top:0;
	left:0;
	padding:10px 0;
	opacity:0.8;
	background:#000;
	z-index:10;
	font-size:x-small;
}
nav ul {
	position:relative;
	float:left;
	left:50%;
	margin:0;
}
nav li {
	position:relative;
	left:-50%;
	float:left;
	list-style:none;
	margin:0;
	padding:0 20px;
}
nav li a {
	color:#fff;
	text-decoration:none;
}
nav li a:hover {
	color:#dfdfdf;
	text-decoration:underline;;
}

/*================================================
 *  メイン
 ================================================*/
main {
	width:100%;
}

section {
	margin-bottom:10%;
}

/*================================================
 *  フッター
 ================================================*/
footer {
	clear:both;
	padding:2% 0;
	font-size:11px;
	text-align:center;
}

/*================================================
 *  ページトップへの戻り
 ================================================*/
.totop {
	position:fixed;
	bottom:15px;
	right:15px;
}
.totop a {
	display:block;
	text-decoration:none;
}
.totop img {
	background:#000;
}
.totop img:hover {
	background:#333;
}

/*================================================
 *  スライドショー
 ================================================*/
.slide {
	overflow:hidden;
	position:relative;
}
.slideInner {
	list-style:none;
	margin:0;
	padding:0;
}
.slideInner li {
	position:absolute;
	width:100%;
	margin:0;
	padding:0;
	background-color:#fff;
	background-position:50% 0;
	background-repeat:no-repeat;
}

/*================================================
 *  タブレット向けデザイン
 ================================================*/
/* スクロールバーを考慮して20px大きいサイズで切り替え */
@media screen and (max-width:979px) {
	#contents {
		box-sizing:border-box;
		width:100%;
		padding:0 10px;
	}
}

/*================================================
 *  スマートフォン向けデザイン
 ================================================*/
@media screen and (max-width:767px) {
	h2 {
		margin-top:30px;
	}

	.imgC {
		margin-bottom:30px;
	}
	.imgC img {
		max-width:100%;
	}

	.imgL {
		margin-bottom:30px;
	}
	.imgL img {
		float:none;
		max-width:100%;
		margin-right:0;
	}

	.imgR {
		margin-bottom:30px;
	}
	.imgR img {
		float:none;
		max-width:100%;
		margin-left:0;
	}

	.twoCol {
		margin-right:0;
		margin-bottom:30px;
	}
	.twoColInner {
		margin-right:0;
	}
	.twoColInner div {
		float:none;
		width:100%;
	}

	.threeCol {
		margin-bottom:30px;
	}

	.threeColInner {
		margin-right:0;
	}
	.threeColInner div {
		float:none;
		width:100%;
	}
}
