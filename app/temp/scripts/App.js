/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BudgetController = __webpack_require__(/*! ./modules/BudgetController */ \"./app/assets/scripts/modules/BudgetController.js\");\r\nvar UIController = __webpack_require__(/*! ./modules/UIController */ \"./app/assets/scripts/modules/UIController.js\");\r\nvar GlobalController = __webpack_require__(/*! ./modules/GlobalController */ \"./app/assets/scripts/modules/GlobalController.js\");\r\n\r\n//var budgetController = new BudgetController();\r\n//var uiController = new UIController();\r\n//var globalController = new GlobalController(BudgetController, UIController);\r\n\r\n\r\n/*var BudgetController = (function() {\r\n    \r\n    var Expenses = function(id, description, value) {\r\n      this.id = id;\r\n      this.description = description;\r\n      this.value = value;\r\n    };\r\n    var Income = function(id, description, value) {\r\n      this.id = id;\r\n      this.description = description;\r\n      this.value = value;\r\n    };\r\n    \r\n    var data = {\r\n      allItems: {\r\n        exp: [],\r\n        inc: []\r\n      },\r\n      totals: {\r\n        exp: 0,\r\n        inc: 0\r\n      }\r\n    }\r\n    \r\n    return {\r\n      addItem: function(type, des, val) {\r\n        var newItem, ID;\r\n        \r\n        // Create new // ID\r\n        if(data.allItems[type].length > 0) {\r\n          ID = data.allItems[type][data.allItems[type].length -1].id + 1;\r\n        } else {\r\n          ID = 0;\r\n        }\r\n        \r\n        // Create a new item based on \"inc\" or \"exp\"\r\n        if (type === 'exp') {\r\n          newItem = new Expenses(ID, des, val);\r\n        } else if (type === 'inc') {\r\n          newItem = new Income(ID, des, val);\r\n        }\r\n        \r\n        // Push it into the data structure\r\n        data.allitems[type].push(newItem);\r\n        \r\n        // Return the new item\r\n        return newItem;  \r\n      }\r\n    };\r\n    \r\n})();\r\n\r\nvar UIController = (function() {\r\n  \r\n  var domStrings = {\r\n    inputType: '.add__type',\r\n    inputDescription: '.add__description',\r\n    inputValue: '.add__value',\r\n    inputBtn: '.add__btn',\r\n    incomeContainer: '.income__list',\r\n    expensesContainer: '.expenses__list',\r\n    budgetLabel: '.budget__value',\r\n    incomeLabel: '.budget__income--value',\r\n    expensesLabel: '.budget__expenses--value',\r\n    percentageLabel: '.budget__expenses--percentage',\r\n    container: '.container'\r\n  };\r\n  \r\n  return {\r\n    getInput: function() {\r\n      return {\r\n        type: document.querySelector(domStrings.inputType).value, // inc or exp\r\n        description: document.querySelector(domStrings.inputDescription).value,\r\n        value: parseFloat(document.querySelector(domStrings.inputValue).value)\r\n      }\r\n    },\r\n    \r\n    getDOMStrings: function() {\r\n      return domStrings;\r\n    }\r\n  }\r\n  \r\n})();\r\n\r\nvar GlobalController = (function(budgetCtrl, uiCtrl) {\r\n  \r\n  var setupEventListeners = function() {\r\n    var dom = uiCtrl.getDOMStrings();\r\n    \r\n    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);\r\n    document.addEventListener('keypress', function(event) {\r\n      if (event.keyCode === 13 || event.which === 13) {\r\n        ctrlAddItem();\r\n      }\r\n    });    \r\n  };\r\n  \r\n  var ctrlAddItem = function() {\r\n    var input;\r\n    \r\n    // 1. Get the field input data\r\n    input = uiCtrl.getInput();\r\n    console.log(input);\r\n    \r\n    // 2. Add the item to the budget controller\r\n    \r\n    // 3. Add the item to the UI\r\n    \r\n    // 4. Clear the fields\r\n    \r\n    // 5. Calculate and update budget\r\n  };\r\n  \r\n  return {\r\n    init: function() {\r\n      console.log('Application has started!');\r\n      setupEventListeners();\r\n    }\r\n  }\r\n  \r\n})(BudgetController, UIController);\r\n\r\nGlobalController.init(); */\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/BudgetController.js":
/*!********************************************************!*\
  !*** ./app/assets/scripts/modules/BudgetController.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var BudgetController = (function() {\r\n    \r\n    var Expenses = function(id, description, value) {\r\n      this.id = id;\r\n      this.description = description;\r\n      this.value = value;\r\n      this.percentage = -1;\r\n    };\r\n    var Income = function(id, description, value) {\r\n      this.id = id;\r\n      this.description = description;\r\n      this.value = value;\r\n    };\r\n    \r\n    Expenses.prototype.calcPercentage = function(totalIncome) {\r\n      if (totalIncome > 0) {\r\n        this.percentage = Math.round((this.value / totalIncome) * 100);\r\n      } else {\r\n        this.percentage = -1;\r\n      }\r\n    };\r\n    \r\n    Expenses.prototype.getPercentage = function() {\r\n      return this.percentage;\r\n    };\r\n    \r\n    var calculateTotal = function(type) {\r\n      var sum = 0;\r\n      data.allItems[type].forEach(function(current) {\r\n        sum += current.value;\r\n      });\r\n      data.totals[type] = sum;\r\n    };\r\n    \r\n    var data = {\r\n      allItems: {\r\n          exp: [],\r\n          inc: []\r\n      },\r\n      totals: {\r\n          exp: 0,\r\n          inc: 0\r\n      },\r\n      budget: 0,\r\n      percentage: -1\r\n    };\r\n    \r\n    return {\r\n      addItem: function(type, des, val) {\r\n          var newItem, ID;\r\n          \r\n          //[1 2 3 4 5], next ID = 6\r\n          //[1 2 4 6 8], next ID = 9\r\n          // ID = last ID + 1\r\n          \r\n          // Create new ID\r\n          if (data.allItems[type].length > 0) {\r\n              ID = data.allItems[type][data.allItems[type].length - 1].id + 1;\r\n          } else {\r\n              ID = 0;\r\n          }\r\n          \r\n          // Create new item based on 'inc' or 'exp' type\r\n          if (type === 'exp') {\r\n              newItem = new Expenses(ID, des, val);\r\n          } else if (type === 'inc') {\r\n              newItem = new Income(ID, des, val);\r\n          }\r\n          \r\n          // Push it into our data structure\r\n          data.allItems[type].push(newItem);\r\n          \r\n          // Return the new element\r\n          console.log(data.allItems[type]);\r\n          return newItem;\r\n      },\r\n      \r\n      deleteItem: function(type, id) {\r\n        var ids, index;\r\n        \r\n        ids = data.allItems[type].map(function(current) {\r\n                return current.id;\r\n        });\r\n        \r\n        index = ids.indexOf(id);\r\n        if (index !== -1) {\r\n          data.allItems[type].splice(index, 1);\r\n        }\r\n      },\r\n      \r\n      calculateBudget: function() {\r\n        \r\n        // Calculate total income and expenses\r\n        calculateTotal('exp');\r\n        calculateTotal('inc');\r\n        \r\n        // Calculate the budget\r\n        data.budget = data.totals.inc - data.totals.exp;\r\n        \r\n        // Calculate the percentage\r\n        if (data.totals.inc > 0) {\r\n          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);\r\n        }  else {\r\n          data.percentage = -1;\r\n        }\r\n      },\r\n      \r\n      calculatePercentages: function() {\r\n        \r\n        data.allItems.exp.forEach(function(current) {\r\n          current.calcPercentage(data.totals.inc);\r\n        });\r\n        \r\n      },\r\n      \r\n      getPercentages: function() {\r\n        var allPerc = data.allItems.exp.map(function(current) {\r\n          return current.getPercentage();\r\n        });\r\n        return allPerc;\r\n      }, \r\n      \r\n      getBudget: function() {\r\n        return {\r\n          budget: data.budget,\r\n          totalInc: data.totals.inc,\r\n          totalExp: data.totals.exp,\r\n          percentage: data.percentage\r\n        }\r\n      }\r\n    };\r\n    \r\n})();\r\n\r\nmodule.exports = BudgetController;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/BudgetController.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/GlobalController.js":
/*!********************************************************!*\
  !*** ./app/assets/scripts/modules/GlobalController.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BudgetController = __webpack_require__(/*! ./BudgetController */ \"./app/assets/scripts/modules/BudgetController.js\");\r\nvar UIController = __webpack_require__(/*! ./UIController */ \"./app/assets/scripts/modules/UIController.js\");\r\n\r\n\r\nvar GlobalController = (function(budgetCtrl, uiCtrl) {\r\n  \r\n  var setupEventListeners = function() {\r\n    var dom = uiCtrl.getDOMStrings();\r\n    \r\n    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);\r\n    document.addEventListener('keypress', function(event) {\r\n      if (event.keyCode === 13 || event.which === 13) {\r\n        ctrlAddItem();\r\n      }\r\n    });\r\n    \r\n    document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);\r\n    \r\n    document.querySelector(dom.inputType).addEventListener('change', uiCtrl.changeType);\r\n  };\r\n  \r\n  var updateBudget = function() {\r\n    \r\n    // 1. Calculate the budget\r\n    budgetCtrl.calculateBudget();\r\n    \r\n    // 2. Return the budget\r\n    var budget = budgetCtrl.getBudget();\r\n    \r\n    // 3. Display the budget\r\n    uiCtrl.displayBudget(budget);\r\n  };\r\n  \r\n  var updatePercentages = function() {\r\n    \r\n    // 1. Calculate the percentages\r\n    budgetCtrl.calculatePercentages();\r\n    \r\n    // 2. Read percentages from the budget controller\r\n    var percentages = budgetCtrl.getPercentages();\r\n    \r\n    // 3. Update the UI with the new percentages\r\n    uiCtrl.displayPercentages(percentages);\r\n    \r\n  }\r\n  \r\n  var ctrlAddItem = function() {\r\n    var input, newItem;\r\n    \r\n    // 1. Get the field input data\r\n    input = uiCtrl.getInput();\r\n    \r\n    if (input.description !== \"\" && !isNaN(input.value) && input.value > 0) {\r\n      \r\n      // 2. Add the item to the budget controller\r\n      newItem = budgetCtrl.addItem(input.type, input.description, input.value);\r\n      \r\n      // 3. Add the item to the UI\r\n      uiCtrl.addListItem(newItem, input.type);\r\n      \r\n      // 4. Clear the fields\r\n      uiCtrl.clearFields();\r\n      \r\n      // 5. Calculate and update budget\r\n      updateBudget();\r\n      \r\n      // 6. Calculate and update percentages\r\n      updatePercentages();\r\n    }\r\n  };\r\n  \r\n  var ctrlDeleteItem = function(event) {\r\n    var itemID, splitID, type, ID;\r\n    \r\n    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;\r\n    \r\n    if (itemID) {\r\n      splitID = itemID.split('-');\r\n      type = splitID[0];\r\n      ID = parseInt(splitID[1]);\r\n    }\r\n    // 1. Delete the item from the data structure\r\n    budgetCtrl.deleteItem(type, ID);\r\n    \r\n    // 2. Delete the data from the UI\r\n    uiCtrl.deleteListItem(itemID);\r\n    \r\n    // 3. Update and show the new budget\r\n    updateBudget();\r\n    \r\n    // 4. Calculate and update percentages\r\n    updatePercentages();\r\n    \r\n  };\r\n  \r\n  return {\r\n    init: function() {\r\n      console.log('Application has started!');\r\n      uiCtrl.displayDate();\r\n      uiCtrl.displayBudget({\r\n        budget: 0,\r\n        totalInc: 0,\r\n        totalExp: 0,\r\n        percentage: -1\r\n      });\r\n      setupEventListeners();\r\n    }\r\n  }\r\n  \r\n})(BudgetController, UIController);\r\n\r\nGlobalController.init();\r\n\r\nmodule.exports = GlobalController;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/GlobalController.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/UIController.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/UIController.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var UIController = (function() {\r\n  \r\n  var domStrings = {\r\n    inputType: '.add__type',\r\n    inputDescription: '.add__description',\r\n    inputValue: '.add__value',\r\n    inputBtn: '.add__btn',\r\n    incomeContainer: '.income__list',\r\n    expensesContainer: '.expenses__list',\r\n    budgetLabel: '.budget__value',\r\n    incomeLabel: '.budget__income--value',\r\n    expensesLabel: '.budget__expenses--value',\r\n    percentageLabel: '.budget__expenses--percentage',\r\n    container: '.container',\r\n    expensesPercLabel: '.item__percentage',\r\n    dateLabel: '.budget__title--month'\r\n  };\r\n  \r\n  var formatNumber = function(num, type) {\r\n    var numSplit, int, dec, sign;\r\n    \r\n    num = Math.abs(num);\r\n    num = num.toFixed(2);\r\n    numSplit = num.split('.');\r\n    int = numSplit[0];\r\n    dec = numSplit[1];\r\n    if (int.length > 3) {\r\n      int = int.substr(0, int.length -3) + ',' + int.substr(int.length - 3, 3);\r\n    }\r\n    \r\n    type === 'exp' ? sign = '-' : sign = '+';\r\n    return sign + ' ' + int + '.' + dec;\r\n    \r\n  };\r\n  \r\n  var nodeListForEach = function(nodeList, callback) {\r\n    for (var i = 0; i < nodeList.length; i++) {\r\n      callback(nodeList[i], i);\r\n    }\r\n  };\r\n  \r\n  return {\r\n    getInput: function() {\r\n      return {\r\n        type: document.querySelector(domStrings.inputType).value, // inc or exp\r\n        description: document.querySelector(domStrings.inputDescription).value,\r\n        value: parseFloat(document.querySelector(domStrings.inputValue).value)\r\n      }\r\n    },\r\n    \r\n    addListItem: function(obj, type) {\r\n      var html, element, newHtml;\r\n      \r\n      // Create HTML strings with placeholder text\r\n      if (type === 'inc') {\r\n        element = domStrings.incomeContainer;\r\n        html = '<div class=\"item clearfix\" id=\"inc-%id%\"><div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__delete\"><button class=\"item__delete--btn\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></button></div></div></div>';\r\n      } else if (type === 'exp') {\r\n        element = domStrings.expensesContainer;\r\n        html = '<div class=\"item clearfix\" id=\"exp-%id%\"><div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__percentage\">21%</div><div class=\"item__delete\"><button class=\"item__delete--btn\"><i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></button></div></div></div>';\r\n      }\r\n      \r\n      // Replace the placeholder text with some actual data\r\n      newHtml = html.replace('%id%', obj.id);\r\n      newHtml = newHtml.replace('%description%', obj.description);\r\n      newHtml = newHtml.replace('%value%',formatNumber(obj.value, type));\r\n      \r\n      // Insert the HTML into the dom\r\n      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);\r\n    },\r\n    \r\n    deleteListItem: function(selectorID) {\r\n      var element = document.getElementById(selectorID);\r\n      element.parentNode.removeChild(element);\r\n    },\r\n    \r\n    clearFields: function() {\r\n      var fields, fieldsArr;\r\n      \r\n      fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);\r\n      fieldsArr = Array.prototype.slice.call(fields);\r\n      fieldsArr.forEach(function(current, index, array) {\r\n        current.value = \"\";\r\n      });\r\n      \r\n      fieldsArr[0].focus();\r\n    },\r\n    \r\n    displayBudget: function(obj) {\r\n      var type;\r\n      obj.budget > 0 ? type = 'inc' : type = 'exp';\r\n      \r\n      document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);\r\n      document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');\r\n      document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');\r\n      \r\n      if (obj.percentage > 0) {\r\n        document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';\r\n      } else {\r\n        document.querySelector(domStrings.percentageLabel).textContent = '---';\r\n      }\r\n    },\r\n    \r\n    displayPercentages: function(percentages) {\r\n      var fields = document.querySelectorAll(domStrings.expensesPercLabel);\r\n      \r\n      nodeListForEach(fields, function(current, index) {\r\n        \r\n        if (percentages[index] > 0) {\r\n          current.textContent = percentages[index] + '%';\r\n        } else {\r\n          current.textContent = '---';\r\n        }\r\n      });\r\n    },\r\n    \r\n    displayDate: function() {\r\n      var now, months, month, year;\r\n      \r\n      now = new Date();\r\n      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n      month = now.getMonth();\r\n      year = now.getFullYear();\r\n      \r\n      document.querySelector(domStrings.dateLabel).textContent = months[month] + ' ' + year;\r\n    },\r\n    \r\n    changeType: function() {\r\n      var fields;\r\n      \r\n      fields = document.querySelectorAll(\r\n        domStrings.inputType + ',' + \r\n        domStrings.inputDescription + ',' + \r\n        domStrings.inputValue);\r\n        \r\n        nodeListForEach(fields, function(current) {\r\n          current.classList.toggle('red-focus');  \r\n        });\r\n        document.querySelector(domStrings.inputBtn).classList.toggle('red');\r\n    },\r\n    \r\n    getDOMStrings: function() {\r\n      return domStrings;\r\n    }\r\n  }\r\n  \r\n})();\r\n\r\nmodule.exports = UIController;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/UIController.js?");

/***/ })

/******/ });