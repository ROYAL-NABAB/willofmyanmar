async function getNFTs() {
    const opt = { chain: 'polygon', address:  add};
    const nfts = await Moralis.Web3.getNFTs(opt);
    console.log(nfts);
  if(nfts.length == 0){
    document.getElementById("byt").innerHTML += "<center><h2>You Don't Have Nft</h2></center>";
  }
  else{
    for (var i=0, n=nfts.length; i < n; ++i ){
      console.log(nfts[i].token_uri)
        let url = fixURL(nfts[i].token_uri);
        const params = { theurl: url };
        const met = await Moralis.Cloud.run("fetchJSON", params);
        console.log(met);
if(met.status == 404 || met.status == 400 || met.status == 429) {
    console.log('shit')
    }
    else{
        function jv() {
            if(met.data.description == null || met.data.description == "undefined"){
              return ""
            }else{
              return met.data.description
            }
          }
          if(met.data.description == null || met.data.description == "undefined"){""}
          if(met.data.hasOwnProperty("image")){
          document.getElementById("byt").innerHTML += "<div class='nfts' id='nft'><div id='nftimg'><img width=100 height=100 src='"+ fixURL(met.data.image) +"'/></div><div id='nfttxt'>"+ met.data.name +"</div><div id='nftdsc'>"+ jv(); +"</div></div>";
          }else{
            document.getElementById("byt").innerHTML += "<div class='nfts' id='nft'><div id='nftimg'><img width=100 height=100 src='"+ fixURL(met.data.image_url) +"'/></div><div id='nfttxt'>"+ met.data.name +"</div><div id='nftdsc'>"+ jv(); +"</div></div>";
          }
      }
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

getNFTs();