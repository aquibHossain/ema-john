const storeData=(id)=>{
    const storage=localStorage.getItem("cart")
    let cartObj={};
    if(storage){
       cartObj=JSON.parse(storage)
       if(cartObj[id]){
          cartObj[id]+=1
       }
       else{
           cartObj[id]=1
       }
    }
    else{
        cartObj[id]=1
    }
    localStorage.setItem("cart",JSON.stringify(cartObj))
}

const displayData=()=>{
    const storage=localStorage.getItem("cart")
    return storage?JSON.parse(storage):{};
}
export{storeData,displayData}