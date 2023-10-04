function onFormSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form);

    // console.log([...formData]);
    console.log(formData.getAll('linguagens'));

    const urlApi = 'http://localhost:3000/jogador';
    const requestParams = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: formData.get('nome'),
            nascimento: formData.get('nascimento')
        })
    };

    // fetch(urlApi, requestParams);
}

function onNomeChange(evt) {
    console.log(evt.target);
}