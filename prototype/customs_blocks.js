// PROTOTYPE FILE

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
// Blockly.JavaScript['empty_block'] = function (block) {
//     var varName = block.getFieldValue('NUM');          
//     var code = "empty_block_test <- " + varName;
    
//     return code
//   };

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

        // Check if the block is the outer block
        if (block.getParent() == null) {
            var numbersList = numbers.replace(/\s/g, '').split(',');
            var numbersString = numbersList.join(', ');

            var code = listName + ' <- c(' + numbersString + ')\n';
            console.log('Initialize list code:', code); // Add this line for debugging
            return code;
        }

        return '';
};

// Behavior of calculating mean
Blockly.JavaScript['calculate_mean'] = function (block) {
    var varName = block.getFieldValue('VAR_NAME');
    var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    
    // Check if the block is the outer block and the list block is the parent
    if (block.getParent() == null && block.getInput('LIST_NAME').connection.targetConnection != null) {
        // Check if the input is an "initialize_list" block
        var inputBlock = block.getInputTargetBlock('LIST_NAME');
        if (inputBlock != null && inputBlock.type === 'initialize_list') {
            var numbers = inputBlock.getFieldValue('NUMBERS');
            var numbersList = numbers.replace(/\s/g, '').split(',');
            var numbersString = numbersList.join(', ');
            
            var code = varName + ' <- ' + 'mean' + '(c(' + numbersString + '))\n';
            console.log('Calculate mean code:', code); // Add this line for debugging
            return code;
        }
    }
    
    // This is a nested block or the list block is not connected, so return an empty string
    return '';
};

Blockly.JavaScript['calculate_median'] = function (block) {
    try {
        var varName = block.getFieldValue('VAR_NAME');
        var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);

        if (block.getParent() == null && block.getInput('LIST_NAME').connection.targetConnection != null) {
            var inputBlock = block.getInputTargetBlock('LIST_NAME');
            if (inputBlock != null && inputBlock.type === 'initialize_list') {
                var numbers = inputBlock.getFieldValue('NUMBERS');
                var numbersList = numbers.replace(/\s/g, '').split(',');
                var numbersString = numbersList.join(', ');

                var code = varName + ' <- ' + 'median' + '(c(' + numbersString + '))\n';
                console.log('Calculate median code:', code);
                return code;
            }
        }

        return '';
    } catch (error) {
        console.error('Error in calculate_median block:', error);
        return '';
    }
};

Blockly.JavaScript['calculate_mode'] = function (block) {
    try {
        var varName = block.getFieldValue('VAR_NAME');
        var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);

        if (block.getParent() == null && block.getInput('LIST_NAME').connection.targetConnection != null) {
            var inputBlock = block.getInputTargetBlock('LIST_NAME');
            if (inputBlock != null && inputBlock.type === 'initialize_list') {
                var numbers = inputBlock.getFieldValue('NUMBERS');
                var numbersList = numbers.replace(/\s/g, '').split(',');
                var numbersString = numbersList.join(', ');

                var code = varName + ' <- ' + 'as.numeric(names(table(c(' + numbersString + '))[table(c(' + numbersString + ')) == max(table(c(' + numbersString + ')))]))' + '\n';
                console.log('Calculate mode code:', code);
                return code;
            }
        }

        return '';
    } catch (error) {
        console.error('Error in calculate_mode block:', error);
        return '';
    }
};

Blockly.JavaScript['calculate_range'] = function (block) {
    try {
        var varName = block.getFieldValue('VAR_NAME');
        var listName = Blockly.JavaScript.valueToCode(block, 'LIST_NAME', Blockly.JavaScript.ORDER_ATOMIC);

        if (block.getParent() == null && block.getInput('LIST_NAME').connection.targetConnection != null) {
            var inputBlock = block.getInputTargetBlock('LIST_NAME');
            if (inputBlock != null && inputBlock.type === 'initialize_list') {
                var numbers = inputBlock.getFieldValue('NUMBERS');
                var numbersList = numbers.replace(/\s/g, '').split(',');
                var numbersString = numbersList.join(', ');

                var code = varName + ' <- ' + 'max' + '(c(' + numbersString + ')) - ' + 'min(c(' + numbersString + '))\n';
                console.log('Calculate range code:', code);
                return code;
            }
        }

        return '';
    } catch (error) {
        console.error('Error in calculate_range block:', error);
        return '';
    }
};
