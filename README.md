# RBlockly

## Group Members

- **Rahul Sura** (Email: sura@chapman.edu)
- **Dylan Inafuku** (Email: dinafuku@chapman.edu)
- **Shree Murthy** (Email: shmurthy@chapman.edu)
- **Josh Edmondson** (Email: jedmondson@chapman.edu)

### [Link to Project's Github Pages](https://shmurthy08.github.io/RBlockly/src/design-blocks/index.html)

### [RBlockly - Documentation](https://github.com/shmurthy08/RBlockly/blob/main/docs/documentation.md)

### Relevant Videos about the project

| [About the Project](https://drive.google.com/file/d/10BJ3UKza__44V3t8VrAOoYYX1c-ZPT41/view?usp=drive_link) | [Technical Introduction](https://drive.google.com/file/d/1Lu86lGV4dcqRz8_Ed_hcUHvyoxZrC8Ya/view?usp=sharing) |
|-|-|

### Motivation

The R programming language is a powerful tool for data analysis, statistical modeling, and data visualization. However, it can be intimidating for beginners due to its syntax and relatively steep learning curve. This project, RBlockly, aims to make R more accessible and user-friendly, especially for those who are new to programming.

### Future Work 

For the future we plan on expanding on the WebR implementation such that more graphs of varying degrees can be implemented. Furthermore, we aim to add more statistical functions and adding in Linear Regression, Logistic Regression and other models. Moreover, we want to implement a React.js version of the app instead of using vanilla JS to increase effectiveness and responsiveness (i.e making popups resizeable instead of static). 

We want to expand to have this published in a fashion that can have more users using it (i.e the education perspective). Maybe looking into covnerting to AWS or GCP (Google Cloud Platform) to take advantage of their resources and ensure that the website can be made worldwide and not region-locked. Building an in-web database storage system to store recent history of blocks (i.e the XML code) as well as possibly using MySQL/PostgreSQL to store into the database. 

### Contributions

Shree Murthy - Made/Managed the source README.md, created design.md files as well as documentation.md file. Handled all other .md file work. Josh Edmondson helped with this documentation and provided insight for my edits. Helped Rahul and Dylan from a pair programming perspective

Josh Edmondson - Helped Shree Murthy with the md files that he created and managed. Provided debugging and testing feedback for Dylan and Rahul. Helped flesh out the about the project video. Had pair programmed with Dylan and Rahul

Rahul Sura - Impelmented the WebR Feature and the new UI that includes all the various buttons and containers. Also created the folders to store the blocks. Modularized the code with help from Dylan

Dylan Inafuku - Created the original interface with help from Rahul. Made all the original functionality of the blocks and the buttons. Leveraged the Blockly documentation to create a great baseline program that was used to build the future iterations. Helped Shree with documentation.md file.

### External Dependency Instructions:

- If you choose to download the generated R file and run it locally:
    - Download the `R` terminal tool and `RStudio` beforehand to be able to download the R code and run it in `RStudio`
    - If your `R` and `RStudio` is not working, use the following online [Replit IDE](https://replit.com/languages/rlang): 
        - Then, copy the code in the R file that you download and paste it into your Replit workspace. 

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

#### **Note About Project:** The way that our group likes to work is pair programming, which is essentially the process of having one person actually writing the code while we all chime in with our own inputs of how to implement/improvise/debug

### Example Usage

We know that the modularity of this project can be possibly a little overwhelming, but here is a relatively comprehensive example of what you can do with RBlockly:

![https://cdn.discordapp.com/attachments/1172474933536882698/1182085341847498815/RBlocklyExample.png?ex=658369c3&is=6570f4c3&hm=4a5efd7763123d3b0287187cf39ee13e0a44fe3d0a2df1ebd0cec606364b5a2e&](https://cdn.discordapp.com/attachments/1172474933536882698/1182085341847498815/RBlocklyExample.png?ex=658369c3&is=6570f4c3&hm=4a5efd7763123d3b0287187cf39ee13e0a44fe3d0a2df1ebd0cec606364b5a2e&)
