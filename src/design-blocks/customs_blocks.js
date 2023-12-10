// Function to return the R code text
function getRCodeText(){
    var blocks = workspace.getTopBlocks(true);
    var code = blocks.map(function(block) {
        return Blockly.JavaScript.blockToCode(block);
    }).join('\n');
    return code;
}

// Function to update the R code display
function updateRCode() {
    var rCodeDisplay = document.getElementById('rCodeDisplay');

    var code = getRCodeText();
    code += '\n'; // So the horizontal scroll wheel doesn't hinder the last line

    document.getElementById('rCodeDisplay').innerHTML = '<pre style="font-family: \'Courier New\', monospace; height: auto; overflow: auto;"><code>' + code + '</code></pre>';
    // document.getElementById('rCodeDisplay').innerHTML = '<p="font-family: "Courier New", monospace; background-color: #000000;">' + code + '</p>';

    rCodeDisplay.style.display = 'block';
}

// Function to download the R code to file
function download() {
    updateRCode();

    // Get the generated R code.
    var rCode = getRCodeText();

    // Remove semicolons from the end of each line (if any).
    rCode = rCode.replace(/;\s*$/gm, ''); // Remove semicolon at the end of each line

    if (rCode === ""){ // In case there are no created blocks
        return;
    }

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

// Sleep function (used for copy button)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to copy the code instead of highlighting and copying all
async function copyCode() {
    updateRCode();

    // Get the generated R code.
    var rCode = getRCodeText();

    // Remove semicolons from the end of each line (if any).
    rCode = rCode.replace(/;\s*$/gm, ''); // Remove semicolon at the end of each line

    if (rCode === ""){ // In case there are no created blocks
        return;
    }

    // Get the text field
    var blob = new Blob([rCode], { type: 'text/plain' });
  
    // Create a new ClipboardItem object from the text field's value
    var clipboardItem = new ClipboardItem({ "text/plain": blob });
  
    // Write the ClipboardItem object to the clipboard
    navigator.clipboard.write([clipboardItem]);

    // Button animation confirmation:

    var original_message = `Copy Code to Clipboard <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>   <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/> </svg>`;
    document.getElementById("clipboardButton").innerHTML = "Code Copied! ✅";
    await sleep(3000);
    document.getElementById("clipboardButton").innerHTML = original_message;
}

// Save the blocks into an XML file
function saveBlocks() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xml);
    var blob = new Blob([xmlText], {type: 'text/xml'});
    var a = document.createElement('a');
    a.download = 'blocks.xml';
    a.href = URL.createObjectURL(blob);
    a.click();
}

// Load the XML file into blocks
function loadBlocks() {
    document.getElementById('loadInput').click();
}

// Handles the file reading for XML file
function loadBlocksFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var xml = Blockly.utils.xml.textToDom(e.target.result);
        Blockly.Xml.appendDomToWorkspace(xml, workspace);
    };
    reader.readAsText(file);
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Numeric type definition
Blockly.JavaScript['numeric_type'] = function (block) {
    return ("" + block.getFieldValue('NUM_VALUE'));
};

// String definition
Blockly.JavaScript['string_type'] = function (block) {
    // Adding quotes around
    return ('"' + block.getFieldValue('STR_VALUE') + '"');
};

// List type
Blockly.JavaScript['list_type'] = function (block) {
    // Start of list definition
    var list_string = "c("
    var inputBlock = block.getInputTargetBlock('LIST_VALUES');
    // Recursive element addition
    list_string += Blockly.JavaScript.blockToCode(inputBlock);
    // Removes trailing comma of the list string
    if (list_string.length > 2){
        list_string = list_string.slice(0, -1);
    }
    // End of list definition
    list_string += ")";

    return list_string
};

// List element that only accepts numbers or another nested list, which will join into one large list
Blockly.JavaScript['list_element_type'] = function (block) {
    var inputBlock = block.getInputTargetBlock('LIST_ELEMENT_VALUE');
    var code = Blockly.JavaScript.blockToCode(inputBlock);
    if (code === ""){
        return "";
    } else {
        return ("" + code + ",");
    }
};

// Empty null type. Rarely used but there if needed
Blockly.JavaScript['null_type'] = function (block) {
    return ("NULL");
};

