# Student form

## Original task suggestions

A little React app to practice the State Hook mainly. The idea is prompted in the Learn React course of Codecademy. There is no code given and it's no "official" project, so all ist built from scratch.

The task is to build a form in which a student's data are entered, with text fields for First name, Last name, Age, Address, Homeroom class number, Student ID.

While the data is entdered, the input should be updated on change, and displayed to the screen.

An additional task is to add radio-type input to track the preferred lunch option.

So, maybe I get some more ideas for this ...

## Install React + Vite
First I set up React + Vite using

```
npm create vite@latest
```
(I have Node.js installed, so I can work directly with this command.)

Then I entered Project name, Framework(React) and variant (JavaScript) as asked in the terminal.

Then I ran:

```
cd student_form
npm install
npm run dev
```
## Setting up the student form 

I set up the State Hook and the fuction for handling user input.
As we have several fields, setting up one State for all the User Input and one function won't work. But it's lot of code to set the same thing up for each field separately. Another solution must be found ...

... but not now. I first set up the long version and get it running because I have to reasearch and leanr new stuff to make shortcuts.

The lunch options a a bit of a special task. As said in the descriptions, it should be a radio-type selection. But as I wanted the possibility to enter more than one option, I used checkboxes. I then decided for a field that gives the user additional options by first checking the field, and second, entering the option. 
The options are displayed in a list, and the 'other' option shows the user input.

## Cutting things short

As said, I have written code for each field seprately. It was set up and worked. Now, I want to shorten it step by step.

### 1. One central function for the text input field functions
The input field functions for First Name, Last Name, Birthdate (replaced Age), Address, Homeroom nmber and Student-Id had all the same function, which was to handle the input by a user in the input field. The was no other special function, only that the birthdate field had a date type. Even this can be handled the same way as a text type. So, I summarized these functions tu one Text input function and adjusted the onChange attribute in the JSX code.

### 2. Unified state object for text fields
Previously, each text input field had its own useState hook.  
I refactored the code to use a single state object (`textInput`) that holds all text field values.  
The JSX and the output rendering were updated accordingly to work with this unified structure.

### 3. Shortening the input fields
The input fields had a lot of repeated content, too. So, I shortened them to an array of objects which I can map over within the JSX.
Finally, I used the same method on the checkboxes, except the "other" checkbox.
