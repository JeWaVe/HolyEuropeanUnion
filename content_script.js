function walk(rootNode) {
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
        node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
    textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v) {
    v = v.replace(/\bL'Union européenne\b/giu, "La Sainte Eglise Catholique");
    v = v.replace(/\bUnion européenne\b/giu, "Sainte Eglise Catholique");
    v = v.replace(/\bCommission européenne\b/giu, "Curie romaine");
    v = v.replace(/\bLa Cour de justice de l'Union européenne\b/giu, "Le Tribunal suprême de la Signature apostolique");
    v = v.replace(/\bl'Europe\b/giu, "L'Eglise");
    v = v.replace(/\ble parlement européen\b/giu, "La Conférence Episcopale");
    v = v.replace(/\bparlement européen\b/giu, "Conférence Episcopale");
    v = v.replace(/\bdroit européen\b/giu, "droit canonique");
    v = v.replace(/\btraités européens\b/giu, "droit canonique");
    v = v.replace(/\btraités communautaires\b/giu, "droit canonique");
    v = v.replace(/\beuropéen\b/giu, "très chrétien");
    v = v.replace(/\beuropéens\b/giu, "très chrétiens");
    v = v.replace(/\beuropéennes\b/giu, "très chrétiennes");
    v = v.replace(/\beuropéenne\b/giu, "très chrétienne");
    v = v.replace(/\bd'europe\b/giu, "de la chrétienté");
    v = v.replace(/\bl'europe\b/giu, "la chrétienté");
    v = v.replace(/\béconomique\b/giu, "Théologique");
    v = v.replace(/\beurogroupe\b/giu, "Saint Empire Romain Germanique");

    // personnes
    v = v.replace(/\bMario Draghi\b/giu, "Sa Sainteté le pape Mario");
    v = v.replace(/\bChristine Lagarde\b/giu, "Sa Sainteté le pape Christine");
    v = v.replace(/\bJean-Claude Juncker\b/giu, "Son Excellence Révérendissime Jean-Claude Juncker"); //José Manuel Durão Barroso
    v = v.replace(/\bJosé Manuel Durão Barroso\b/giu, "Son Excellence Révérendissime José Manuel Durão Barroso"); //Ursula von der Leyen
    v = v.replace(/\bUrsula von der Leyen\b/giu, "Son Excellence Révérendissime Ursula von der Leyen"); //Ursula von der Leyen
    v = v.replace(/\bNicolas Sarkozy\b/giu, "Son Altesse Nicolas Sarkozy, Président très chrétien");
    v = v.replace(/\bFrançois Hollande\b/giu, "Son Altesse François Hollande, Président très chrétien");
    v = v.replace(/\bEmmanuel Macron\b/giu, "Son Altesse Emmanuel 1er, Président très chrétien");
    v = v.replace(/\bMacron\b/giu, "Son Altesse Emmanuel 1er, Président très chrétien");
    v = v.replace(/\bAngela Merkel\b/giu, "Sa Majesté Impériale Angela 1ere");
    v = v.replace(/\bMerkel\b/giu, "Sa Majesté Impériale Angela 1ere");
    v = v.replace(/\bRobert Schuman\b/giu, "Son Excellence Révérendissime Robert Schuman");
    v = v.replace(/\bKonrad Adenauer\b/giu, "Son Excellence Révérendissime Konrad Adenauer");
    v = v.replace(/\bJean Monnet\b/giu, "Son Excellence Révérendissime Jean Monnet");
    v = v.replace(/\bAlcide de Gasperi\b/giu, "Son Excellence Révérendissime Alcide de Gasperi");
    v = v.replace(/\bPaul-Henri Spaak\b/giu, "Son Excellence Révérendissime Paul-Henri Spaak");
    v = v.replace(/\bJoseph Bech\b/giu, "Son Excellence Révérendissime Joseph Bech");
    v = v.replace(/\bJohan Willem Beyen\b/giu, "Son Excellence Révérendissime Johan Willem Beyen");
    v = v.replace(/\bJean Tirole\b/giu, "Le Très Révérend Père Jean Tirole");
    v = v.replace(/\bJacques Attali\b/giu, "Le Très Révérend Père Jacques Attali");
    v = v.replace(/\bFrédéric Lordon\b/giu, "Frédéric Lordon (hérétique au bûcher)");
    v = v.replace(/\beurosceptique\b/giu, "hérétique");
    v = v.replace(/\bEuroscepticisme\b/giu, "la très grave hérésie de l'euroscepticisme");
    v = v.replace(/\bEurocritique\b/giu, "la grave hérésie de l'eurocritique");
    v = v.replace(/\bEurocritiques\b/giu, "les hérétiques de l'eurocritique");

    // lieux
    v = v.replace(/\bBruxelles\b/giu, "Saint-Siège");
    v = v.replace(/\bFrancfort\b/giu, "Saint-Siège");
    v = v.replace(/\bStrasbourg\b/giu, "Saint-Siège");

    // traités
    v = v.replace(/\bTraité de Rome\b/giu, "Concile de Chalcédoine");
    v = v.replace(/\bTraité de Maastricht\b/giu, "Concile de Trente");
    v = v.replace(/\bde Maastricht\b/giu, "du concile de Trente");
    v = v.replace(/\bTraité de Lisbonne\b/giu, "Concile de Vatican I");
    v = v.replace(/\bTraité d'Amsterdam\b/giu, "Concile de Nicée");
    v = v.replace(/\bTraité de Nice\b/giu, "Concile de Latran");

    // théorie
    v = v.replace("économiste", "théologien");
    v = v.replace("économiste atterré", 'théologien mécréant atterré');
    v = v.replace("Économiste", "Théologien");
    v = v.replace("Économiste atterré", 'Théologien mécréant atterré');
    v = v.replace("économistes", "théologiens");
    v = v.replace("économistes atterrés", 'théologiens mécréants atterrés');
    v = v.replace("économique", "théologique");
    v = v.replace("économiques", "théologiques");
    v = v.replace("l'économie", "la théologie");
    v = v.replace("économie", "théologie");
    v = v.replace("Économie", "Théologie");
    v = v.replace(/\bbrexit\b/giu, "Grand Schisme");
    v = v.replace(/\bfiscalité\b/giu, "Fiscalité punitive et confiscatoire");
    v = v.replace("impôts", "impôts punitifs et confiscatoires");
    v = v.replace("impôt", "impôt punitif et confiscatoire");
    v = v.replace(/\bcharges sociales\b/giu, "charges sociales punitives et confiscatoires");
    v = v.replace(/\bprestations sociales\b/giu, "prestations sociales de l'assistanat");
    v = v.replace(/\bcotisations sociales\b/giu, "cotisations sociales punitives et confiscatoires");
    v = v.replace(/\btaxes\b/giu, "taxes punitives et confiscatoires");
    v = v.replace("protection sociale", "protection sociale punitive et confiscatoire");
    v = v.replace("dépense publique", "dépense publique païenne");
    v = v.replace("dépenses publiques", "dépenses publiques païennes");
    v = v.replace("services publics", "services publics païens");
    v = v.replace(/\bcapital\b/giu, "très saint capital");
    v = v.replace(/\bcapitaux\b/giu, "très saints capitaux");
    v = v.replace(/\blibéralisme\b/giu, "mystère très saint du libéralisme");
    v = v.replace(/\bcapitalisme\b/giu, "mystère très saint du capitalisme");
    v = v.replace(/\bruissellement\b/giu, "mystère très saint du ruissellement");
    v = v.replace(/\blibre-échange\b/giu, "mystère très saint du libre-échange");
    v = v.replace(/\bconcurrence\b/giu, "mystère très saint de la concurrence");
    v = v.replace("hétérodoxe", "hérétique");
    v = v.replace("hétérodoxes", "hérétiques");
    v = v.replace(/\bjournaliste\b/giu, "prêtre");
    v = v.replace("éditorialiste", "évêque");

    v = v.replace("souverainisme", "souverainisme impie");
    v = v.replace("souverainiste", "souverainiste impie");
    v = v.replace("souverainistes", "souverainistes impies");

    // inquisition
    v = v.replace(/\btroïka\b/giu, "inquisition");

    return v;
}

// Returns true if a node should *not* be altered in any way
function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
        (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
        (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
            node.tagName.toLowerCase() == "input"));
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i, node;

    mutations.forEach(function (mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isForbiddenNode(node)) {
                // Should never operate on user-editable content
                continue;
            } else if (node.nodeType === 3) {
                // Replace the text for text nodes
                handleText(node);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(node);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
        observerConfig = {
            characterData: true,
            childList: true,
            subtree: true
        },
        bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
