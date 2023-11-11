function toSnakeCase(input) {
    return input.replace(/[A-Z]/g, function(match) {
        return '_' + match.toLowerCase();
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById('input');
    const convertButton = document.getElementById('convertButton');
    const outputElement = document.getElementById('output');
    
    convertButton.addEventListener("click", function() {
        const inputValue = inputElement.value;
        const snakeCaseValue = toSnakeCase(inputValue);
        outputElement.textContent = snakeCaseValue;
    });
  });
