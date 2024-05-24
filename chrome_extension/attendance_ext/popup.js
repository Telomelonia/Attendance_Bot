let clickerInterval;

document.getElementById('startClicker').addEventListener('click', () => {
  const rowIndex = parseInt(document.getElementById('rowIndex').value, 10);
  if (!isNaN(rowIndex)) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: startClicker,
        args: [rowIndex],
      });
    });
  } else {
    alert('Please enter a valid row index.');
  }
});

document.getElementById('stopClicker').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: stopClicker,
    });
  });
});

function startClicker(rowIndex) {
  if (window.clickerInterval) {
    clearInterval(window.clickerInterval);
  }

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

  window.clickerInterval = setInterval(() => clickButtonInNthRow(rowIndex), 10000);
  alert(`Auto clicker started for row ${rowIndex}`);
}

function stopClicker() {
  if (window.clickerInterval) {
    clearInterval(window.clickerInterval);
    window.clickerInterval = null;
    alert('Auto clicker stopped');
  } else {
    alert('Auto clicker is not running');
  }
}
