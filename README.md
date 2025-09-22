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


## Add an uncontrolled component for student notes

I added a new component called `StudentNotes.jsx` to practice working with uncontrolled components in React.  
It contains a `<textarea>` input field that does not use React state to track every keystroke.  
Instead, the input value is accessed only when the user submits the form — using a `ref` to read the current value from the DOM.

This avoids unnecessary re-renders when typing longer text.

### Code doesn't work as intended yet

`StudentNotes.jsx` is meant to be a child component of `StudentForm.jsx`.  
I first implemented it with `useRef()` and a submit button, but the `onSubmit` attribute on the button doesn't work as expected:  
Instead of alerting the input text, the input gets added to the URL.

As I found out, this is because the button is not wrapped in a `<form>`.  
There **is** a form – but it's defined in the parent component, and the child component doesn't "know" about it.

### Passing `ref` from parent component to child component

I needed to pass a `ref` from the parent component (via props) and properly connect the input to the existing form. To achieve this, I used `useRef` in both components and implemented the submit logic in the parent component `StudentForm.jsx`. I passed the ref as a prop to the child component.

Because of this, the child component `StudentNotes.jsx` needed to forward the ref using `forwardRef`. The `forwardRef` function is a higher-order function that takes the component as an argument and returns a new component with forwarded ref support. To illustrate this, I wrapped the component in the export statement.

### Displaying Notes after submit
Once the note was successfully alerted and the uncontrolled component was confirmed to be working, I introduced state to display the submitted note entries.

To allow submitting and displaying multiple notes, I stored the entries in an array and rendered them in an ordered list. The newest entries appear first because each new note is added to the beginning of the array using the array spread syntax `([newNote, ...prev])`.

## Creating a custom hook
I decided to use this project and parctice more React stuff with it. I want to create a custom hook now, which uses the state hook and the effect hook and toggles between a light and a dark theme.

### But first add some CSS ...