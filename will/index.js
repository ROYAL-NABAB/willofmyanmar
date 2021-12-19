/* Moralis init code */
const serverUrl = "https://i52fc4bucgir.usemoralis.com:2053/server";
const appId = "ddr8UA90mdiUm0e32K95x9uJguJ93aIMCjEjBPId";
Moralis.start({ serverUrl, appId });


var add;
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        window.add = user.get("ethAddress");
        document.getElementById("s").innerHTML = "Connected, Your Address: " + add;
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

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("v").onclick = getNFTs;