window.onload = function() {
    // used when switching between pages
    // dieties page
    const greaterDieties = ["Uesis", "Fandir", "Akrua", "Irollan", "Tudalle", "Pyrus", "Biara", "Ahriman", "Ornella"];
    const lesserDieties = [];
    const dieties = ["Greater_Dieties", "Lesser_Dieties"];

    //divine history page
    const divine_history = ["beginning", "betrayal", "war"];

    //peoples of khaldun page
    const cultureTypes = ["ventusi", "fiden", "fallen"];
    const ceyahHeroes = ["Ermitana", "Flaminus", "Ariel", "Divinus", "Maximillan", "Magnus", "Cobalus", "Excelsis", "Venemor", "Lacertae", "Protegitom", "Legator"];
    
    //races of khaldun page
    const raceTypes = ["Aasimar", "Changeling", "Dragonborn", "Dwarf", "Elf", "Gnome", "Goblin", "Half_Elf", "Half_Orc", "Halfling", "Hobgoblin", "Human", "Lizardfolk", "Loxodon", "Orc", "Tabaxi", "Tiefling", "Tortle"];

    //Divinus' Archipelago page
    const kritiCat = ["Kriti_desc", "Kissamo", "Samar", "Rethimno", "Chania", "Lentas", "Bal", "Choru", "Spathi", "Palocho"];
    const divinusCat = ["Kriti", "Kyklisi", "Roovnisi", "Thanisi"];
    
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
            baseId = "#ventusi";
        }
        else if (ceyahHeroes.includes(brokenUrl[1])) {
            baseId = "#Ermitana";

            document.querySelector("#ventusi-control").setAttribute("class", "nav-link active");
            document.querySelector("#fiden-control").setAttribute("class", "nav-link");
            document.querySelector("#fallen-control").setAttribute("class", "nav-link");

            document.querySelector("#ventusi").setAttribute("class", "tab-pane fade show active");
            document.querySelector("#fiden").setAttribute("class", "tab-pane fade");
            document.querySelector("#fallen").setAttribute("class", "tab-pane fade");
        }
        else if (raceTypes.includes(brokenUrl[1])) {
            baseId = "#Aasimar";
        }
        else if (kritiCat.includes(brokenUrl[1])) {
            baseId = "#Kriti_desc";

            document.querySelector("#Kriti-control").setAttribute("class", "nav-link active");
            document.querySelector("#Kyklisi-control").setAttribute("class", "nav-link");
            document.querySelector("#Roovnisi-control").setAttribute("class", "nav-link");
            document.querySelector("#Thanisi-control").setAttribute("class", "nav-link");

            document.querySelector("#Kriti").setAttribute("class", "tab-pane fade show active");
            document.querySelector("#Kyklisi").setAttribute("class", "tab-pane fade");
            document.querySelector("#Roovnisi").setAttribute("class", "tab-pane fade");
            document.querySelector("#Thanisi").setAttribute("class", "tab-pane fade");
        }
        else if (divinusCat.includes(brokenUrl[1])) {
            baseId = "#Kriti";
        }
        else {
            console.log("Could not find tag with id = " + brokenUrl[1]);
            return null;
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