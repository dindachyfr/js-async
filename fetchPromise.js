import fetch from 'node-fetch';
        let status = true
        let fetcherFunction = (URLink) =>{
            return new Promise((success, fail) =>{
                fetch(URLink).then(result => result.json())
                .then(data =>{
                    if(Object.keys(data).length === 0){
                        fail('No data found')
                    }
                    success(data)
                }).catch ((error)=> {
                    console.log ('Failed loading data')
                })
            })
        }

        fetcherFunction('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.map((element)=>{
            console.log(`${element.name}`)
        }))
        .catch((err)=> console.log(err))