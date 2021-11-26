const IDChecking = (putYourName) =>{
    return new Promise((success, failed) =>{
        setTimeout(()=>{
            const IDs = [{name: 'Nana', ID: 3, address: 'Jakarta'},
            {name: 'Nani', ID: 4, address: 'Bekasi'},
            {name: 'Nina', ID: 1, address: 'Depok'},
            {name: 'Nona', ID: 2, address: 'Tangerang'},
            {name: 'Nano', ID: 1, address: 'Bogor'},
            {name: 'Nini', ID: 3, address: 'Kepulauan Seribu'}]

            let checkingID = IDs.map((index) => {
                if (index.name === putYourName){
                    success(`Welcome, ${putYourName} from ${index.address}!`)
                }

                else{
                    failed(`Sorry ${putYourName} you might not have any access`)
                }
            })
        }, 2000)
    })//.then((res)=> console.log(res))
 //  .catch((err) => console.log(err))
}

//IDChecking('Nanno')

const IDCheckingAssync = async (putYourName)=>{
    try{
        const runIDChecking = await IDChecking(putYourName);
        console.log(runIDChecking)
    }
    catch(error){
        console.log(error)
    }
}

IDCheckingAssync('Nanna')