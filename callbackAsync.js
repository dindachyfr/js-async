const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let month =['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if(!error){
         callback(null, month)
    }
    else{ callback(new Error('Data not found', []))}
    },4000)
}

const cbFunc = (errorIndicator, monthArray) =>{
    if (errorIndicator === null){
        monthArray.map((months)=> console.log(months))
    } 
    else{
        console.log(errorIndicator)
    }
}

getMonth(cbFunc)