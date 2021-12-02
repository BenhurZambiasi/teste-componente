public class Cliente {
  private String nome, cpf;

  public Cliente() {
  }

  public Cliente(String n, String c) {
    this.nome = n;
    this.cpf = c;
  }

  public void setNome(String n) {
    this.nome = n;
  }

  public void setCpf(String c) {
    this.cpf = c;
  }

  public String getNome() {
    return this.nome;
  }

  public String getCpf() {
    return this.cpf;
  }
}
