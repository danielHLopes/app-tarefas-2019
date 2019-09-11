class CategoriaService extends Service{

    constructor(){
        super()
        this._path = `${this._url}/categorias`//concateno os dados
    }



    listarTodos(){
        return fetch(`${this._path}`)
                .then(res => res.json())
                .catch(error => console.log(error))
            
    } //esse metodo vai ter um retorno da API, ele pode concatenar metodos, o metodo GET é o padrão
}