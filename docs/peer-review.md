# Peer Review Feedback for our Project

This document will outline the peer review process done for our group's project and the given feedback, along with how our group decided to handle each issue and pull request. Overall there were three issues created, and two pull requests.

## Issues

### [Issue 1: Copy paste functionality sometimes does not work](https://github.com/shmurthy08/RBlockly/issues/15)
#### Created by [Tyler Kay](https://github.com/TylerKay)

Issue Message: 
> When trying to copy and paste the generated R code, sometimes it doesn't work properly. I'm thinking it might be how the Blockly window is set up in index.html, but I'm not sure. I am also aware that this is a problem in my team's project as well so we can hash out this solution together if your team does find a solution.

Issue Response by [Shree Murthy](https://github.com/shmurthy08):
> Thanks Tyler for the issue, this seems to be a common issue amongst RBlockly workspaces. My group's best guess is to create a copy button to that copies what's inside of a section but please let us know if you find another issue.

Actions taken/will be taken:
- Like Shree mentioned, we will definitely add a `Copy Code` button that will prevent an issue like this from happening again. The group that reviewed us raised this issue after we raised the same issue with them, so it's likely that the javascript generating the code is what's preventing a static element from being copied. However, maybe using javascript for a copy code button will solve that issue.

### [Issue 2: Suggestion for UI layout - Adding tabs](https://github.com/shmurthy08/RBlockly/issues/16)
#### Created by [Tyler Kay](https://github.com/TylerKay)

Issue Message: 
> When exploring the webpage for the first time, it was confusing how all the blocks were laid out. Currently, all the blocks are displayed in one tab (on the left). One suggestion I would add would be to separate the blocks through different tabs rather than color-coding the blocks. The user does not know what each color means, so it would be helpful to have a tab name/category for each block. This would help improve the UX.

Issue Response by [Rahul Sura](https://github.com/rsura):
> Thank you for this suggestion [@TylerKay](https://github.com/TylerKay). Most likely, the categories we would consider using would be `Data Types`, `Flow Elements` (containing Print and Variable Creation), and `Other` (Aggregation, Variable Usage, and we will add Visualization later). I like your idea, but generally, we don't want there to be only one or two blocks per category since we don't have that many blocks, and clicking twice for a certain block may not be as user-friendly.

Actions taken/will be taken:
- This pertains to a pull request that will be mentioned later in this document. This is a good idea, but the implementation [explained below](#pull-request-1-added-tabscategories) was a little excessive, since we don't have that many blocks and each category had only 1 or 2 blocks. The issue response better outlines what we think we will add onto the project.

### [Issue 3: Suggestion for example](https://github.com/shmurthy08/RBlockly/issues/19)
#### Created by [Madison Schultz](https://github.com/madischultz)

Issue Message: 
> Your README file is very well laid out, however users may benefit from having a step by step instruction, or an example image of how to configure the blocks.

Issue Response by [Dylan Inafuku](https://github.com/dinafuku):
> Got it. Thank you [@madischultz](https://github.com/madischultz) for this suggestion!

Actions taken/will be taken:
- This is a pretty self-explanatory issue, and we will create a comprehensive example layout of blocks to add to the README, so that the user can reference how to use the RBlockly workspace correctly. It at least showed us that no matter how modular and intuitive we believe our project is, we should provide more for users to get a more encompassing picture.

## Pull Requests

### [Pull Request 1: Added tabs/categories](https://github.com/shmurthy08/RBlockly/pull/17)
#### Created by [Tyler Kay](https://github.com/TylerKay)

Pull Request Message: 
> To help with the UX design, I added categories to help organize the blocks. This is ~line 250 in index.html. The labels will depend on your team and how you would like to structure it, but I just inserted code to give you a start. Since this project seems to be geared towards those who have little to no experience with R, I suggest adding some details and possibly some comments inside the code generation to help streamline what is happening.

Pull Request Response by [Rahul Sura](https://github.com/rsura):
> Hi Tyler, thank you for this suggestion. Most likely, the categories we would consider using would be `Data Types`, `Flow Elements` (containing Print and Variable Creation), and `Other` (Aggregation, Variable Usage, and we will add Visualization later). I like your idea, but generally, we don't want there to be only one or two blocks per category since we don't have that many blocks, and clicking twice for a certain block may not be as user-friendly.

Reason(s) for *rejecting* the pull request:
- Like mentioned earlier, this is a good idea, but the implementation was a tad excessive, since we don't have that many blocks and each category that was suggested had only 1 or 2 blocks. The issue response better outlines what we think we will add onto the project.
- Also, this was one pull request of two, even though only one pull request was required per group review. Hence, to avoid merge conflicts, this suggestion will be taken into account and credited later, but will just be rejected for now

### [Pull Request 2: Added the sum() function](https://github.com/shmurthy08/RBlockly/pull/18)
#### Created by [Austin Simpson](https://github.com/Austin-Simpson)

Pull Request Message: 
> Added the `sum()` function to the Aggregate block dropdown menu

Pull Request Response by [Rahul Sura](https://github.com/rsura):
> I like this! We were going to add min and max as well later on, but I hadn't thought about implementing sum. Thank you for the changes!

Reason(s) for *accepting* the pull request:
- There are so many functions that can be done on 1-D list of numerical elements, and although it's not a substantial addition, it still is quite valuable, since the whole purpose of R is statistical analysis, and any addition is valued, especially ones we hadn't thought about/considered.