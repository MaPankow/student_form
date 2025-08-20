# Student form

## Original task suggestions

A little React app to practice the State Hook mainly. The idea is prompted in the Learn React course of Codecademy. There is no code given and it's no "official" project, so all ist built from scratch.

The task is to build a form in which a student's data are entered, with text fields for, First name, Last name, Age, Address, Homeroom class number, Student ID.

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