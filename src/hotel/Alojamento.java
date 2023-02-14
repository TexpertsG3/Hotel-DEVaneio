package hotel;

import java.math.BigDecimal;

public class Alojamento{

	private String nomeAlojamento;
	private BigDecimal valor;

	public Alojamento(String nomeAlojamento, BigDecimal valor) {
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
	
	
	@Override
	public String toString() {
		
		return "Alojamento - " + this.nomeAlojamento + "\n" + "Valor da diária - R$" + String.valueOf(this.valor);
	}

}
