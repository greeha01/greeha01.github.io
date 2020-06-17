window.onload = function() {
    // used when switching between pages
    // dieties page
    const greaterDieties = ["Uesis", "Fandir", "Akrua", "Irollan", "Tudalle", "Pyrus", "Biara", "Ahriman", "Ornella"];
    const lesserDieties = [];
    const dieties = ["Greater_Dieties", "Lesser_Dieties"];

    //divine history page
    const divine_history = ["beginning", "betrayal", "war"];

    //peoples of khaldun page
    const cultureTypes = ["ceyah", "kohan", "fallen"];
    const ceyahHeroes = ["Astarte", "Belphegor", "Divsha", "Hasanko", "Lazarus", "Melchior", "Praxus", "Sahrbon", "Sebak", "Sijansur", "Vandal", "Vulgari"];
    
    //races of khaldun page
    const raceTypes = ["Aasimar", "Changeling", "Dragonborn", "Dwarf", "Elf", "Gnome", "Goblin", "Half_Elf", "Half_Orc", "Halfling", "Hobgoblin", "Human", "Lizardfolk", "Loxodon", "Orc", "Tabaxi", "Tiefling", "Tortle"];
    
    const urlString = window.location.href;
    const brokenUrl = urlString.split("#");
    let baseId = "#";

    if (brokenUrl[1] != undefined) {
        if (dieties.includes(brokenUrl[1])) {
            baseId = "#Greater_Dieties";
        }
        else if (greaterDieties.includes(brokenUrl[1])) {
            baseId = "#Uesis";

            document.querySelector("#Greater_Dieties-control").setAttribute("class", "nav-link active");
            document.querySelector("#Lesser_Dieties-control").setAttribute("class", "nav-link");

            document.querySelector("#Greater_Dieties").setAttribute("class", "tab-pane fade show active");
            document.querySelector("#Lesser_Dieties").setAttribute("class", "tab-pane fade");
        }
        else if (divine_history.includes(brokenUrl[1])) {
            baseId = "#beginning";
        }
        else if (cultureTypes.includes(brokenUrl[1])) {
            baseId = "#ceyah";
        }
        else if (ceyahHeroes.includes(brokenUrl[1])) {
            baseId = "#Astarte";

            document.querySelector("#ceyah-control").setAttribute("class", "nav-link active");
            document.querySelector("#kohan-control").setAttribute("class", "nav-link");
            document.querySelector("#fallen-control").setAttribute("class", "nav-link");

            document.querySelector("#ceyah").setAttribute("class", "tab-pane fade show active");
            document.querySelector("#kohan").setAttribute("class", "tab-pane fade");
            document.querySelector("#fallen").setAttribute("class", "tab-pane fade");
        }
        else if (raceTypes.includes(brokenUrl[1])) {
            baseId = "#Aasimar";
        }
        else {
            baseId = "#";
        }

        let baseController = baseId + "-control";
        let id = "#" + brokenUrl[1]
        let idController = id + "-control";
        console.log(baseController, baseId, idController, id);

        this.document.querySelector(baseController).setAttribute("class", "nav-link");
        this.document.querySelector(idController).setAttribute("class", "nav-link active");

        this.document.querySelector(baseId).setAttribute("class", "tab-pane fade");
        this.document.querySelector(id).setAttribute("class", "tab-pane fade show active");
    }
};

function switchNav(id, higherId) {
    // used when switching active panes in the page itself
    let actives = document.querySelectorAll(".active");

    console.log(actives);


    if (higherId != null) {
        let higherIdController = higherId + "-control";

        console.log(higherId);
        console.log(higherIdController);

        actives[0].setAttribute("class", "nav-link");
        actives[1].setAttribute("class", "tab-pane fade");
    
        document.querySelector(higherIdController).setAttribute("class", "nav-link active");
        document.querySelector(higherId).setAttribute("class", "tab-pane fade show active");
    }

    if (id != null) {
        let idController = id + "-control";

        console.log(id);
        console.log(idController);

        actives[2].setAttribute("class", "nav-link");
        actives[3].setAttribute("class", "tab-pane fade");
    
        document.querySelector(idController).setAttribute("class", "nav-link active");
        document.querySelector(id).setAttribute("class", "tab-pane fade show active");
    }
}

function switchNav2(id, higherId) {
    // used when switching active panes in the page itself for Kohan and Fallen
    let actives = document.querySelectorAll(".active");

    console.log(actives);


    if (higherId != null) {
        let higherIdController = higherId + "-control";

        console.log(higherId);
        console.log(higherIdController);

        actives[0].setAttribute("class", "nav-link");
        actives[3].setAttribute("class", "tab-pane fade");
    
        document.querySelector(higherIdController).setAttribute("class", "nav-link active");
        document.querySelector(higherId).setAttribute("class", "tab-pane fade show active");
    }

    if (id != null) {
        let idController = id + "-control";

        console.log(id);
        console.log(idController);

        actives[1].setAttribute("class", "nav-link");
        actives[2].setAttribute("class", "tab-pane fade");
    
        document.querySelector(idController).setAttribute("class", "nav-link active");
        document.querySelector(id).setAttribute("class", "tab-pane fade show active");
    }
}