// calculate button clickable--->

document.getElementById('calculate').addEventListener('click', function(){
    // id gulo call kora holo--->

    const inputIncome = getInputValueById('income');
    const inputSoftware = getInputValueById('software');
    const inputCourses = getInputValueById('courses');
    const inputInternet = getInputValueById('internet');
    const totalExpenseEl = getInputValueById('total-expenses');
    const balanceEl = getInputValueById('balance');

// class remove--->
    const resultShow = getTextValueById('results');
    resultShow.classList.remove('hidden');
    
    // income and expense hisab--->
    const totalExpense = inputSoftware + inputCourses + inputInternet;
    const balance = inputIncome - totalExpense;

    // results summery add-->
    document.getElementById('total-expenses').innerText = totalExpense.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);

// history added
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML = `
<p>${new Date().toLocaleDateString()}</p>
<p class=" font-bold text-black">Income:${inputIncome.toFixed(2)}</p>
<p>Expenses:${totalExpense.toFixed(2)}</p>
<p>Balance:${balance.toFixed(2)} `;
// document.getElementById('history-list').appendChild(historyItem);
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
    
})
// calculate savings button clickable--->

document.getElementById('calculate-savings').addEventListener('click', function(){
    // id gulo call kora holo-->
    const inputSavings = getInputValueById('savings');
    // const savingAmount = getTextValueById('savings-amount');
    // const remainingAmount = getTextValueById('remaining-balance');
    const inputIncome = getInputValueById('income');
    const inputSoftware = getInputValueById('software');
    const inputCourses = getInputValueById('courses');
    const inputInternet = getInputValueById('internet');
    const totalExpenseEl = getInputValueById('total-expenses');
    const balanceEl = getInputValueById('balance');

    // income and expense hisab--->
    const totalExpense = inputSoftware + inputCourses + inputInternet;
    const balance = inputIncome - totalExpense;

    // saving amount percentage--->
    const savingPercentage = (balance * inputSavings) / 100;

    // remaining balance--->
    const remainingBalance = balance - savingPercentage;

    // result summery add--->
    document.getElementById('savings-amount').innerText = savingPercentage.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
})

// history tab clickable-->
document.getElementById('history-tab').addEventListener('click', function(){
    const historyTab = document.getElementById('history-tab');
    const assistantTab = document.getElementById('assistant-tab');

    // classlist add--->
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add('text-gray-600');

    // class remove--->
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('expense-form').classList.add('hidden');
})

// assistant tab clickable--->
    document.getElementById('assistant-tab').addEventListener('click', function(){
    const historyTab = document.getElementById('history-tab');
    const assistantTab = document.getElementById('assistant-tab');

    // classlist add--->
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // class remove--->
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('expense-form').classList.remove('hidden');
    
})

