# README for Rblockly Project

## Group Members

- **Josh Edmondson** (Email: jedmondson@chapman.edu)
- **Rahul Sura** (Email: sura@chapman.edu)
- **Shree Murthy** (Email: shmurthy@chapman.edu)
- **Dylan Inafuku** (Email: dinafuku@chapman.edu)

## Project: Rblockly - Creating Blockly Blocks for R Functions

## [Link to Github Page of Project](https://shmurthy08.github.io/RBlockly/src/design-blocks/index.html )

### External Dependency Instructions:

- Download R and RStudio beforehand to be able to download the R code and run it in RStudio
- If your R and RStudio is not working use the following online IDE: https://replit.com/languages/rlang
    - Only thing would be to copy the code in the R file that you download and paste it into your replit workspace. 

### Motivation

The R programming language is a powerful tool for data analysis, statistical modeling, and data visualization. However, it can be intimidating for beginners due to its syntax and relatively steep learning curve. This project, Rblockly, aims to make R more accessible and user-friendly, especially for those who are new to programming.

### Project Description

Rblockly is an innovative project that bridges the gap between R programming and visual coding. We are creating a set of Blockly blocks specifically designed for R functions, focusing on key tasks such as:

1. **Creating Variables**: Rblockly allows users to create variables visually. Users can specify the variable name and assign it a value, all through intuitive block-based interactions.

2. **Working with Lists of Numbers**: We provide blocks for creating and manipulating lists of numbers, a fundamental data structure in R. Users can easily create lists and perform operations like adding, removing, and accessing elements.

3. **Statistical Functions**: Rblockly simplifies the process of conducting basic statistical calculations. Users can employ blocks to calculate mean, median, mode, and range for their data sets effortlessly.

### Goals

Our project has clear objectives:

1. **Simplify R Programming**: Rblockly will simplify R programming by providing a visual interface for creating R scripts related to variable management and basic statistics.

2. **Enhance Learning and Education**: Rblockly will serve as an educational tool for teaching programming concepts and data analysis using R, with a focus on creating variables, working with lists, and conducting simple statistical operations.

3. **Reduce Errors**: The visual nature of Blockly can help reduce syntax errors and coding mistakes, making it easier for users to write correct R code for variable management and basic statistics.

We are excited about the potential impact of Rblockly on the R programming community, especially in simplifying variable management and basic statistics. Our project aims to democratize data analysis and programming by making these fundamental aspects of R more approachable and enjoyable for everyone.

Feel free to reach out to any of our team members if you have questions, suggestions, or would like to contribute to this exciting project. Thank you for your interest in Rblockly!

### How does this project relate to Parsing, Interpretation, Compilation

**Parsing**: In Rblockly, parsing plays a crucial role in transforming valid R code into the visual representations of blocks and their configurations. When users interact with the visual interface, the system must parse their actions and translate them from the appropriate R syntax. This parsing process ensures that the visual representation is presented properly after the backend takes care of the syntax and code logic. 

**Interpretation**: Rblockly involves the interpretation of user actions and configurations to execute specific R functions. Each block in our DSL corresponds to a specific R operation or set of operations. The interpretation process involves taking R code and converting it into an equivalent visual representation in block format. For example, when a user creates a variable using a block, the system interprets the block with its equivalent R code that initializes the variable.

**Compilation**: Although Rblockly primarily focuses on interpretation, it can also involve elements of compilation in the case of the blocks. Our Rblocklys will be considered a high-level language and javascript will be the low-level language which will compile the Rblocklys and display their proper outputs. 

In summary, Rblockly engages with parsing to convert R syntax into visual representations, interpretation to execute R code based on user interactions, and compilation for the Rblocklys including their visual output. These concepts are fundamental to the successful development and operation of Rblockly.

### Example Usage

We know that the modularity of this project can be possibly a little overwhelming, but here is a relatively comprehensive example of what you can do with RBlockly:

![https://media.discordapp.net/attachments/1172474933536882698/1172474962137841685/ExampleBlocks.png?ex=65607366&is=654dfe66&hm=496a98b69e0525b8d4c5d1b2737a8d416973deb3c4f45381a327b7a30526a478&=&width=1164&height=1228](https://media.discordapp.net/attachments/1172474933536882698/1172474962137841685/ExampleBlocks.png?ex=65607366&is=654dfe66&hm=496a98b69e0525b8d4c5d1b2737a8d416973deb3c4f45381a327b7a30526a478&=&width=1164&height=1228)

And here is example output from all these blocks:

![https://media.discordapp.net/attachments/1172474933536882698/1172474980940926996/ExampleOutput.png?ex=6560736a&is=654dfe6a&hm=dd641e181b0d55cfe6268e7cbe06f9fc4419a5b1abc54d2beefa5ba24f5491ca&=&width=1916&height=596](https://media.discordapp.net/attachments/1172474933536882698/1172474980940926996/ExampleOutput.png?ex=6560736a&is=654dfe6a&hm=dd641e181b0d55cfe6268e7cbe06f9fc4419a5b1abc54d2beefa5ba24f5491ca&=&width=1916&height=596)