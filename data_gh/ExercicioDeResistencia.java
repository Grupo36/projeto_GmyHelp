package model;

public class ExercicioDeResistencia extends Exercicio {
    public ExercicioDeResistencia(String nome) {
        super(nome);
    }

    @Override
    public void executar() {
        System.out.println("Executando exercício de resistência: " + getNome());
        System.out.println("Mantenha o ritmo constante por 30 minutos.");
    }
}