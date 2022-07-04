angular.module("app").service("CharactersService", function ($http, env) {
  // Solicitação da pesquisa do Home
  this.getAllCharacters = (name, offset, limit, categorie) => {
    const params = {
      apikey: "f79245e035e64fb032fd90e1e446d36f",
      hash: "03ef7068f9411d1f8fcd969b4e0ee2e2",
      ts: 1,
      offset,
      limit,
    };

    if (name != null && name != "" && name != undefined) {

      if(categorie == 'characters' || categorie == 'events'){
        params["nameStartsWith"] = name;
      } else if(categorie == 'comics' || categorie == 'series'){
        params["titleStartsWith"] = name;
      }
      
    }

    return $http.get(`${env.apiUrl}/${categorie}`, {
      params,
    });
  };

  // Solicitação dos dados de um "id" em determinada "categoria"
  this.getDetails = (categorie, id) => {

    const params = {
      apikey: "f79245e035e64fb032fd90e1e446d36f",
      hash: "03ef7068f9411d1f8fcd969b4e0ee2e2",
      ts: 1,
    };

    return $http.get(`${env.apiUrl}/${categorie}/${id}`, {
      params
    });
  };

  // Solicitação de outros dados de um "id" em determinada "categoria"
  this.getDetailView = (categorie, id, categorieView, limit, offset) => {

    const params = {
      apikey: "f79245e035e64fb032fd90e1e446d36f",
      hash: "03ef7068f9411d1f8fcd969b4e0ee2e2",
      ts: 1,
      offset,
      limit,
    };

    return $http.get(`${env.apiUrl}/${categorie}/${id}/${categorieView}`, {
      params
    });
  };
});
