// app/assets/javascripts/sorting.js

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the events sort dropdown
    document.getElementById('events-sort').addEventListener('change', function() {
      var sortBy = this.value; // Get the selected sorting option
      var events = document.querySelectorAll('.event-row'); // Get all event rows
  
      // Convert NodeList to Array for easier manipulation
      events = Array.prototype.slice.call(events);
  
      // Sort events based on the selected option
      events.sort(function(a, b) {
        var aValue = a.dataset[sortBy];
        var bValue = b.dataset[sortBy];
  
        // Handle sorting for different data types
        if (isNaN(aValue) || isNaN(bValue)) {
          return aValue.localeCompare(bValue); // String comparison
        } else {
          return aValue - bValue; // Numeric comparison
        }
      });
  
      // Re-append sorted event rows to the events table
      var eventsTable = document.getElementById('events-table');
      events.forEach(function(event) {
        eventsTable.appendChild(event);
      });
    });
  
    // Event listener for the employees sort dropdown (similar logic as above)
    document.getElementById('employees-sort').addEventListener('change', function() {
      var sortBy = this.value;
      var employees = document.querySelectorAll('.employee-row');
      employees = Array.prototype.slice.call(employees);
  
      employees.sort(function(a, b) {
        var aValue = a.dataset[sortBy];
        var bValue = b.dataset[sortBy];
  
        if (isNaN(aValue) || isNaN(bValue)) {
          return aValue.localeCompare(bValue);
        } else {
          return aValue - bValue;
        }
      });
  
      var employeesTable = document.getElementById('employees-table');
      employees.forEach(function(employee) {
        employeesTable.appendChild(employee);
      });
    });
  });
  