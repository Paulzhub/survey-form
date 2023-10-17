function doPost(e) {
    var sheet = SpreadsheetApp.openById('1JpTAs3JpY1Cv-qCnEJNNBtpJzU35G1pNMpdusSpJflA').getActiveSheet();
    
    // Get the form data
    var data = e.parameter;
    var name = data.Name;
    var email = data.Email;
    var age = data.Age;
    var dropdown = data.dropdown;
    var kpop = data['k-pop'];
    var like = data.like;
    var feedback = data.feedback;
    
    // Append the data to the sheet
    sheet.appendRow([name, email, age, dropdown, kpop, like, feedback]);
    
    return alert('Form submitted successfully');
  }