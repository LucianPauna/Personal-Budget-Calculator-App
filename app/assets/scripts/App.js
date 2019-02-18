var BudgetController = require('./modules/BudgetController');
var UIController = require('./modules/UIController');
var GlobalController = require('./modules/GlobalController');

//var budgetController = new BudgetController();
//var uiController = new UIController();
//var globalController = new GlobalController(BudgetController, UIController);


/*var BudgetController = (function() {
    
    var Expenses = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    
    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
    }
    
    return {
      addItem: function(type, des, val) {
        var newItem, ID;
        
        // Create new // ID
        if(data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length -1].id + 1;
        } else {
          ID = 0;
        }
        
        // Create a new item based on "inc" or "exp"
        if (type === 'exp') {
          newItem = new Expenses(ID, des, val);
        } else if (type === 'inc') {
          newItem = new Income(ID, des, val);
        }
        
        // Push it into the data structure
        data.allitems[type].push(newItem);
        
        // Return the new item
        return newItem;  
      }
    };
    
})();

var UIController = (function() {
  
  var domStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container'
  };
  
  return {
    getInput: function() {
      return {
        type: document.querySelector(domStrings.inputType).value, // inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: parseFloat(document.querySelector(domStrings.inputValue).value)
      }
    },
    
    getDOMStrings: function() {
      return domStrings;
    }
  }
  
})();

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
  
  var ctrlAddItem = function() {
    var input;
    
    // 1. Get the field input data
    input = uiCtrl.getInput();
    console.log(input);
    
    // 2. Add the item to the budget controller
    
    // 3. Add the item to the UI
    
    // 4. Clear the fields
    
    // 5. Calculate and update budget
  };
  
  return {
    init: function() {
      console.log('Application has started!');
      setupEventListeners();
    }
  }
  
})(BudgetController, UIController);

GlobalController.init(); */