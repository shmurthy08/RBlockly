// MILESTONE 1 FILE

// Function to update the R code display
function updateRCode() {
    var rCodeDisplay = document.getElementById('rCodeDisplay');

    var blocks = workspace.getTopBlocks(true);
    var code = blocks.map(function(block) {
        return Blockly.JavaScript.blockToCode(block);
    }).join('\n');
    
    // Split code lines and wrap each line in a div with a class
    var codeLines = code.split('\n').map(function(line) {
        return '<div class="code-line">' + line + '</div>';
    }).join('');

    document.getElementById('rCodeDisplay').innerHTML = codeLines;

    rCodeDisplay.style.display = 'block';
}

function download() {
    // Get the generated R code.
    var rCode = Blockly.JavaScript.workspaceToCode(workspace);

    // Remove semicolons from the end of each line (if any).
    rCode = rCode.replace(/;\s*$/gm, ''); // Remove semicolon at the end of each line

    // Create a Blob containing the R code as text.
    var blob = new Blob([rCode], { type: 'text/plain' });

    // Create a temporary URL for the Blob.
    var url = URL.createObjectURL(blob);

    // Create an anchor element for the download link.
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'generated_R_code.R'; // Set the file name as you like

    // Trigger a click event on the anchor element to initiate the download.
    downloadLink.click();

    // Release the allocated resources.
    URL.revokeObjectURL(url);
}

// Behavior of Empty Block
Blockly.JavaScript['empty_block'] = function (block) {
    var varName = block.getFieldValue('NUM');          
    var code = "empty_block_test <- " + varName;
    
    return code
  };

// Behavior of Initializing a variable in R
Blockly.JavaScript['r_variable'] = function (block) {
var varName = block.getFieldValue('VAR_NAME');
var initialValue = block.getFieldValue('INITIAL_VALUE') || 'NULL';

var code = varName + ' <- ' + initialValue;

return code
};

// Behavior of initializing a list
Blockly.JavaScript['initialize_list'] = function (block) {
    var listName = block.getFieldValue('LIST_NAME');
    var numbers = block.getFieldValue('NUMBERS');

    // Remove any extra whitespace and split the values by commas
    var numbersList = numbers.replace(/\s/g, '').split(',');

    // Join the values back together as a string
    var numbersString = numbersList.join(', ');

    var code = listName + ' <- c(' + numbersString + ')';
    return code
};

// Behavior of calculation mean of a list
Blockly.JavaScript['calculate_mean'] = function (block) {
    var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var varName = block.getFieldValue('VAR_NAME');

    var code = varName + ' <- ' + 'mean' + '(' + listName + ')';
    
    return code
};

// Behavior of calculating median of a list
Blockly.JavaScript['calculate_median'] = function (block) {
    var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var varName = block.getFieldValue('VAR_NAME');
    var code = varName + ' <- ' + 'median' + '(' + listName + ')';
    
    return code
};

// Behavior of calculating mode of a list
Blockly.JavaScript['calculate_mode'] = function (block) {
    var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var varName = block.getFieldValue('VAR_NAME');
    var code = varName + ' <- ' + 'as.numeric(names(sort(table(' + listName + '), decreasing = TRUE)[1]))';
    
    return code
};

// Behavior of calculating range of a list
Blockly.JavaScript['calculate_range'] = function (block) {
    var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var varName = block.getFieldValue('VAR_NAME');
    var code = varName + ' <- ' + "max" + '(' + listName + ') - ' + 'min(' + listName + ')';
    
    return code
};