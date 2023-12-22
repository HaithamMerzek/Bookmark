var siteNameInput = document.getElementById("siteNameInput")
var siteUrlInput = document.getElementById("siteUrlInput")



var sites;

if (localStorage.getItem("sites") != null) {
    sites = JSON.parse(localStorage.getItem("sites"))
    displaySites();
} else {
    sites = []
}

function addSite() {
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
    }

    sites.push(site)
    displaySites();
    clearForm()

    localStorage.setItem("sites", JSON.stringify(sites))
}

function displaySites() {
    var trs = ""

    for (var i = 1; i < sites.length; i++) {
        trs += `<tr>
        <td>${i}</td>
        <td>${sites[i].name}</td>
        <td>${sites[i].url}</td>
        <td>
          <button class="btn btn-warning">Visit</button>
        </td>
        <td>
          <button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button>
        </td>
      </tr>`
    }
    document.getElementById("tBody").innerHTML = trs
}

function clearForm() {
    siteNameInput.value = ""
    siteUrlInput.value = ""
}

function deleteSite(index) {
    sites.splice(index, 1)
    localStorage.setItem("sites", JSON.stringify(sites))
    displaySites()
}