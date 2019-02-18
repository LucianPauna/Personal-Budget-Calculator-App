var BudgetController = (function() {
    
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
    
    var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(current) {
        sum += current.value;
      });
      data.totals[type] = sum;
    };
    
    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
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
        data.allItems[type].push(newItem);
        
        // Return the new item
        return newItem;  
      },
      
      calculateBudget: function() {
        
        // Calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
        
        // Calculate the budget
        data.budget = data.totals.inc - data.totals.exp;
        
        // Calculate the percentage
        if (data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        }  else {
          data.percentage = -1;
        }
      },
      
      getBudget: function() {
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage
        }
      }
    };
    
})();

module.exports = BudgetController;