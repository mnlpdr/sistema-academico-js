class DisciplinaControlador {

    constructor(){
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDisciplina = Number(document.getElementById('codigoDisciplina').value);
        const nomeDisciplina = document.getElementById('nomeDisciplina').value;
        const inserirDisciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplina(nomeDisciplina, codigoDisciplina);
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
        document.body.appendChild(elementoP);
    }

    removerDisciplina(codigo){
        this.disciplinaServico.remover(codigo);
    }

    inserirAlunoNaDisciplina() {
        const aluno = new Aluno(nome, idade);
        this.disciplinaServico.inserirAlunoNaDisciplina(aluno, codigo);
        if(aluno){
            alert('Aluno inserido com sucesso');
        }
        else{
            alert('Erro. Verifique se o aluno já foi cadastrado anteriormente');
        }
        
    }

    /*removerAlunoDisciplina(codigo, nome) {
        //IMPLEMENTAR 

    }*/
}
