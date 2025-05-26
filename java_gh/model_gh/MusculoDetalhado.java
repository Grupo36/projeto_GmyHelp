package model;

public class MusculoDetalhado extends Musculo {
    private String grupoMuscular;

    public MusculoDetalhado(String nome, String grupoMuscular) {
        super(nome);
        this.grupoMuscular = grupoMuscular;
    }

    public String getGrupoMuscular() {
        return grupoMuscular;
    }

    public void setGrupoMuscular(String grupoMuscular) {
        this.grupoMuscular = grupoMuscular;
    }
}