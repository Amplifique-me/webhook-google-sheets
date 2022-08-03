function myFunction() {
  var raw = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var linksOriginais = [];

  for (linha = 0; linha < raw.length; ++linha) {
    var celula = raw[linha][8]; // 8 -> Número da coluna começando em zero
    linksOriginais.push(celula[8]);
  }

  raw.forEach((link, indice) => {
    if (link[8].includes("https://") && link[8].length > 10) {
      var resposta = encurtar(link[8]);
      var temp = resposta.getContentText().split('"shortUrl":"')[1].split('","')[0];
      temp = temp.replace("}", "")
      temp = temp.replace('"', "")
      console.log('[' + indice + '] ' + temp);
      SpreadsheetApp.getActiveSheet().getRange("J" + (indice + 1)).setValue(temp);
    }
  })
}

function encurtar(url) {
  var options = {
    "method": "post",
    "payload": {
      "originalUrl": url
    }
  };
  return UrlFetchApp.fetch('https://ampl.me/shortner?access_token=ewkCW3wpopu0BxRVgLk4fgcTTvHDLEY7FymdmNiFzXM', options);
}
