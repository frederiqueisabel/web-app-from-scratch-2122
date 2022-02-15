fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=WcEMBSDx').then(function (response) {
    return response.json();
}).then(function (data) {
  console.log(data)
    const markup = `
    <section>
        <img src="images/locatie-rijksmuseum.png">
        <h1>
            Rijksmuseum
        </h1>
        <a>Ontdek</a>
    </section>
    <div>
        <ul>
            <li>
                <img src="${data.artObjects[0].webImage.url}">
                <container>
                    <h2>${data.artObjects[0].title}</h2>
                    <p>${data.artObjects[0].principalOrFirstMaker}</p>
                </container>
            </li>
            <li>
                <container>
                    <h2>${data.artObjects[1].title}</h2>
                    <p>${data.artObjects[1].principalOrFirstMaker}</p>
                </container>
                <img src="${data.artObjects[1].webImage.url}">
            </li>
            <li>
                <img src="${data.artObjects[2].webImage.url}">
                <container>
                    <h2>${data.artObjects[2].title}</h2>
                    <p>${data.artObjects[2].principalOrFirstMaker}</p>
                </container>
            </li>
            <li>
                <img src="${data.artObjects[0].webImage.url}">
                <container>
                    <h2>${data.artObjects[0].title}</h2>
                    <p>${data.artObjects[0].principalOrFirstMaker}</p>
                </container>
            </li>
            <li>
                <container>
                    <h2>${data.artObjects[1].title}</h2>
                    <p>${data.artObjects[1].principalOrFirstMaker}</p>
                </container>
                <img src="${data.artObjects[1].webImage.url}">
            </li>
            <li>
                <img src="${data.artObjects[2].webImage.url}">
                <container>
                    <h2>${data.artObjects[2].title}</h2>
                    <p>${data.artObjects[2].principalOrFirstMaker}</p>
                </container>
            </li>
        </ul>
    
    </div>
    `;

    document.body.innerHTML = markup;
}).catch(function (err) {
    console.warn('something went wrong', err);
})
async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (err) {
        console.log(err)
    }
}
