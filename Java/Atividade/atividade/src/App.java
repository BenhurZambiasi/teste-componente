import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner insert = new Scanner(System.in);
        int num = 0, maior = 1;

        // Algirimo 1
        Veiculo v1 = new Veiculo();
        Veiculo v2 = new Veiculo();
        Veiculo v3 = new Veiculo();

        System.out.println("Cadastro de Veículos");
        System.out.print("Marca do 1º veiculo: ");
        v1.setMarca(insert.next());
        System.out.print("Placa do 1º veiculo: ");
        v1.setPlaca(insert.next());
        System.out.print("Valor do 1º veiculo: ");
        v1.setValor(insert.nextDouble());

        System.out.print("\nMarca do 2º veiculo: ");
        v2.setMarca(insert.next());
        System.out.print("Placa do 2º veiculo: ");
        v2.setPlaca(insert.next());
        System.out.print("Valor do 2º veiculo: ");
        v2.setValor(insert.nextDouble());

        System.out.print("\nMarca do 3º veiculo: ");
        v3.setMarca(insert.next());
        System.out.print("Placa do 3º veiculo: ");
        v3.setPlaca(insert.next());
        System.out.print("Valor do 3º veiculo: ");
        v3.setValor(insert.nextDouble());

        if (v1.getValor() < v2.getValor() && v1.getValor() < v3.getValor()) {
            v1.setValor(v1.getValor() * 0.8);
            v1.setDesconto(" recebeu um desconto de 20%");
        } else if (v2.getValor() < v3.getValor()) {
            v2.setValor(v2.getValor() * 0.8);
            v2.setDesconto(" recebeu um desconto de 20%");
        } else {
            v3.setValor(v3.getValor() * 0.8);
            v3.setDesconto(" recebeu um desconto de 20%");
        }

        System.out.println("Dados dos veículos");
        System.out.println(v1.toString() + "\n");
        System.out.println(v2.toString() + "\n");
        System.out.println(v3.toString() + "\n");

        byte count = 0;
        // Algoritmo 2
        while (count < 5) {
            System.out.print("Digite o " + (count + 1) + "º número: ");
            num = insert.nextInt();
            if (num > maior) {
                maior = num;
            }
            count++;
        }

        System.out.print("Maior número digitado: " + maior + "\n");

    }
}
