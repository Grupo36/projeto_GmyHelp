package controller;

import view.TelaMapa;
import view.TelaExercicios;

import java.util.Scanner;

public class GymHelpController {
    private Scanner scanner;
    private TelaMapa telaMapa;
    private TelaExercicios telaExercicios;

    public GymHelpController() {
        scanner = new Scanner(System.in);
        telaMapa = new TelaMapa();
        telaExercicios = new TelaExercicios();
    }

    public void iniciar() {
        boolean executando = true;

        while (executando) {
            System.out.println("\n--- GymHelp ---");
            System.out.println("1. Exibir mapa de músculos");
            System.out.println("2. Exibir lista de exercícios");
            System.out.println("0. Sair");

            System.out.print("Escolha uma opção: ");
            int escolha = scanner.nextInt();

            switch (escolha) {
                case 1:
                    telaMapa.exibirMapa();
                    break;
                case 2:
                    telaExercicios.exibirExercicios();
                    break;
                case 0:
                    executando = false;
                    System.out.println("Encerrando o aplicativo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }
}