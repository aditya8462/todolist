var arr=[{id:1,name:"Harshita"},
{id:2,name:"khushi"},
{id:3,name:"sahil"}]

var narr=arr.map((item,index)=>{
  if(item.id!=3){
    return item
  }
})
console.log("NARR==>",narr)
narr.forEach((item)=>{
  if(typeof item != "undefined"){
    console.log(item)
  }
})