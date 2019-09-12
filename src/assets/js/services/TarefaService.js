class TarefaService extends Service{

    constructor(){
        super()
        this._path = `${this._url}/tarefas?f=`//para usar o recurso de filtrar, deixando vazio lista tudo, se colocar algo na frente usa de filtro  
    }

    listarTodas(descricao){
        return fetch(`${this._path}${descricao}`)//concateno e jogo mais a descrição
                  .then(res => res.json())
                  .catch(error => console.log(error))
      }

      
}