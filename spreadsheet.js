const $ = (ID) => document.getElementById(ID);

function Age(dateOfBirth) {
    var dob = new Date(dateOfBirth);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var a = Math.abs(year - 1970);
    return a;
}

function Click(index) {

    $(`name${index + 1}`).focus();

    let dataarray = JSON.parse(localStorage.getItem("entry"));

    if (dataarray == null) {
        let data = [];
        data[index] = {
            name: $("name" + index).value,
            regNo: $("regNo" + index).value,
            dob: $("dob" + index).value,
            age: Age($("dob" + index).value),
            mark1: $("mark1" + index).value,
            mark2: $("mark2" + index).value,
            total: +$("mark1" + index).value + +$("mark2" + index).value,
            i: index
        };

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
                total: +$("mark1" + index).value + +$("mark2" + index).value,
                i: index
            };
            let dataarr = dataarray.filter(element => {
                return element !== null;
            });
            localStorage.setItem("entry", JSON.stringify(dataarr));
            $("name" + index).value = $("regNo" + index).value = $("dob" + index).value = $("age" + index).value = $("mark1" + index).value = $("mark2" + index).value = $("total" + index).value = " ";


        }
        else {
            alert("Fill all the fields!");
            $(`name${index}`).focus();
        }
    }

    Display();
}
function Delete(index) {
    $("name" + index).value = $("regNo" + index).value = $("dob" + index).value = $("age" + index).value = $("mark1" + index).value = $("mark2" + index).value = $("total" + index).value = null;
    let dataarray = JSON.parse(localStorage.getItem("entry"));
    dataarray = dataarray.map(
        element => (element == null || element.i == index) ? null : element
    )
    localStorage.setItem("entry", JSON.stringify(dataarray));
}

function Display() {

    let dataarray = JSON.parse(localStorage.getItem("entry"))
    if (dataarray != null) {

        dataarray
            .filter(
                (element) => element != null
            )
            .forEach(
                (element, i) => {
                    $("name" + element.i).value = element.name;
                    $("regNo" + element.i).value = element.regNo;
                    $("dob" + element.i).value = element.dob;
                    $("age" + element.i).value = element.age;
                    $("mark1" + element.i).value = element.mark1;
                    $("mark2" + element.i).value = element.mark2;
                    $("total" + element.i).value = element.total;
                }
            );
    }
}

function onEnter({ key, target }, control) {
    if (key === "Enter") {
        if (control.includes("del")) target.click();
        else $(control).focus();
    }
}