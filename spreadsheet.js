const $ = (ID) => document.getElementById(ID);
function Age(dateOfBirth){
    var dob = new Date(dateOfBirth);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var a = Math.abs(year - 1970);
    return a;
    }

function Click(index){
  
  let dataarray = JSON.parse(localStorage.getItem("entry"));
  
  if(dataarray == null){
      let data = [];
      data.push({name : $("name"+index).value,
                  regNo : $("regNo"+index).value,
                  dob: $("dob"+index).value,
                  age: Age($("dob"+index).value),
                  mark1: $("mark1"+index).value,
                  mark2: $("mark2"+index).value,
                  total: $("mark1"+index).value + $("mark2"+index).value
      });
    
    let dataarr = data.filter(element => {
        return element !== null;
    }); 
       localStorage.setItem("entry",JSON.stringify(dataarr));
       $("name"+ index).value = $("regNo"+ index).value = $("dob"+index).value = $("age"+index).value =  $("mark1"+index).value = $("mark2"+index).value = $("total"+index).value = "";

}
else{
    
    
    if($("name"+ index).value && $("regNo"+ index).value && $("dob"+index).value && $("mark1"+index).value &&  $("mark2"+index).value){
      
       
       dataarray[index] = { name: $("name"+ index).value,
       regNo: $("regNo"+ index).value,
       dob : $("dob"+index).value,
       age: Age($("dob"+index).value),
       mark1: $("mark1"+index).value,
       mark2: $("mark2"+index).value,
       total: $("mark1"+index).value + $("mark2"+index).value
       };
    let dataarr = dataarray.filter(element => {
        return element !== null;
    });    
    localStorage.setItem("entry",JSON.stringify(dataarr));
   $("name"+ index).value = $("regNo"+ index).value = $("dob"+index).value = $("age"+index).innerHTML =  $("mark1"+index).value = $("mark2"+index).value = $("total"+index).innerHTML = "";
               
    
    }
    else{
    alert("Fill all the fields!");
    }
}

Display();
} 
function Delete(index){
    $("name"+ index).value = $("regNo"+ index).value = $("dob"+index).value = $("age"+index).innerHTML =  $("mark1"+index).value = $("mark2"+index).value = $("total"+index).innerHTML = "";
    let dataarray = JSON.parse(localStorage.getItem("entry"));
    dataarray.splice(index, 1);
    localStorage.setItem("entry", JSON.stringify(dataarray));
   
}

function Display(){
    
    let dataarray = JSON.parse(localStorage.getItem("entry"));
    let dataarr = dataarray.filter(element => {
        return element !== null;
    });      
    dataarr.forEach((element,i) => {
        $("name"+i).value = dataarr[i].name;
        $("regNo"+i).value = dataarr[i].regNo;
        $("dob"+i).value = dataarr[i].dob;
        $("age"+i).innerHTML = dataarr[i].age;
        $("mark1"+i).value = dataarr[i].mark1;
        $("mark2"+i).value = dataarr[i].mark2;
        $("total"+i).innerHTML = dataarr[i].total;
    });
}
