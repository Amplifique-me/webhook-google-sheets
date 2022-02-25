function doGet(e) {
  return HtmlService.createHtmlOutput("request received");
}

function doPost(e) {
  var params = JSON.stringify(e.postData.contents);
  params = JSON.parse(params);
  var myData = JSON.parse(e.postData.contents);
  
  var eventType = myData.event.event_type;
  var campaign = myData.event.campaign;
  
  var participantName = myData.event.participant.name;
  var participantEmail = myData.event.participant.email;
  var participantPhone = myData.event.participant.phone;
  var participantBusiness = myData.event.participant._business;

  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = Math.max(sheet.getLastRow(),1);
  
  sheet.insertRowAfter(lastRow);

  var timestamp = new Date();

  sheet.appendRow(['Data', 'Evento', 'Campanha', 'Nome do Participante', 'E-mail do Participante', 'Telefone do Participante', 'Business do Participante'])

  sheet.getRange(lastRow + 1, 1).setValue(timestamp);
  sheet.getRange(lastRow + 1, 2).setValue(eventType); 
  sheet.getRange(lastRow + 1, 3).setValue(campaign);
  sheet.getRange(lastRow + 1, 4).setValue(participantName);
  sheet.getRange(lastRow + 1, 5).setValue(participantEmail);
  sheet.getRange(lastRow + 1, 6).setValue(participantPhone);
  sheet.getRange(lastRow + 1, 7).setValue(participantBusiness);
  
  SpreadsheetApp.flush();
  
  return HtmlService.createHtmlOutput("post request received");
}