// Prints/displays the output
Blockly.JavaScript['print_type'] = function (block) {
    var inputBlock = block.getInputTargetBlock('OUTPUT_VALUE');
    var code = Blockly.JavaScript.blockToCode(inputBlock);
    return ("print(" + code + ")\n");
};

// Creates the variable
Blockly.JavaScript['variable_creation_type'] = function (block) {
    var var_name = block.getFieldValue('VAR');
    var inputBlock = block.getInputTargetBlock('VAR_VALUE');

    // If nothing attached, variable is not created
    if (inputBlock == null){
        return "";
    }
    var code = Blockly.JavaScript.blockToCode(inputBlock);

    // Can't have empty variable name
    if (var_name === ""){
        var_name = "sample_variable1";
    }

    return (var_name + " <- " + code + "\n");
}

// Pre-existing variable name. Up to the user to validate if variable has already been created
Blockly.JavaScript['variable_usage_type'] = function (block) {
    return ("" + block.getFieldValue('OLD_VAR'));
}

// Aggregates list of numbers
Blockly.JavaScript['aggregate_type'] = function (block) {
    var agg_type = block.getFieldValue('AGGREGATE_TYPE');
    var inputBlock = block.getInputTargetBlock('AGG_VALUE');
    if (inputBlock == null){
        return "";
    }
    var list_code = Blockly.JavaScript.blockToCode(inputBlock);
    
    // Different Aggregations generate different code
    if (agg_type === "MEAN"){
        return "mean(" + list_code + ")";
    } else if (agg_type === "MEDIAN"){
        return "median(" + list_code + ")";
    } else if (agg_type === "MODE"){
        return 'as.numeric(names(table(' + list_code + ')[table(' + list_code + ') == max(table(' + list_code + '))]))';
    } else if (agg_type === "RANGE"){
        return "max(" + list_code + ") - min(" + list_code + ")";
    } else if (agg_type === "SUM"){
        return "sum(" + list_code + ")";
    } else if (agg_type === "MIN"){
        return "min(" + list_code + ")";
    } else if (agg_type === "MAX"){
        return "max(" + list_code + ")";
    } else {
        return "";
    }
}

// Creates a list of random numbers. Asks for replacement
Blockly.JavaScript['random_list_type'] = function (block) {
    var number_of_vals = block.getFieldValue('NUM_VALUES');;
    var boundary_1 = block.getFieldValue('BOUNDARY_1');
    var boundary_2 = block.getFieldValue('BOUNDARY_2');
    var replace = "" + block.getFieldValue('WITH_REPLACEMENT');

    // Handles if the min and max are swapped (like "numbers between 9 and 2")
    var min = Math.ceil(Math.min(boundary_1, boundary_2));
    var max = Math.floor(Math.max(boundary_1, boundary_2));
    return "sample(" + min + ":" + max + ", " + number_of_vals + ", replace = " + replace + ")"
};

// Plots an inputted list of numbers
Blockly.JavaScript['plot_type'] = function (block) {
    var plot_type = block.getFieldValue('PLOT_TYPE');
    var inputBlock = block.getInputTargetBlock('PLOT_LIST');
    if (inputBlock == null){
        return "";
    }
    var list_code = Blockly.JavaScript.blockToCode(inputBlock);
    
    // Handles different plot types based on the chosen plot
    if (plot_type === "HIST"){
        return `hist(` + list_code + `, main = "Histogram", xlab = "Values", ylab = "Frequency")\n`;
    } else if (plot_type === "FREQ_POLY"){
        var str = `temporary_freq_poly_list <- ` + list_code + `\n`;
        str += `hist(temporary_freq_poly_list, freq = FALSE, main = "Frequency Polygon", xlab = "Values", ylab = "Density")\n`;
        str += `lines(density(temporary_freq_poly_list))\n`;
        return str;
    } else if (plot_type === "DENSITY"){
        return `plot(density(` + list_code + `), main = "Density Plot")\n`;
    } else if (plot_type === "BOX_PLOT"){
        return `boxplot(` + list_code + `, main = "Box Plot")\n`;
    } else if (plot_type === "ECDF"){
        return `plot(ecdf(` + list_code + `), main = "ECDF Plot", verticals = TRUE)\n`;
    } else {
        return "";
    }
}