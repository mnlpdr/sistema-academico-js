class DisciplinaRepositorio {

    constructor() {
        this._disciplinas = [];
    }

//Inserir e Remover Disciplina

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indexRemove = this._disciplinas.findIndex(disciplina => disciplina.codigo == codigo);
        this._disciplinas.splice(indexRemove, 1);
    //indexOf ao invés de findIndex?
    }

//Listar

    listar() {
    return this._disciplinas;
    //return [].concat(this._disciplinas);
    }

    buscarNome(nome) {
    return this._disciplinas.filter(disciplina => disciplina.nome == nome);
    }

    buscarCodigo(codigo) {
    return this._disciplinas.filter(disciplina => disciplina.codigo == codigo);
    }

//Inserir e Remover Aluno por Disciplina

    inserirAlunoNaDisciplina(codigo, aluno) {
    const alunos = disciplina.alunos;
    alunos.push(aluno);
    disciplina.alunos = alunos;

    }

    removerAlunoDisciplina(nome) {
        const index = this.alunos.indexOf(aluno => aluno.nome === nome);
        this.alunos.splice(index, 1);
    }
}
