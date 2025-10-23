const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let totalTax = 0;
    const income = parseInt(document.getElementById('income').value);
    if(income <= 1200000){
        totalTax = 0;
    }else if(income <= 1600000){
        totalTax = (income - 1200000) * 0.15;
    }else if(income <= 2000000){
        totalTax = (income - 1600000) * 0.20 + 60000;
    }else{
        totalTax = (income - 2000000) * 0.25 + 140000;
    }
    result.innerText = `Total Tax: ₹${totalTax}`;
    document.getElementById('income').value = '';
});