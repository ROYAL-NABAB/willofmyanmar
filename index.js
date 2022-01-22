/* Moralis init code */
const serverUrl = "https://i52fc4bucgir.usemoralis.com:2053/server";
const appId = "ddr8UA90mdiUm0e32K95x9uJguJ93aIMCjEjBPId";
Moralis.start({ serverUrl, appId });

var boom;
var user = Moralis.User.current();
if (user) {
  var add = user.get("ethAddress");
}
/* Authentication code */
async function login() {
  if (!user) {
    user = await Moralis.authenticate({provider:'walletconnect', signingMessage:"Connect Wallet", chainId: 137})
      .then(function (user) {
        console.log("logged in user:", user);
        var add = user.get("polygonAddress");
        document.getElementById("btn-login").innerHTML = add.substr(0, 6) + "..." + add.substr(38, 42);
      })
      .catch(function (error) {
        console.log(error);
      });
      location.reload(false);
  }
}

async function login2() {
  if (!user) {
    user = await Moralis.authenticate({signingMessage:"Connect Wallet", chainId: 137})
      .then(function (user) {
        console.log("logged in user:", user);
        var add = user.get("polygonAddress");
        document.getElementById("btn-login").innerHTML = add.substr(0, 6) + "..." + add.substr(38, 42);
      })
      .catch(function (error) {
        console.log(error);
      });
      location.reload(false);
  }
}

if (user) {
  document.getElementById("btn-login").innerHTML = add.substr(0, 6) + "..." + add.substr(38, 42);
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("s").innerHTML="<center>Disconnected</center>";
  var add;
  location.reload(false);
}

function show(){
  document.getElementById("body").innerHTML += "<div class='d-block d-lg-none' style='height: 100%; width: 100%; position: fixed; z-index: 10000; background:#000; color:#fff;' id='sv'><center><div class='hy'><img src='img/logo.png' style='margin:10%; border-radius:50%; height:100px; weight:100px;'><ul class='navbar-nav me-auto mb-2 mb-lg-0' class='navbar-nav me-auto mb-2 mb-lg-0'><li class='nav-item active'><a class='nav-link link-light' onclick='cl()' href='#Whitepaper'>Whitepaper</a></li><li class='nav-item'><a class='nav-link link-light' onclick='cl()' href='#Etherscan'>Etherscan</a></li><li class='nav-item'><a class='nav-link link-light' onclick='cl()' href='#Team'>Team</a></li><li class='nav-item'><a class='nav-link link-light' onclick='cl()' href='#Roadmap'>Roadmap</a></li></ul><ul class='me-auto mb-2 mb-lg-0 bd'><li class='cb'><a class='link-light' href='https://twitter.com/willofmyanmar'>Twitter</a></li><a style='font-size: 30px;'>|</a><li class='cb'><a class='link-light' href='https://t.me/will_of_myanmar'>Telegram</a></li><li class='nav-item'><a class='nav-link link-light' role='button' id='cl'>Close</a></li></ul></center></div></div>";
$('#cl').click(function(e) {
    cl();
});
}

function cl(){
  document.getElementById("body").innerHTML = ""
}
async function vs(){
  const opt = {chain: "matic", address: add}
    balo = await Moralis.Web3API.account.getNativeBalance(opt);
    boom2 = balo.balance;
    boom = Moralis.Units.FromWei(boom2)
    return boom
}
vs();
if (!user) {
function sh(){
  document.getElementById("ab").innerHTML = "<div class='s' id='s'><div class='card-header v'>Connect Wallet<i class='bi bi-x' id='ss' style='color: black; float: right; font-size: 1.5rem;'></i></div><div class='gap-4 mp'><img src='img/mt.png' class='z1' id='z1' /><p>Metamask</p></div><div class='gap-4 mp1'><img src='img/tp.svg' class='z2' id='z2' /><p>TokenPocket</p></div><br><div class='gap-4 mp'><img src='img/tw.png' class='z3' id='z3' /><p>Trust Wallet</p></div><div class='gap-4 mp1'><img src='img/wl.svg' class='z4' id='z4' /><p>Wallet Connect</p></div><div class='card-header m d-grid gap-2' style='color:#fff;'>Haven't got a crypto wallet yet?<br><a href='https://metamask.io/' type='button' class='btn vd btn-info'>Create Here</a></div></div>"
  document.getElementById("ss").onclick = close;
  document.getElementById("z4").onclick = login;
  document.getElementById("z3").onclick = login2;
  document.getElementById("z2").onclick = login2;
  document.getElementById("z1").onclick = login2;
}
function close(){
  document.getElementById("ab").innerHTML = ""
}
} else {
function sh(){
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  vs();
  console.log(boom);
  document.getElementById("ab").innerHTML = "<div class='s' id='s'><div class='card-header v'>Your Wallet<i class='bi bi-x' id='ss' style='color: black; float: right; font-size: 1.5rem; font-weight:900;'></i></div><div class='card-body'>Matic Balance: "+ boom +"</div><div class='card-bodyv' style='text-align: left;'>Your Address </div><div class='card-body0' id='vv2'><input class='vv' id='vv' readonly value='"+ add +"'</input><i class='bi dom bi-clipboard' id='jj'></i></div><div class='ic'><a href='collection.html'>Collection</a></div><div class='card-header m d-grid gap-2'><button type='button' class='btn vd btn-info' id='btn-logout'>Disconnect Wallet</button></div></div>"
  document.getElementById("btn-logout").onclick = logOut;
  document.getElementById("ss").onclick = close;

  function jj(){
  var copyText = document.getElementById("vv2");
  navigator.clipboard.writeText(add);
  document.getElementById("vv2").innerHTML = "<input class='vv' id='vv' readonly value='"+ add +"'</input><i class='bi dom bi-check2-circle' style='color:green;' id='jj'></i>";
  delay(1000).then(() => document.getElementById("vv2").innerHTML = "<input class='vv' id='vv' readonly value='"+ add +"'</input><i class='bi dom bi-clipboard' id='jj'></i>");
  }
  document.getElementById("jj").onclick = jj;
}
function close(){
  document.getElementById("ab").innerHTML = ""
}
}

