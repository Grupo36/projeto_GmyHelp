package model;

public class Exercicio {
    private String nome;

    public Exercicio(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void executar() {
        System.out.println("Executando exercício genérico: " + nome);
    }
}