/* Moralis init code */
const serverUrl = "https://i52fc4bucgir.usemoralis.com:2053/server";
const appId = "ddr8UA90mdiUm0e32K95x9uJguJ93aIMCjEjBPId";
Moralis.start({ serverUrl, appId });


var add;
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis", provider: "walletconnect" })
      .then(function (user) {
        console.log("logged in user:", user);
        window.add = user.get("ethAddress");
        document.getElementById("btn-login").innerHTML = add.substr(0, 6) + "..." + add.substr(38, 42);
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("s").innerHTML="Disconnected";
}

async function getNFTs() {
    const opt = { chain: 'eth', address: add };
    const nfts = await Moralis.Web3.getNFTs(opt);
    console.log(nfts);
  if(nfts.length == 0){
    document.getElementById("s").innerHTML += "<h2>You Don't Have Nft</h2>";
  }
  else{
    for (var i=0, n=nfts.length; i < n; ++i ){
        let url = fixURL(nfts[i].token_uri);
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("s").innerHTML += "<h2>"+data.name+"</h2>";
            document.getElementById("s").innerHTML += "<h3>"+data.description+"</h3>";
            document.getElementById("s").innerHTML += "<img width=100 height=100 src='"+fixURL(data.image)+"'/>";
            console.log(data.name);
        });
    }
  }
}

function fixURL(url){
    if(url.startsWith("ipfs://ipfs/")){
        return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://ipfs/").slice(-1)[0];
    }
    else if(url.startsWith("ipfs://")){
        return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0];
    }
    else{
        return url+"?format=json"
    }
}

function show(){
  document.getElementById("body").innerHTML += "<div class='d-block d-lg-none' style='height: 100%; width: 100%; position: absolute; z-index: 10000; background:#000000e0; color:#fff;' id='sv'><center><img src='favicon.ico' style='margin:10%; border-radius:50%;'><ul class='navbar-nav me-auto mb-2 mb-lg-0' class='navbar-nav me-auto mb-2 mb-lg-0'><li class='nav-item active'><a class='nav-link link-light' href='#'>Whitepaper</a></li><li class='nav-item'><a class='nav-link link-light' href='#'>Etherscan</a></li><li class='nav-item'><a class='nav-link link-light' href='#'>Team</a></li><li class='nav-item'><a class='nav-link link-light' href='#'>Roadmap</a></li></ul><ul class='me-auto mb-2 mb-lg-0 bd'><li class='cb'><a class='link-light' href='#'>Twitter</a></li><a style='font-size: 30px;'>|</a><li class='cb'><a class='link-light' href='#'>Telegram</a></li><li class='nav-item'><a class='nav-link link-light' role='button' id='cl'>Close</a></li></ul></center></div>";
  document.getElementById("cl").onclick = cl;
}

function cl(){
  document.getElementById("body").innerHTML = ""
}

function sh(){
  document.getElementById("s").innerHTML = "<div class='card-header v'>Connect Wallet<i class='bi bi-x' id='ss' style='color: black; float: right; font-size: 1.5rem;'></i></div><div class='gap-4 mp'><img src='mt.png' class='z1' /><p>Metamask</p></div><div class='gap-4 mp1'><img src='tp.svg' class='z2' /><p>TokenPocket</p></div><br><div class='gap-4 mp'><img src='tw.png' class='z3' /><p>Trust Wallet</p></div><div class='gap-4 mp1'><img src='wl.svg' class='z4' id='z4' /><p>Wallet Connect</p></div><div class='card-header m d-grid gap-2'>Haven't got a crypto wallet yet?<br><button type='button' class='btn btn-info'>Create Here</button></div>"
  document.getElementById("ss").onclick = close;
  document.getElementById("z4").onclick = login;
}
function close(){
  document.getElementById("s").innerHTML = ""
}

document.getElementById("btn-login").onclick = sh;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("v").onclick = getNFTs;
document.getElementById("sh").onclick = show;
