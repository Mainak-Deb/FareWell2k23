function doGet(e) {
  var queryMail = e.parameter.email;
  var doc =SpreadsheetApp.getActive().getSheetByName("comment")
  var data=doc.getDataRange().getValues();

  output=[]
  for(let i=1;i<data.length;i++){
    if(data[i][0]==queryMail){
      output.push(data[i][1]);
    }
  }
  //Logger.log(output)
  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  var addData = JSON.parse(e.postData.contents);
  var doc =SpreadsheetApp.getActive().getSheetByName("comment")
  

  doc.appendRow([addData.email,addData.comment]);
  return ContentService.createTextOutput(JSON.stringify('Success')).setMimeType(ContentService.MimeType.JSON);
}