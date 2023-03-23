function doGet(e) {
  var doc =SpreadsheetApp.getActive().getSheetByName("picForm")
  var data=doc.getDataRange().getValues();

  var type = e.parameter.type;
  var output=[]
  if(type=="all"){ 
    for(let i=1;i<data.length;i++){
      var row={};
      row["email"]=data[i][1];
      row["name"]=data[i][2];
      row["department"]=data[i][3];
      row["image"]=data[i][4];
      output.push(row);
    }
  }else if(type=="search"){
    var name=e.parameter.name;
    name=name.trim();
    childname=name.toLowerCase();
    for(let i=1;i<data.length;i++){
      parentName=data[i][2].toLowerCase();
      if(parentName.includes(childname)){
        var row={};
        row["email"]=data[i][1];
        row["name"]=data[i][2];
        row["department"]=data[i][3];
        row["image"]=data[i][4];
        output.push(row);
      }
    }
  }else if(type=="specific"){
    var mail=e.parameter.mail;
    mail=mail.trim();
    childname=mail.toLowerCase();
    for(let i=1;i<data.length;i++){
      parentName=data[i][1].toLowerCase(); 
      if(parentName.includes(childname)){
        var row={};
        row["email"]=data[i][1];
        row["name"]=data[i][2];
        row["department"]=data[i][3];
        row["image"]=data[i][4];
        row["experience"]=data[i][5]
        output.push(row);
      }
    }
  }
  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
  
}