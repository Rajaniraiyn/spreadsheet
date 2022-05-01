const $ = (ID) => document.getElementById(ID);

function Age(dateOfBirth) {
    var dob = new Date(dateOfBirth);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var a = Math.abs(year - 1970);
    return a;
<<<<<<< HEAD
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
                  total: parseFloat(parseFloat($("mark1"+index).value) + parseFloat($("mark2"+index).value))
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
=======
>>>>>>> 119ed49547693e978b880d877ed5b2c5c0c738d8
}

function Click(index) {

    $(`name${index + 1}`).focus();

    let dataarray = JSON.parse(localStorage.getItem("entry"));

    if (dataarray == null) {
        let data = [];
        data.push({
            name: $("name" + index).value,
            regNo: $("regNo" + index).value,
            dob: $("dob" + index).value,
            age: Age($("dob" + index).value),
            mark1: $("mark1" + index).value,
            mark2: $("mark2" + index).value,
            total: $("mark1" + index).value + $("mark2" + index).value
        });

        let dataarr = data.filter(element => {
            return element !== null;
        });
        localStorage.setItem("entry", JSON.stringify(dataarr));
        $("name" + index).value = $("regNo" + index).value = $("dob" + index).value = $("age" + index).value = $("mark1" + index).value = $("mark2" + index).value = $("total" + index).value = "";

    }
    else {


        if ($("name" + index).value && $("regNo" + index).value && $("dob" + index).value && $("mark1" + index).value && $("mark2" + index).value) {


            dataarray[index] = {
                name: $("name" + index).value,
                regNo: $("regNo" + index).value,
                dob: $("dob" + index).value,
                age: Age($("dob" + index).value),
                mark1: $("mark1" + index).value,
                mark2: $("mark2" + index).value,
                total: +$("mark1" + index).value + +$("mark2" + index).value
            };
            let dataarr = dataarray.filter(element => {
                return element !== null;
            });
            localStorage.setItem("entry", JSON.stringify(dataarr));
            $("name" + index).value = $("regNo" + index).value = $("dob" + index).value = $("age" + index).innerHTML = $("mark1" + index).value = $("mark2" + index).value = $("total" + index).innerHTML = "";


        }
        else {
            alert("Fill all the fields!");
            $(`name${index}`).focus();
        }
    }

    Display();
}
function Delete(index) {
    $("name" + index).value = $("regNo" + index).value = $("dob" + index).value = $("age" + index).innerHTML = $("mark1" + index).value = $("mark2" + index).value = $("total" + index).innerHTML = "";
    let dataarray = JSON.parse(localStorage.getItem("entry"));
    dataarray.splice(index, 1);
    localStorage.setItem("entry", JSON.stringify(dataarray));

}

function Display() {

    let dataarray = JSON.parse(localStorage.getItem("entry"));
    let dataarr = dataarray.filter(element => {
        return element !== null;
    });
    dataarr.forEach((element, i) => {
        $("name" + i).value = element.name;
        $("regNo" + i).value = element.regNo;
        $("dob" + i).value = element.dob;
        $("age" + i).innerHTML = element.age;
        $("mark1" + i).value = element.mark1;
        $("mark2" + i).value = element.mark2;
        $("total" + i).innerHTML = element.total;
    });
}

function onEnter({ key, target }, control) {
    if (key === "Enter") {
        if (control.includes("del")) target.click();
        else $(control).focus();
    }
}
