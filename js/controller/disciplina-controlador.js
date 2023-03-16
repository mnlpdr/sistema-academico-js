class DisciplinaControlador {

    constructor(){
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDisciplina = Number(document.getElementById('codigoDisciplina').value);
        const nomeDisciplina = document.getElementById('nomeDisciplina').value;
        const inserirDisciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (inserirDisciplina) {
            
        }
    
}