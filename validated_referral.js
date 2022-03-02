function doGet(e) {
    return HtmlService.createHtmlOutput("request received");
  }
  
  function doPost(e) {
    var params = JSON.stringify(e.postData.contents);
    params = JSON.parse(params);
    var myData = JSON.parse(e.postData.contents);
    
    var eventType = myData.event.event_type;
    var campaign = myData.event.campaign;
    
    var customerRefereeName = myData.event.customer_referee.name;
    var customerRefereeEmail = myData.event.customer_referee.email;
    var customerRefereePhone = myData.event.customer_referee.phone;
    var customerRefereeCustomFields = myData.event.customer_referee.custom_fields;
    var customerRefereeBusiness = myData.event.customer_referee._business;
  
    var customerReferrerName = myData.event.customer_referrer.name;
    var customerReferrerEmail = myData.event.customer_referrer.email;
    var customerReferrerPhone = myData.event.customer_referrer.phone;
    var customerReferrerCustomFields = myData.event.customer_referrer.custom_fields;
    var customerReferrerBusiness = myData.event.customer_referrer._business;
  
    var customerReferralAmount = myData.event.referral_data.amount;
    var customerReferralStatus = myData.event.referral_data.status;
    var customerReferralValidatedAt = myData.event.referral_data.validated_at;
  
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = Math.max(sheet.getLastRow(),1);
    
    sheet.insertRowAfter(lastRow);
  
    var timestamp = new Date();
  
    sheet.appendRow(['Data', 'Evento', 'Campanha', 'Nome do Indicado', 'E-mail do Indicado', 'Telefone do Indicado', 'Campos Customizados do Indicado', 'Business do Indicado', 'Nome do Indicador', 'E-mail do Indicador', 'Telefone do Indicador', 'Campos Customizados do Indicador', 'Business do Indicador', 'Valor', 'Status', 'Validado Em'])
  
    sheet.getRange(lastRow + 1, 1).setValue(timestamp);
    sheet.getRange(lastRow + 1, 2).setValue(eventType);
    sheet.getRange(lastRow + 1, 3).setValue(campaign);
    sheet.getRange(lastRow + 1, 4).setValue(customerRefereeName);
    sheet.getRange(lastRow + 1, 5).setValue(customerRefereeEmail);
    sheet.getRange(lastRow + 1, 6).setValue(customerRefereePhone);
    sheet.getRange(lastRow + 1, 7).setValue(customerRefereeCustomFields);
    sheet.getRange(lastRow + 1, 8).setValue(customerRefereeBusiness);
    sheet.getRange(lastRow + 1, 9).setValue(customerReferrerName);
    sheet.getRange(lastRow + 1, 10).setValue(customerReferrerEmail);
    sheet.getRange(lastRow + 1, 11).setValue(customerReferrerPhone);
    sheet.getRange(lastRow + 1, 12).setValue(customerReferrerCustomFields);
    sheet.getRange(lastRow + 1, 13).setValue(customerReferrerBusiness);
    sheet.getRange(lastRow + 1, 14).setValue(customerReferralAmount);
    sheet.getRange(lastRow + 1, 15).setValue(customerReferralStatus);
    sheet.getRange(lastRow + 1, 16).setValue(customerReferralValidatedAt);
    
    SpreadsheetApp.flush();
    
    return HtmlService.createHtmlOutput("post request received");
  }