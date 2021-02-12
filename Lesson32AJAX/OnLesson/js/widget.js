
// let listPlaceholder = document.querySelector('#employeeList');
// const url = ".data/employees.json";

// fetch(url)
// .then( function(response) {
//         return response.json()
//     })

//         .then(function(list) {
//             console.log(list)

//             let emploees = '<ul class='bulleted'>';  

//             for (let index = 0; index < list.length; index++) {
//                 employees += <li class="${ list[index].inoffice ? 'in' : 'out'}"> ${list[index].name} </li>     
//                 console.log(list[index].name)
//             }
//             emploees += '</ul>';

//             listPlaceholder.innerHTML=emploee;

    //    })
    



let listPlaceholder = document.querySelector('#employeeList');
const url = ".data/employees.json";

fetch(url)
.then( function(response) {
        return response.json()
    })

        .then(function(list) {
            let emploees = document.createElement('ul');
            emploees.className = 'in'
        } else {
            item.className = 'out'
        }

        item.innerHTML = list[index].name

        listPlaceholder.append(emploees)

    }

    }) .catch(
        function(error){
            listPlaceholder.append('Список работников не загрузтлся по ричине: ${error}')
        }
    )