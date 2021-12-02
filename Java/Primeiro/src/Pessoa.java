public class Pessoa {
  private String nome, sobrenome;
  private byte idade, sexo;

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setSobrenome(String sobrenome) {
    this.sobrenome = sobrenome;
  }

  public void setIdade(byte idade) {
    this.idade = idade;
  }

  public void setSexo(byte sexo) {
    this.sexo = sexo;
  }

  public String getNome() {
    return this.nome;
  }
    public String getSobrenome() {
    return this.sobrenome;
  }
    public byte getIdade() {
    return this.idade;
  }

  public byte getsexo() {
    return this.sexo;
  }

  public String toString() {
    String sexoTipo;
    if(this.sexo == 1)
    {
      sexoTipo = "Masculino";                    
    }else{
      sexoTipo = "Feminio";
    }
    return "DADOS"+"\n"+"Nome completo: "+this.nome+" "+this.sobrenome+"\n"+"Idade: "+this.idade+"\n"+"Sexo: "+sexoTipo;
  }

}
