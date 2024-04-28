# Plan Document
I want to write this project in Ruby as my framework for the web application. The 2 model classes I want to use would be Employee and Event.

Employee attributes: 
•	Name (string) – presence 
•	Position (string) – presence, uniqueness, format
•	Age (int) – presence, numericality

Event attributes:
•	Name (string) – presence
•	Date (dates) – presence
•	Location (string) – presence

I want to implement a sorting algorithm because I should be able to implement a client-side sort using JavaScript and it is a nice way to organize large data sets such as a list of employees for a company or list of upcoming events. 

The HTML elements for both my models should be simple where I can add clickable headers for each attribute into columns in the table, then make rows to display all records in an organized fashion. The JavaScript functionality for both models should have event listeners to register the button clicks, sorting logic for the table, updated DOM to reflect the sort by reordering the table rows, and a toggle between what the user would like to sort by.
