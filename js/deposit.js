// step 1: add eventlistener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

    // step 2: get diposit amount of diposit fild 
    
    const depositFild = document.getElementById('deposit-fild');
    // for getting value of deposit fild use .value 
    const newDipositAmmountString = depositFild.value;
    const newDipositAmmount = parseFloat(newDipositAmmountString);
    

    //step 3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDeposittotalString = depositTotalElement.innerText;
    const previousDeposittotal = parseFloat(previousDeposittotalString)

    //step 4: add number to total deposit box
    const currentDepositTotal = previousDeposittotal + newDipositAmmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: add diposit box amount to the blance box

    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalElementString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat (previousBlanceTotalElementString); 
   
    
    // step 6: calculate current total blance
    const currentBlanceTotal = previousBlanceTotal + newDipositAmmount;

    //set the blance total
    blanceTotalElement.innerText = currentBlanceTotal;


    // step 7: clear deposit input fild value 

    depositFild.value = '';

})








    


    
