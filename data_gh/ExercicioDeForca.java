package model;

public class ExercicioDeForca extends Exercicio {
    public ExercicioDeForca(String nome) {
        super(nome);
    }

    @Override
    public void executar() {
        System.out.println("Executando exercício de força: " + getNome());
        System.out.println("Levante o peso conforme indicado.");
    }
}