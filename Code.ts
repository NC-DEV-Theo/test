function myFunction(){
    const SS = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = SS.getSheetByName('Sheet1');
    if(!sheet) throw new Error('Sheet1 not found');
    const range = sheet.getRange('A1:A');
    const values = range.getValues();
    const values2 = values.filter(function(value){
        return value[0] !== '';
    })
    console.log(values2);
}

function newFunction(){
    console.log("Hello GitHub")
}

function thisIsNewFunction(){
    const SS = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = SS.getSheetByName('Sheet1');
    if(!sheet) throw new Error('Sheet1 not found');
    const range = sheet.getRange('A1:A');
    const values = range.getValues();
    const values2 = values.filter(function(value){
        return value[0] !== 'test';
    })
    console.log(values2);
}

function thisIsNewFunction2(){
    const SS = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = SS.getSheetByName('Database1');
    if(!sheet) throw new Error('Database1 not found');
    sheet.getRange(2,1, sheet?.getMaxRows(), sheet?.getMaxColumns()).clearContent()
}