//step 1: add event listener to withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdraw button clicked');

    //step 2: get withdraw amount of withdraw fild 
    const withdrawFild = document.getElementById('withdraw-fild');

    // for getting value of withdraw fild use .value 
    const newWithdrawAmmountString = withdrawFild.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    console.log(newWithdrawAmmount);

      // step 7: clear withdraw input fild
       withdrawFild.value = " ";

       // end of step 7

    if(isNaN(newWithdrawAmmount)){
        alert('Enter Valid Number');
        return;
    }
    

     //step 3: get the current withdraw total
    //for non-input(element other than input, textarea) use innerText to get the text

    const currentWithdrawElement = document.getElementById('withdraw-total');
    const currentWithdrawElementString  = currentWithdrawElement.innerText;
    const previousWihdrawElement = parseFloat(currentWithdrawElementString);

    
    // step 5: sub withdraw box amount to the blance box
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalElementString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalElementString);

  

    if(newWithdrawAmmount>previousBlanceTotal){
        alert('insufficient balance');
        return;
    }

    // step 4: add total withdraw box
    
    const currentWithdrawTotal = previousWihdrawElement + newWithdrawAmmount;
    //set the withdraw total
    currentWithdrawElement .innerText = currentWithdrawTotal;

    // step 6: calculate current total blance
    
    const currentBlanceTotal = previousBlanceTotal - newWithdrawAmmount;

    //set the blance total
    blanceTotalElement.innerText = currentBlanceTotal;

})