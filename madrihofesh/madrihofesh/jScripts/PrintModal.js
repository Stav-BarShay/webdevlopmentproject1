function printElement(elem, append, delimiter) {
    var domClone = elem.cloneNode(true);

    var $printSection = document.getElementById("leafPainting");

    if (!$printSection) {
        $printSection = document.createElement("div");
        $printSection.id = "leafPainting";
        document.body.appendChild($printSection);
    }

    if (append !== true) {
        $printSection.innerHTML = "";
    }

    else if (append === true) {
        if (typeof (delimiter) === "string") {
            $printSection.innerHTML += delimiter;
        }
        else if (typeof (delimiter) === "object") {
            $printSection.appendChlid(delimiter);
        }
    }

    $printSection.appendChild(domClone);
}​