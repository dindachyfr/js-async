const cekHariKerja = (day) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }
            else{
                reject(new Error('Bukan hari kerja'))
        }
        },3000)
    }).then((res) => console.log(res))
    .catch((err)=> console.log(err))
}

(cekHariKerja('Sabtu'))


const cekHariKerjaAsync = async (day)=>{
    try{
        const cekHariKerjaFunction = await cekHariKerja(day);
        console.log(cekHariKerjaFunction)
    }
    catch(error){
        console.log(error)
    }
}

// cekHariKerjaAsync('Rabu')