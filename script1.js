function toCamelCase(input) {
    return input.replace(/_./g, function(match) {
        return ' ' + match.charAt(1).toUpperCase();
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById('input');
    const convertButton = document.getElementById('convertButton');
    const outputElement = document.getElementById('output');
    
    convertButton.addEventListener("click", function() {
        const inputValue = inputElement.value;
        const camelCaseValue = toCamelCase(inputValue);
        outputElement.textContent = camelCaseValue;
    });
  });