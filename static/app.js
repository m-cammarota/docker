async function fetchItem() {
    const itemId = document.getElementById('itemId').value;
    const query = document.getElementById('query').value;
    const resultDiv = document.getElementById('result');
    
    try {
        const url = `/api/items/${itemId}${query ? '?q=' + query : ''}`;
        const response = await fetch(url);
        const data = await response.json();
        
        resultDiv.textContent = JSON.stringify(data, null, 2);
        resultDiv.style.background = '#e8f5e9';
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message;
        resultDiv.style.background = '#ffebee';
    }
}

async function checkHealth() {
    const healthDiv = document.getElementById('health');
    
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        
        healthDiv.textContent = JSON.stringify(data, null, 2);
        healthDiv.style.background = '#e8f5e9';
    } catch (error) {
        healthDiv.textContent = 'Error: ' + error.message;
        healthDiv.style.background = '#ffebee';
    }
}