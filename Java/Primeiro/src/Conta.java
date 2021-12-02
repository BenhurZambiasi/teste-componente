public class Conta {
  private String numero, agencia;
  private double saldo;
  private Cliente titular;

  public Conta() {
  }

  public Conta(String numero, String agencia, double saldo, Cliente titular) {
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
    this.titular = titular;
  }

  public void setNumero(String n) {
    this.numero = n;
  }

  public void setAgencia(String a) {
    this.agencia = a;
  }

  public void setTitular(Cliente c) {
    this.titular = c;
  }

  public String depositar(double n) {
    if (n > 0) {
      this.saldo += n;
      return "Deposito realizado!";
    } else {
      return "Deposito não realizado!";
    }
  }

  public String sacar(double n) {
    if (n > 0) {
      if (getSaldo() >= n) {
        this.saldo -= n;
        return "Saque realizado!";
      } else if (getSaldo() + 2000 >= n) {
        this.saldo -= n;
        return "Saque realizado! Você entrou no cheque especial.";
      } else {
        return "Saldo insuficiente!";
      }
    } else {
      return "Valor inválido para saque!";
    }
  }

  public double getSaldo() {
    return this.saldo;
  }
}
