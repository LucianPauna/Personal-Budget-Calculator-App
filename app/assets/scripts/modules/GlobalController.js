var BudgetController = require('./BudgetController');
var UIController = require('./UIController');


var GlobalController = (function(budgetCtrl, uiCtrl) {
  
  var setupEventListeners = function() {
    var dom = uiCtrl.getDOMStrings();
    
    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });    
  };
  
  var updateBudget = function() {
    
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    
    // 2. Return the budget
    var budget = budgetCtrl.getBudget();
    
    // 3. Display the budget
    uiCtrl.displayBudget(budget);
  };
  
  var ctrlAddItem = function() {
    var input, newItem;
    
    // 1. Get the field input data
    input = uiCtrl.getInput();
    
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      
      // 3. Add the item to the UI
      uiCtrl.addListItem(newItem, input.type);
      
      // 4. Clear the fields
      uiCtrl.clearFields();
      
      // 5. Calculate and update budget
      updateBudget();
    }
  };
  
  var ctrlDeleteItem = function(event) {
    
    
  };
  
  return {
    init: function() {
      console.log('Application has started!');
      uiCtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  }
  
})(BudgetController, UIController);

GlobalController.init();

module.exports = GlobalController;