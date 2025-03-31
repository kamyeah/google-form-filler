function submitRandomResponses() {
  var form = FormApp.openById("YOUR_FORM_ID"); 
  var items = form.getItems();

  for (var i = 0; i < 100; i++) {
    var response = form.createResponse();
    
    items.forEach(item => {
      var type = item.getType();

      if (type == FormApp.ItemType.MULTIPLE_CHOICE) {
        var choices = item.asMultipleChoiceItem().getChoices().map(c => c.getValue()).filter(c => !c.toLowerCase().includes("other"));
        var answer = choices[Math.floor(Math.random() * choices.length)];
        response.withItemResponse(item.asMultipleChoiceItem().createResponse(answer));
      } 
      else if (type == FormApp.ItemType.CHECKBOX) {
        var choices = item.asCheckboxItem().getChoices().map(c => c.getValue()).filter(c => !c.toLowerCase().includes("other"));
        var selected = choices.filter(() => Math.random() < 0.5);
        response.withItemResponse(item.asCheckboxItem().createResponse(selected));
      }
      else if (type == FormApp.ItemType.TEXT) {
        response.withItemResponse(item.asTextItem().createResponse(""));
      } 
      else if (type == FormApp.ItemType.PARAGRAPH_TEXT) {
        response.withItemResponse(item.asParagraphTextItem().createResponse(""));
      }
    });

    response.submit();
    Utilities.sleep(500);
  }
}
