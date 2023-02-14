package hotel;

public class Hotel {
	
	private static final String NOME_HOTEL = "DEVaneio";
	private static final String ENDERECO_HOTEL = "Rua Fictícia, 988 - Jd. Indefinido - Neverland";
	private static final String CNPJ_HOTEL = "85.885.588/0001-99";

	private String nome;
	private String endereco;
	private String cnpj;
	
	protected Hotel() {
		this.nome = NOME_HOTEL;
		this.endereco = ENDERECO_HOTEL;
		this.cnpj = CNPJ_HOTEL;
		
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	@Override
	public String toString() {
		
		return "Hotel - " + this.nome + "\n" + "Endereço - " + this.endereco + "\n" + "CNPJ - " + this.cnpj;
	}
	
}
