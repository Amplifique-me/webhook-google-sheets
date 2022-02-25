function doGet(e) {
  return HtmlService.createHtmlOutput("request received");
}

function doPost(e) {
  var params = JSON.stringify(e.postData.contents);
  params = JSON.parse(params);
  var myData = JSON.parse(e.postData.contents);
  
  var eventType = myData.event.event_type;
  var campaign = myData.event.campaign;
  
  var reward = myData.event.reward;
  var rewardId = myData.event.reward_id;
  var redeemed = myData.event.redeemed;
  var redeemedAt = myData.event.redeemed_at;
  var customerName = myData.event.customer.name;
  var customerEmail = myData.event.customer.email;
  var customerPhone = myData.event.customer.phone;
  var customerCustomFields = myData.event.customer.custom_fields;
  var customerBusiness = myData.event.customer._business;

  var participantName = myData.event.participant.name;
  var participantEmail = myData.event.participant.email;
  var participantPhone = myData.event.participant.phone;
  var participantBusiness = myData.event.participant._business;

  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = Math.max(sheet.getLastRow(),1);
  
  sheet.insertRowAfter(lastRow);

  var timestamp = new Date();

  sheet.appendRow(['Data', 'Evento', 'Campanha', 'Recompensa', 'ID da Recompensa', 'Resgatada', 'Resgatada em', 'Nome do Indicador', 'E-mail do Indicador', 'Telefone do Indicador', 'Campos Customizados do Indicador', 'Business do Indicador'])

  sheet.getRange(lastRow + 1, 1).setValue(timestamp);
  sheet.getRange(lastRow + 1, 2).setValue(eventType); 
  sheet.getRange(lastRow + 1, 3).setValue(campaign);
  sheet.getRange(lastRow + 1, 4).setValue(reward);
  sheet.getRange(lastRow + 1, 5).setValue(rewardId);
  sheet.getRange(lastRow + 1, 6).setValue(redeemed);
  sheet.getRange(lastRow + 1, 7).setValue(redeemedAt);
  sheet.getRange(lastRow + 1, 8).setValue(customerName);
  sheet.getRange(lastRow + 1, 9).setValue(customerEmail);
  sheet.getRange(lastRow + 1, 10).setValue(customerPhone);
  sheet.getRange(lastRow + 1, 11).setValue(customerCustomFields);
  sheet.getRange(lastRow + 1, 12).setValue(customerBusiness);
  sheet.getRange(lastRow + 1, 13).setValue(participantName);
  sheet.getRange(lastRow + 1, 14).setValue(participantEmail);
  sheet.getRange(lastRow + 1, 15).setValue(participantPhone);
  sheet.getRange(lastRow + 1, 16).setValue(participantBusiness);
  
  SpreadsheetApp.flush();
  
  return HtmlService.createHtmlOutput("post request received");
}