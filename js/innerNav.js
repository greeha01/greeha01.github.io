window.onload = function() {
    const greaterDieties = ["Uesis", "Fandir", "Akrua", "Irollan", "Tudalle", "Pyrus", "Biara", "Ahriman", "Ornella"];
    const lesserDieties = [];
    const ceyahHeroes = ["Astarte", "Belphegor", "Divsha", "Hasanko", "Lazarus", "Melchior", "Praxus", "Sahrbon", "Sebak", "Sijansur", "Vandal", "Vulgari"];
    const urlString = window.location.href;
    const brokenUrl = urlString.split("#");
    let baseId = "#";

    if (brokenUrl[1] != undefined) {
        if (greaterDieties.includes(brokenUrl[1])) {
            baseId = "#Uesis";
        }
        else if (lesserDieties.includes(brokenUrl[1])) {
            // TODO
            baseId = "#";
        }
        else if (ceyahHeroes.includes(brokenUrl[1])) {
            baseId = "#Astarte";
        }
        else {
            baseId = "#test1";
        }

        let baseController = baseId + "-control";
        let id = "#" + brokenUrl[1]
        let idController = id + "-control";

        this.document.querySelector(baseController).setAttribute("class", "nav-link");
        this.document.querySelector(idController).setAttribute("class", "nav-link active");

        this.document.querySelector(baseId).setAttribute("class", "tab-pane fade");
        this.document.querySelector(id).setAttribute("class", "tab-pane fade show active");
    }
};