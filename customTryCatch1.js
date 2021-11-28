const FazzFood = ({harga = null, voucher = null , jarak = null, pajak = null}) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if (harga && jarak && pajak !== null){
                let potongan = 0;
                let biayaAntar = 0;
                if (harga >= 50000){
                  if(voucher === 'FazzFood5'){
                    potongan = harga * 0.5
                    if(potongan >= 50000){
                     potongan = 50000
                    }
                  }
                  else
                  potongan = 0;
                }
              
                if (harga >= 30000){
                  if(voucher === 'DITRAKTIRTAKA'){
                    potongan = harga * 0.6;
                    if(potongan >= 30000){
                    potongan = 30000
                    }
                  }
                }
              
                if (jarak <=2){
                  biayaAntar = jarak*2000
                }
              
                else biayaAntar = (2*2000) + ((jarak-2)*3000)
              
                if (pajak === true){
                  pajak = harga*0.05
                }
              
                else pajak = 0
              
              resolve(` harga: ${harga} \n potongan: ${potongan}\n Biaya Antar: ${biayaAntar} 
              \n Pajak: ${pajak}\n Subtotal: ${harga-potongan+biayaAntar+pajak}`)
                }

                else{
                    reject(`Harap lengkapi detail pesanan Anda`)
                }
        
        },2000)
    }).then((res)=> console.log(res))
    .catch((err)=> console.log(err))    
  }
  
 FazzFood({
    harga: 90000,
    voucher: 'DITRAKTIRTAKA',
    pajak: true,
    jarak: 9
  })
  