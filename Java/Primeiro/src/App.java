import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner insert = new Scanner(System.in);

        Cliente c1 = new Cliente("Benhur", "018.712.920-77");
        Conta c = new Conta("123-28", "2088", 100.22, c1);
        byte op;

        do {
            System.out.println("CONTA" + "\n" + "Escolha a ação" + "\n" + "1 - Depositar\n" + "2 - Sacar\n"
                    + "3 - Ver Saldo\n" + "0 - Sair");
            op = insert.nextByte();
            System.out.println('\u000C');
            switch (op) {
            case 1:
                System.out.println("Digite o valor que deseja depositar");
                System.out.println(c.depositar(insert.nextDouble()));
                System.out.println('\u000C');
                break;
            case 2:
                System.out.println("Digite o valor que deseja sacar");
                System.out.println(c.sacar(insert.nextDouble()));
                System.out.println('\u000C');
                break;
            case 3:
                System.out.println("Seu saldo é: R$" + c.getSaldo());
                System.out.println('\u000C');
                break;
            case 0:
                System.out.println("Sistema encerrado.");
                break;
            default:
                System.out.println("Opção inválida. Tente novamente.");
                System.out.println('\u000C');
                break;
            }
        } while (op != 0);

    }
}
