let unitEconomicsForm = document.getElementById('unit-economics-unit'),
    sellingpriceInput = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),            
    grossMarginInput = document.getElementById('gross-margin'),
    salesMarketingInput = document.getElementById('sales-marketing'),
    opertionCostInput = document.getElementById('opertion-cost'),
    netMarginInput = document.getElementById('net-margin'),
    sellingPriceValue, cogsValue, grossMarginValue, salesMarketingValue,
    opertionCostValue, netMarginValue;


function calculate(event){
    event.preventDefault();
    //find the cross margin
    sellingPriceValue = sellingpriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    //find net margin
    salesMarketingValue = salesMarketingInput.value;
    opertionCostValue = opertionCostInput.value;
    netMarginValue = grossMarginValue -  salesMarketingValue - opertionCostValue;
    netMarginInput.value = netMarginValue;
}
unitEconomicsForm.addEventListener('submit',calculate);
 
























