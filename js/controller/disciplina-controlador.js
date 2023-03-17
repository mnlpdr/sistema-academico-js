class DisciplinaControlador {
    constructor(){
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector('#nomeDisciplina').value;
        const codigoDisciplina = Number(document.querySelector('#codigoDisciplina').value);
        const inserirDisciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        console.log(inserirDisciplina);
        if (inserirDisciplina) {
            this.mostrarDisciplina(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso');
        } else {
            alert('Erro. Verifique se a disciplina já foi cadastrada anteriormente');
        }
            
    }
        
    mostrarDisciplina(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplina(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.querySelector('#ListaDisciplinas').appendChild(elementoP);
    }

    removerDisciplina(codigo){
        this.disciplinaServico.remover(codigo);
    }

    inserirAlunoNaDisciplina() {
        const codigoDisciplina = Number(document.querySelector('#codigoDisciplinaQ').value);
        const nomeAluno = document.querySelector('#nomeAlunoQ').value;
        const disciplina = this.disciplinaServico.buscarCodigo(codigoDisciplina);
        if (disciplina){
            const aluno = new Aluno(nomeAluno);
            this.disciplinaServico.inserirAlunoNaDisciplina(disciplina, aluno);
            this.mostrarAlunoNaDisciplinaNoHTML(codigoDisciplina, nomeAluno);
            alert('Aluno inserido com sucesso');
        }
        else{
            alert('Erro. Verifique os dados inseridos.')
        }
    }
    /*inserirAlunoNaDisciplina() {
        const aluno = new Aluno(nome, idade);
        this.disciplinaServico.inserirAlunoNaDisciplina(aluno, codigo);
        if(aluno){
            alert('Aluno inserido com sucesso');
        }
        else{
            alert('Erro. Verifique se o aluno já foi cadastrado anteriormente');
        }
        
    }*/

    removerAlunoDisciplina(codigo, nome) {
        const disciplina = this.disciplinaServico.buscarCodigo(codigo);
        const aluno = new Aluno(nome);
        this.disciplinaServico.removerAlunoDisciplina(disciplina, aluno);
    }
    
    mostrarAlunoNaDisciplinaNoHTML(codigo, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigo} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerAlunoDaDisciplina(event.target.parentElement.getAttribute("discCodigo"), nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        elementoP.setAttribute("discCodigo", codigo);
        document.querySelector('#ListaAlunoNaDisciplina').appendChild(elementoP);
    }
       

}