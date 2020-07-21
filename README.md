# Template Engine - Employee Summary :busts_in_silhouette:

## Description

This is a command line application built in node.js and html.

## Usage

The purpose of this app is to dynamically generate an HTML page using information obtained from the terminal. The app prompts the user for information about all the team members. The user can input any number of team members, and they may be a mix of engineers, managers and interns.

## Dependecies Used

The app uses "inquirer" for the user prompts, "jest" to run tests on the app's classes, and "fs" to create and write into a file.

## Functionality

1. The terminal prompts the user to add a manager, engineer or intern.
2. The terminal asks the user for general information about the team member and specific details depending on the team member's rank (manager, engineer or intern).
3. After all the information is collected, the terminal asks the user if they would like to add another team member.
  - If yes, the user can select a new rank (manager, engineer or intern).
  - If no, all the information collected generates an html file where the user can find the final team roster.

## User Interface

![Screen Shot 2020-03-11 at 11 26 52 PM](https://user-images.githubusercontent.com/58242373/76484487-4e965f80-63f0-11ea-9458-1602a9c76499.png)

## Published:
<https://arobl034.github.io/TemplateEngine.github.io/>
