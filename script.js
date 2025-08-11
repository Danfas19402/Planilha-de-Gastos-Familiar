let total = 0;

function addExpense() {
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || !category || isNaN(amount) || amount <= 0) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    const tableBody = document.getElementById('expenseTable').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>R$ ${amount.toFixed(2)}</td>
        <td><button class="btn" onclick="removeExpense(this, ${amount})">Remover</button></td>
    `;

    tableBody.appendChild(row);

    total += amount;
    document.getElementById('total').textContent = total.toFixed(2);

    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
}

function removeExpense(button, amount) {
    const row = button.parentElement.parentElement;
    row.remove();
    total -= amount;
    document.getElementById('total').textContent = total.toFixed(2);
}
