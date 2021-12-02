public class Veiculo {
  private String marca, placa, desconto = " ";
  private double valor;

  public Veiculo() {
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public void setPlaca(String placa) {
    this.placa = placa;
  }

  public void setDesconto(String desconto) {
    this.desconto = desconto;
  }

  public void setValor(double valor) {
    this.valor = valor;
  }

  public String getMarca() {
    return this.marca;
  }

  public String getPlaca() {
    return this.placa;
  }

  public double getValor() {
    return this.valor;
  }

  @Override
  public String toString() {
    return "Dados do veículo\n" + "Marca: " + this.marca + "\n" + "Placa: " + this.placa + "\n" + "Valor: R$"
        + this.valor + this.desconto;
  }

}
