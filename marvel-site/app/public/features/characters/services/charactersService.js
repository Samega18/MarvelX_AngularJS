angular.module("app").service("CharactersService", function ($http, env) {
  this.getAllCharacters = (name, offset, limit, categorie) => {
    const params = {
      apikey: "00c502c2b771a984e4cb31fea3921b14",
      hash: "6a16c993302911bceb2491e49926426b",
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

  this.getDetails = (categorie, id) => {

    const params = {
      apikey: '00c502c2b771a984e4cb31fea3921b14',
      hash: '6a16c993302911bceb2491e49926426b',
      ts: 1,
    };

    return $http.get(`${env.apiUrl}/${categorie}/${id}`, {
      params
    });
  };

  this.getDetailView = (categorie, id, categorieView, limit, offset) => {

    const params = {
      apikey: '00c502c2b771a984e4cb31fea3921b14',
      hash: '6a16c993302911bceb2491e49926426b',
      ts: 1,
      offset,
      limit,
    };

    return $http.get(`${env.apiUrl}/${categorie}/${id}/${categorieView}`, {
      params
    });
  };
});
