The design.md file contains what will be in-scope for this initial implementation of RBlockly with an explanation of each block and an example pseudocode of what the function will do. 

## `Create Variable` Block

### Description
This block allows users to create a new variable in R. Users can specify the variable name and its initial value.

### Semantics
When this block is executed, it will generate an RBlockly that looks like this:
```R
variable_name <- initial_value
```
Where `variable_name` is the name of the variable specified by the user, and `initial_value` is the initial value provided by the user.

## `Create List` Block

### Description
This block enables users to create a list of numbers in R.

### Semantics
When this block is executed, it will generate an RBlockly to initialize a list with the provided numbers. For example:
```R
my_list <- c(num1, num2, num3, ...)
```
Where `my_list` is the name of the list, and `num1`, `num2`, `num3`, etc., are the numbers specified by the user.

## `Calculate Mean` Block

### Description
This block computes the mean (average) of a list of numbers.

### Semantics
When this block is executed, it will generate an RBlockly to calculate the mean of a specified list, like this:
```R
mean_value <- mean(my_list)
```
Where `mean_value` is the variable that will store the mean, and `my_list` is the list provided by the user.

## `Calculate Median` Block

### Description
This block calculates the median of a list of numbers.

### Semantics
When this block is executed, it will generate an RBlockly to find the median of a specified list, like this:
```R
median_value <- median(my_list)
```
Where `median_value` is the variable that will store the median, and `my_list` is the list provided by the user.

## `Calculate Mode` Block

### Description
This block finds the mode (most frequent value) of a list of numbers.

### Semantics
When this block is executed, it will generate an RBlockly to determine the mode of a specified list, like this:
```R
mode_value <- as.numeric(names(sort(table(my_list), decreasing = TRUE)[1]))
```
Where `mode_value` is the variable that will store the mode, and `my_list` is the list provided by the user.

## `Calculate Range` Block

### Description
This block computes the range (the difference between the maximum and minimum values) of a list of numbers.

### Semantics
When this block is executed, it will generate an RBlockly to find the range of a specified list, like this:
```R
range_value <- max(my_list) - min(my_list)
```
Where `range_value` is the variable that will store the range, and `my_list` is the list provided by the user.

These are some of the initial block designs with their associated semantics. Further refinement and additional blocks can be added as the project progresses and requirements evolve.
