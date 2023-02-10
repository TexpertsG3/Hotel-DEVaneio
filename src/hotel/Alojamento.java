package hotel;

import java.math.BigDecimal;

public class Alojamento {
	
	private Long id;
	private String nomeAlojamento;
	private BigDecimal valor;
	
	public Alojamento(Long id, String nomeAlojamento, BigDecimal valor) {
		this.id = id;
		this.nomeAlojamento = nomeAlojamento;
		this.valor = valor;
	}

	public String getNomeAlojamento() {
		return nomeAlojamento;
	}

	public void setNomeAlojamento(String nomeAlojamento) {
		this.nomeAlojamento = nomeAlojamento;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}
	

}
