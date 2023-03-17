class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
}

    inserir (codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        if (this.repositorio.buscarCodigo(codigo) === undefined){
            return this.repositorio.inserir(disciplina);
        } else { 
            console.log('Erro. Verificar dados informados.')
            return undefined;
            }
        
    }

    remover (codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarNome(nome) {
        return this.repositorio.buscarNome(nome);
    }

    buscarCodigo(codigo) {
        return this.repositorio.buscarCodigo(codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno){
        const disciplina = this.repositorio.buscarCodigo(codigo);
        if (disciplina !== undefined) {
            this.repositorio.inserirAlunoNaDisciplina(disciplina, aluno)
        }
    }

    removerAlunoDisciplina(nome) {
        const disciplina = this.repositorio.buscarCodigo(codigo);
        if (disciplina !== undefined) {
            this.repositorio.removerAlunoDisciplina(disciplina, aluno);
        }
    }
}