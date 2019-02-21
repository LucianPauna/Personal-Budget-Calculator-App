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
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };
  
  var formatNumber = function(num, type) {
    var numSplit, int, dec, sign;
    
    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];
    if (int.length > 3) {
      int = int.substr(0, int.length -3) + ',' + int,substr(int.length - 3, 3);
    }
    
    type === 'exp' ? sign = '-' : sign = '+';
    return sign + ' ' + int + '.' + dec;
    
  };
  
  var nodeListForEach = function(nodeList, callback) {
    for (var i = 0; i < nodeList.length; i++) {
      callback(nodeList[i], i);
    }
  };
  
  return {
    getInput: function() {
      return {
        type: document.querySelector(domStrings.inputType).value, // inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: parseFloat(document.querySelector(domStrings.inputValue).value)
      }
    },
    
    addListItem: function(obj, type) {
      var html, element, newHtml;
      
      // Create HTML strings with placeholder text
      if (type === 'inc') {
        element = domStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = domStrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      
      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%',formatNumber(obj.value, type));
      
      // Insert the HTML into the dom
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    
    deleteListItem: function(selectorID) {
      var element = document.getElementById(selectorID);
      element.parentNode.removeChild(element);
    },
    
    clearFields: function() {
      var fields, fieldsArr;
      
      fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });
      
      fieldsArr[0].focus();
    },
    
    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';
      
      document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      
      if (obj.percentage > 0) {
        document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(domStrings.percentageLabel).textContent = '---';
      }
    },
    
    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(domStrings.expensesPercLabel);
      
      nodeListForEach(fields, function(current, index) {
        
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },
    
    displayDate: function() {
      var now, months, month, year;
      
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      
      document.querySelector(domStrings.dateLabel).textContent = months[month] + ' ' + year;
    },
    
    changeType: function() {
      var fields;
      
      fields = document.querySelectorAll(
        domStrings.inputType + ',' + 
        domStrings.inputDescription + ',' + 
        domStrings.inputValue);
        
        nodeListForEach(fields, function(current) {
          current.classList.toggle('red-focus');  
        });
        document.querySelector(domStrings.inputBtn).classList.toggle('red');
    },
    
    getDOMStrings: function() {
      return domStrings;
    }
  }
  
})();

module.exports = UIController;