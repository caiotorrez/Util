    var json_data = [ { "itemId": 16, "name": "Compra e Venda" }, { "itemId": 17, "name": "Aluguel" }, { "itemId": 12, "name": "Motos" }, { "itemId": 13, "name": "Carros" }, { "itemId": 10, "name": "Classificados Diversos" }, { "itemId": 14, "name": "Oferta de Emprego" } ];
    
    const params = {name: ['Carros', 'Motos'], itemId: [16, 13, 12], price: 'crescent'};
    const keys = Object.keys(params);

    keys.forEach((key) => {
        if (key === 'price') {
            if (params.sort === 'crescent') {
                json_data.sort((a, b) => {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                });
            } else {
                json_data.sort((a, b) => {
                    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
                });
            }
        } else {
            json_data = json_data.filter((obj) => {
                if (params[key].includes(obj[key])) {
                    return obj;
                }
            })
        }
    });

    console.log(json_data);
