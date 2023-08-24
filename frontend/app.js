const itemsList = document.querySelector('#items-list');

// Mocked contract functions for demonstration purposes
async function createItem(name, description, purchaseDate, purchasePrice, category, model, serialNumber, location, condition) {
    console.log("Item created:", name);
}

async function updateItem(indexToUpdate, newName, newDescription) {
    console.log("Item updated:", indexToUpdate, newName, newDescription);
}

async function getMyItems() {
    return [
        // Mocked items for demonstration purposes
        { id: 1, name: "Item 1", description: "Description 1", owner: "0x1234567890" },
        { id: 2, name: "Item 2", description: "Description 2", owner: "0x1234567890" },
    ];
}

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide all tab contents and remove active class from buttons
        tabContents.forEach(content => content.classList.remove('active'));
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Show the selected tab content and add active class to the button
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId + '-section');
        tabContent.classList.add('active');
        button.classList.add('active');
    });
});

async function fetchOwnedItems() {
    const items = await getMyItems();
    const itemsTableBody = document.querySelector('#items-table-body');
    itemsTableBody.innerHTML = '';

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${new Date(item.purchaseDate).toLocaleDateString()}</td>
            <td>${item.purchasePrice} ETH</td>
            <td>${item.category}</td>
            <td>${item.model}</td>
            <td>${item.serialNumber}</td>
            <td>${item.location}</td>
            <td>${item.condition}</td>
        `;
        itemsTableBody.appendChild(row);
    });
}

fetchOwnedItems();

const checkOwnershipForm = document.querySelector('#check-ownership-form');
const ownershipResult = document.querySelector('#ownership-result');

checkOwnershipForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const checkInput = document.querySelector('#check-input').value;

    // Replace this with the actual contract call to check ownership
    const isOwner = await checkOwnership(checkInput);

    ownershipResult.innerHTML = isOwner
        ? `<p>You own the item with Serial Number or Item ID: ${checkInput}.</p>`
        : `<p>You do not own the item with Serial Number or Item ID: ${checkInput}.</p>`;
});

const transferOwnershipResult = document.querySelector('#transfer-ownership-result');
const transferDetails = document.querySelector('#transfer-details');

transferOwnershipForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const itemId = parseInt(document.querySelector('#transfer-item-id').value);
    const recipientAddress = document.querySelector('#recipient-address').value;

    // Replace this with the actual contract interaction to transfer ownership
    const transferResult = await transferOwnership(itemId, recipientAddress);

    if (transferResult.success) {
        transferDetails.innerHTML = `
            Item ID: ${itemId}<br>
            Recipient Address: ${recipientAddress}
        `;
    } else {
        transferDetails.innerHTML = `Failed to transfer ownership. Reason: ${transferResult.error}`;
    }
    transferOwnershipResult.classList.add('active');
});







