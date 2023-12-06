# README for RBlockly Project

## Group Members

- **Rahul Sura** (Email: sura@chapman.edu)
- **Dylan Inafuku** (Email: dinafuku@chapman.edu)
- **Shree Murthy** (Email: shmurthy@chapman.edu)
- **Josh Edmondson** (Email: jedmondson@chapman.edu)

## Project: RBlockly - Creating Blockly Blocks for R Functions

### [Link to Project's Github Pages](https://shmurthy08.github.io/RBlockly/src/design-blocks/index.html)

### Relevant Videos about the project

| [About the Project](https://drive.google.com/file/d/10BJ3UKza__44V3t8VrAOoYYX1c-ZPT41/view?usp=drive_link) | [Technical Introduction](https://drive.google.com/file/d/1Lu86lGV4dcqRz8_Ed_hcUHvyoxZrC8Ya/view?usp=sharing) |
|-|-|

### External Dependency Instructions:

- If you choose to download the generated R file and run it locally:
    - Download the `R` terminal tool and `RStudio` beforehand to be able to download the R code and run it in `RStudio`
    - If your `R` and `RStudio` is not working, use the following online [Replit IDE](https://replit.com/languages/rlang): 
        - Then, copy the code in the R file that you download and paste it into your Replit workspace. 

### Motivation

The R programming language is a powerful tool for data analysis, statistical modeling, and data visualization. However, it can be intimidating for beginners due to its syntax and relatively steep learning curve. This project, RBlockly, aims to make R more accessible and user-friendly, especially for those who are new to programming.

### Project Description

RBlockly is an innovative project that bridges the gap between R programming and visual coding. We are creating a set of Blockly blocks specifically designed for R functions, focusing on key tasks such as:

1. **Creating Variables**: RBlockly allows users to create variables visually. Users can specify the variable name and assign it a value, all through intuitive block-based interactions.

2. **Working with Lists of Numbers**: We provide blocks for creating and manipulating lists of numbers, a fundamental data structure in R. Users can easily create lists and perform operations like adding, removing, and accessing elements.

3. **Statistical Functions**: RBlockly simplifies the process of conducting basic statistical calculations. Users can employ blocks to calculate mean, median, mode, and range for their data sets effortlessly.

### Goals

Our project has clear objectives:

1. **Simplify R Programming**: RBlockly will simplify R programming by providing a visual interface for creating R scripts related to variable management and basic statistics.

2. **Enhance Learning and Education**: RBlockly will serve as an educational tool for teaching programming concepts and data analysis using R, with a focus on creating variables, working with lists, and conducting simple statistical operations.

3. **Reduce Errors**: The visual nature of Blockly can help reduce syntax errors and coding mistakes, making it easier for users to write correct R code for variable management and basic statistics.

We are excited about the potential impact of RBlockly on the R programming community, especially in simplifying variable management and basic statistics. Our project aims to democratize data analysis and programming by making these fundamental aspects of R more approachable and enjoyable for everyone.

Feel free to reach out to any of our team members if you have questions, suggestions, or would like to contribute to this exciting project. Thank you for your interest in RBlockly!

### How does this project relate to Parsing, Interpretation, Compilation

**Parsing**: In RBlockly, parsing plays a crucial role in transforming valid R code into the visual representations of blocks and their configurations. When users interact with the visual interface, the system must parse their actions and translate them from the appropriate R syntax. This parsing process ensures that the visual representation is presented properly after the backend takes care of the syntax and code logic. 

**Interpretation**: RBlockly involves the interpretation of user actions and configurations to execute specific R functions. Each block in our DSL corresponds to a specific R operation or set of operations. The interpretation process involves taking R code and converting it into an equivalent visual representation in block format. For example, when a user creates a variable using a block, the system interprets the block with its equivalent R code that initializes the variable.

**Compilation**: Although RBlockly primarily focuses on interpretation, it can also involve elements of compilation in the case of the blocks. Our RBlockly will be considered a high-level language and javascript will be the low-level language which will compile the RBlockly and display their proper outputs. 

In summary, RBlockly engages with parsing to convert R syntax into visual representations, interpretation to execute R code based on user interactions, and compilation for the RBlockly including their visual output. These concepts are fundamental to the successful development and operation of RBlockly.

### Example Usage

We know that the modularity of this project can be possibly a little overwhelming, but here is a relatively comprehensive example of what you can do with RBlockly:

![https://cdn.discordapp.com/attachments/1172474933536882698/1182085341847498815/RBlocklyExample.png?ex=658369c3&is=6570f4c3&hm=4a5efd7763123d3b0287187cf39ee13e0a44fe3d0a2df1ebd0cec606364b5a2e&](https://cdn.discordapp.com/attachments/1172474933536882698/1182085341847498815/RBlocklyExample.png?ex=658369c3&is=6570f4c3&hm=4a5efd7763123d3b0287187cf39ee13e0a44fe3d0a2df1ebd0cec606364b5a2e&)