let myLeads = [] // convert and array to string JSON.stringify(arr_name)
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
const tabBtn = document.getElementById('tab-btn')

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// adding all the array list in a variable
function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        //listItem += "<li> <a href='"+myLeads[i]+"' target='_blank'>" + myLeads[i] + "</li>" -- direct method 
        // template string literals
        listItem += `                                                                                
                    <li> 
                        <a href='${leads[i]}' target='_blank'>${leads[i]}
                        </a>
                    </li>
                    `

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" ---- direct method
        // alternate method
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItem
}


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // save myLeads into the storage, --> string to array JSON.parse(string_name)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // call the renderLead function
    render(myLeads);

    // to verify the storage works
    //console.log(localStorage.getItem("myLeads"))
})

