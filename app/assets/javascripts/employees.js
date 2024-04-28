document.addEventListener('DOMContentLoaded', function() {
    const sortDropdown = document.getElementById('employees-sort');
  
    if (sortDropdown) {
      sortDropdown.addEventListener('change', handleSortChange);
    }
  });
  
  function handleSortChange() {
    let sortBy = this.value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    rows.sort((a, b) => {
      let aValue = a.querySelector(`td:nth-child(${['name', 'age', 'position'].indexOf(sortBy) + 1})`).innerText;
      let bValue = b.querySelector(`td:nth-child(${['name', 'age', 'position'].indexOf(sortBy) + 1})`).innerText;
      return aValue.localeCompare(bValue);
    });
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
  }
  