function ft(){
  document.getElementById("ft").innerHTML = "<div class='section-title2'><h2>Through the Struggle</h2></div><center><div id='nftimg3'><p>Description: As of January 4, 2022, according to AAPP, 1,435 people have been killed, 11,337 people have been imprisoned, and 1964 people have evaded the warrant in Myanmar since the coup happened on February 1, 2021. Despite the challenges, struggles, blood, and sweat, people in Myanmar continue to fight against the military in order to get the justice, freedom and the democracy. <br><br><br>Note: The artist will send the original painting (size: 30cmx40cm, medium: acrylic on canvas) to the first owner who has minted the NFT.</p></div><div class='content2'><div class=''><a style='cursor: pointer;' class='btn-learn-more2' id='sec2'>Close</a></div></center></div>"
  document.getElementById("sec2").onclick = gt;
}
function gt(){
  document.getElementById("ft").innerHTML = "<div class='section-title2'><h2>HandPainting Artwork Nft</h2></div><center><div id='nftimg3'><img src='img/hg.jpg' /></div></center><div class='content2'><div class=''><a href='#' class='btn-learn-more2'>Opensea Soon</a><a style='cursor: pointer;' class='btn-learn-more2 float-end2' id='sec'>Info</a></div></div>"
  document.getElementById("sec").onclick = ft;
}

document.getElementById("btn-login").onclick = sh;
document.getElementById("sh").onclick = show;
if(document.getElementById("sec") == null){

}else{
document.getElementById("sec").onclick = ft;
}

let preloader = document.getElementById('preloader');
$('html, body').css({
  'overflow': 'hidden',
  'height': '100%'
})
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
    $('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})
  });
}

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let selectHeader = document.getElementById('header')
let ddbg = document.getElementById('about')
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop
  const headerFixed = () => {
    if ((headerOffset - window.scrollY) <= 0) {
      selectHeader.classList.add('fixed-top')
      selectHeader.classList.remove('mt-2')
      ddbg.classList.add('offset')
    } else {
      selectHeader.classList.remove('fixed-top')
      selectHeader.classList.add('mt-2')
      ddbg.classList.remove('offset')
    }
  }
  window.addEventListener('load', headerFixed)
  onscroll(document, headerFixed)
}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".float").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

function dv(){
hmn = 0;
for (var i=1, n=3; i <= n; ++i ){
mm = ".x" + i
dd = "#draw" + i
zz = ".draw-line"
const height = document.querySelector(mm).offsetHeight;
console.log(height);
mn = height + 50
$(dd).css({"height": mn});
const height2 = document.querySelector(dd).offsetHeight;
console.log(height2)
const heightz = document.querySelector(zz).offsetHeight;
$(zz).css({"height": heightz + mn});
hmn += heightz
}
console.log(hmn);
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".flip-card").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load

  var div = $('.draw-line'),
  divHeight = div.height(),
  scroll;

  $(document).ready(function() {
    scroll = $(this).scrollTop();
    var height=oheight = $(".draw-line").height();
    $(document).scroll(function() {
      var t = $(".timeline li")
      , n = ($(".timeline ul").height(),
    $(".default-line"))
      , r = $(".draw-line");
    if (r.length) {
        r.height();
        var i = n.height()
          , o = $(window).scrollTop()
          , a = $(window).height() / 2
          , s = $(".timeline").offset().top;
        if (o >= s - a) {
            var c = o - s + a;
            c <= i && r.css({
                height: c + 20 + "px"
            })
        }
      }

      var l = r.offset().top + r.outerHeight(!0)
      , d = $(".timeline #draw5").offset().top;
    console.log("timelinelogger", l, d),
    l > d ? r.css({
        background: "#FFD700"
    }) : r.css({
        background: "#FFD700"
    }),

      t.each(function(e) {
        var t, n = $(this).offset();
        l > n.top ? (t = $(this).attr("id"),
        l < d && $(this).addClass("in-view")) : (t = $(this).attr("id"),
        $(this).removeClass("in-view"))
    })
    }).scroll();
});
});
}
dv();
