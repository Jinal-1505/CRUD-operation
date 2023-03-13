
var row = null;
function Submit() {
    //alert();
    var DataEntered = retreiveData();
    //console.log(DataEntered);
    var readData = readDataFromLocalStorage(DataEntered);
    if (DataEntered == false) {
        msg.innerHTML = "please Enter Data!";
    }
    else {
        if (row == null) {
            insert(readData);
            msg.innerHTML = "Data Ineserted";
        }
        else {
            update();
            msg.innerHTML = "Data Updated";
        }
    }
    //console.log(readData);
    document.getElementById("form").reset();

}

//create
//retreiving data from form
function retreiveData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var arr = [name, age, state, city];
    if (arr.includes("")) {
        return false;
    }
    else {
        return arr;
    }

}

//read
//Data in LocalStorage
function readDataFromLocalStorage(DataEntered) {
    //storing data in localstorage
    var n = localStorage.setItem("Name", DataEntered[0]);
    var a = localStorage.setItem("Age", DataEntered[1]);
    var s = localStorage.setItem("State", DataEntered[2]);
    var c = localStorage.setItem("City", DataEntered[3]);


    //getting values from local storage to table
    var n1 = localStorage.getItem("Name", n);
    var a1 = localStorage.getItem("Age", a);
    var s1 = localStorage.getItem("State", s);
    var c1 = localStorage.getItem("City", c);

    var arr = [n1, a1, s1, c1];
    return arr;
}
//INSERT data in TABLE
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    var id = Math.random() * 100;
    row.insertCell(4).innerHTML = Math.ceil(id);
    row.insertCell(5).innerHTML = `<button onclick="edit(this)">EDIT</buton><button onclick="remove(this)">DELETE</buton>`;
}

//EDIT 
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("age").value = row.cells[1].innerHTML;
    document.getElementById("state").value = row.cells[2].innerHTML;
    document.getElementById("city").value = row.cells[3].innerHTML;
}

//UPDATE
function update(td) {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("age").value;
    row.cells[2].innerHTML = document.getElementById("state").value;
    row.cells[3].innerHTML = document.getElementById("city").value;
    row = null;
}


//DELETE
function remove(td) {
    var ans = confirm("Are you sure you want to delete this record");
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}

function sortName() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortAge() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortState() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortCity() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

document.getElementById("searchBar").addEventListener("keyup", function () {
    searchTable();
});


function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


//clear Local storage
const clearStorageBtn = document.getElementById('clearStorageBtn');
clearStorageBtn.addEventListener('click', function () {
    // Clear local storage
    localStorage.clear();
    alert('Local storage has been cleared!');
});

