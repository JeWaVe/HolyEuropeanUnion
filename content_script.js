function walk(rootNode)
{
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

function replaceText(v)
{
    v = v.replace(/\bL'Union européenne\b/gi, "La Sainte Eglise Catholique");
    v = v.replace(/\bUnion européenne\b/gi, "Sainte Eglise Catholique");
    v = v.replace(/\bCommission européenne\b/gi, "Curie romaine");
    v = v.replace(/\bl'Europe\b/gi, "L'Eglise");
    v = v.replace(/\ble parlement européen\b/gi, "La Conférence Episcopale");
    v = v.replace(/\bparlement européen\b/gi, "Conférence Episcopale");
	v = v.replace(/\bdroit européen\b/gi, "droit canonique");
	v = v.replace(/\btraités européens\b/gi, "droit canonique");
    v = v.replace(/\beuropéen\b/gi, "très chrétien");
    v = v.replace(/\beuropéens\b/gi, "très chrétiens");
    v = v.replace(/\beuropéennes\b/gi, "très chrétiennes");
    v = v.replace(/\beuropéenne\b/gi, "très chrétienne");
    v = v.replace(/\bd'europe\b/gi, "de la chrétienté");
    v = v.replace(/\bl'europe\b/gi, "la chrétienté");
    v = v.replace(/\béconomique\b/gi, "Théologique");
    v = v.replace(/\beurogroupe\b/gi, "Saint Empire Romain Germanique");
	
	// personnes
    v = v.replace(/\bMario Draghi\b/gi, "Sa Sainteté le pape Mario");
    v = v.replace(/\bChristine Lagarde\b/gi, "Sa Sainteté le pape Christine");
    v = v.replace(/\bJean-Claude Juncker\b/gi, "Son Excellence Révérendissime Jean-Claude Juncker"); //José Manuel Durão Barroso
    v = v.replace(/\bJosé Manuel Durão Barroso\b/gi, "Son Excellence Révérendissime José Manuel Durão Barroso"); //Ursula von der Leyen
    v = v.replace(/\bUrsula von der Leyen\b/gi, "Son Excellence Révérendissime Ursula von der Leyen"); //Ursula von der Leyen
    v = v.replace(/\bNicolas Sarkozy\b/gi, "Son Altesse Nicolas Sarkozy, Président très chrétien");
    v = v.replace(/\bFrançois Hollande\b/gi, "Son Altesse François Hollande, Président très chrétien");
    v = v.replace(/\bEmmanuel Macron\b/gi, "Son Altesse Emmanuel Macron, Président très chrétien");
    v = v.replace(/\bMacron\b/gi, "Son Altesse Emmanuel Macron, Président très chrétien");
    v = v.replace(/\bAngela Merkel\b/gi, "Sa Majesté Impériale Angela Merkel");
    v = v.replace(/\bRobert Schuman\b/gi, "Son Excellence Révérendissime Robert Schuman");
    v = v.replace(/\bKonrad Adenauer\b/gi, "Son Excellence Révérendissime Konrad Adenauer");
    v = v.replace(/\bJean Monnet\b/gi, "Son Excellence Révérendissime Jean Monnet");
    v = v.replace(/\bAlcide de Gasperi\b/gi, "Son Excellence Révérendissime Alcide de Gasperi");
    v = v.replace(/\bPaul-Henri Spaak\b/gi, "Son Excellence Révérendissime Paul-Henri Spaak");
    v = v.replace(/\bJoseph Bech\b/gi, "Son Excellence Révérendissime Joseph Bech");
    v = v.replace(/\bJohan Willem Beyen\b/gi, "Son Excellence Révérendissime Johan Willem Beyen");
    v = v.replace(/\bJean Tirole\b/gi, "Le Très Révérend Père Jean Tirole");
	v = v.replace(/\bFrédéric Lordon\b/gi, "Frédéric Lordon (hérétique au bûcher)");
	v = v.replace(/\bJoseph Stieglitz\b/gi, "Joseph Stieglitz (hérétique au bûcher)");
	v = v.replace(/\bJacques Sapir\b/gi, "Jacques Sapir (hérétique au bûcher)");
	v = v.replace(/\beurosceptique\b/gi, "hérétique");
	v = v.replace(/\bEuroscepticisme\b/gi, "la très grave hérésie de l'euroscepticisme");
	v = v.replace(/\bEurocritique\b/gi, "la grave hérésie de l'eurocritique");
	v = v.replace(/\bEurocritiques\b/gi, "les hérésiques de l'eurocritique");
	
	// lieux
    v = v.replace(/\bBruxelles\b/gi, "Saint-Siège");
    v = v.replace(/\bFrancfort\b/gi, "Saint-Siège");
    v = v.replace(/\bStrasbourg\b/gi, "Saint-Siège");
	
	// traités
    v = v.replace(/\bTraité de Rome\b/gi, "Concile de Chalcédoine");
    v = v.replace(/\bTraité de Maastricht\b/gi, "Concile de Trente");
    v = v.replace(/\bde Maastricht\b/gi, "du concile de Trente");
    v = v.replace(/\bTraité de Lisbonne\b/gi, "Concile de Vatican I");
    v = v.replace(/\bTraité d'Amsterdam\b/gi, "Concile de Nicée");
    v = v.replace(/\bTraité de Nice\b/gi, "Concile de Latran");
    v = v.replace(/\btraité\b/gi, "Concile");
	
	
	// théorie
    v = v.replace(/\béconomiques\b/gi, "théologiques");
    v = v.replace(/\béconomique\b/gi, "théologique");
    v = v.replace(/\béconomie\b/gi, "théologie");
    v = v.replace(/\bbrexit\b/gi, "Grand Schisme");
	v = v.replace(/\blibéralisme\b/gi, "mystère très saint du libéralisme");
	v = v.replace(/\bcapitalisme\b/gi, "mystère très saint du capitalisme");
	v = v.replace(/\bruissellement\b/gi, "mystère très saint du ruissellement");
	v = v.replace(/\blibre-échange\b/gi, "mystère très saint du libre-échange");
	v = v.replace(/\bconcurrence\b/gi, "mystère très saint de la concurrence");
	v = v.replace(/\bhétérodoxe\b/gi, "hérétique");
	v = v.replace(/\journaliste\b/gi, "prêtre");
	
	// inquisition
	v = v.replace(/\btroïka\b/gi, "inquisition");
	
	//s du concile de Chalcédoine

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

    mutations.forEach(function(mutation) {
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
