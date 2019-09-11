class CategoriaController{

    constructor(){
        this._categorias = new Categorias()
        this._categoriaService = new CategoriaService()
        this._categoriaView = new CategoriaView() 
    }

    //then()é a execução quando o que estiver atras(esquerda) estiver pronto
    montar(){
        this._categoriaService.listarTodos()
            .then(categorias =>
                categorias.map( categoria => 
                    this._categorias.adicionar(categoria)//crio uma lista de categorias onde cada categoria vai carregar seus dados
                )
                .then(
                    () => this._categoriaView.montarListagem(this._categorias)
                )
            )
    }


}