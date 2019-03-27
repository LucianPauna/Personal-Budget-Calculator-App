var BudgetController = (function() {
    
    var Expenses = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };
    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    
    Expenses.prototype.calcPercentage = function(totalIncome) {
      if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
        this.percentage = -1;
      }
    };
    
    Expenses.prototype.getPercentage = function() {
      return this.percentage;
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
    };
    
    return {
      addItem: function(type, des, val) {
          var newItem, ID;
          
          //[1 2 3 4 5], next ID = 6
          //[1 2 4 6 8], next ID = 9
          // ID = last ID + 1
          
          // Create new ID
          if (data.allItems[type].length > 0) {
              ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
          } else {
              ID = 0;
          }
          
          // Create new item based on 'inc' or 'exp' type
          if (type === 'exp') {
              newItem = new Expenses(ID, des, val);
          } else if (type === 'inc') {
              newItem = new Income(ID, des, val);
          }
          
          // Push it into our data structure
          data.allItems[type].push(newItem);
          
          // Return the new element
          console.log(data.allItems[type]);
          return newItem;
      },
      
      deleteItem: function(type, id) {
        var ids, index;
        
        ids = data.allItems[type].map(function(current) {
                return current.id;
        });
        
        index = ids.indexOf(id);
        if (index !== -1) {
          data.allItems[type].splice(index, 1);
        }
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
      
      calculatePercentages: function() {
        
        data.allItems.exp.forEach(function(current) {
          current.calcPercentage(data.totals.inc);
        });
        
      },
      
      getPercentages: function() {
        var allPerc = data.allItems.exp.map(function(current) {
          return current.getPercentage();
        });
        return allPerc;
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