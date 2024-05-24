window.clickButtonInNthRow = function(rowIndex) {
    const table = document.getElementById('customers');
    const rows = table.querySelectorAll('tr');
    const row = rows[rowIndex]; 
    const lastTd = row.querySelector('td:last-child');
    const button = lastTd.querySelector('button.btn.btn-primary');
    if (button) {
      button.click();
    }
  };
  