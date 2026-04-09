// Dashboard initialization and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard
    initializeDashboard();
});

function initializeDashboard() {
    console.log('Staff Dashboard initialized');
    
    // Add any interactive features here
    addTableRowHovers();
    addSaleItemInteractions();
}

function addTableRowHovers() {
    const tableRows = document.querySelectorAll('.artistes-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}

function addSaleItemInteractions() {
    const saleItems = document.querySelectorAll('.sale-item');
    saleItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}
