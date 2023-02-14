package hotel;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public enum ServicoAdicional {
	
	GUIA_TURISTICO("Guia Turístico", new BigDecimal("100.00")),
	PASSEIO_NAS_DUNAS("Passeio nas Dunas", new BigDecimal("150.00")),
	TRATAMENTO_SPA("Tratamento Spa", new BigDecimal("150.00")),
	AUTITORIO_DE_EVENTOS("Auditório de Eventos", new BigDecimal("300.00")),
	ESPACO_KIDS("Espaço Kids", new BigDecimal("200.00"));

	private String nomeServico;
	private BigDecimal valorServico;

	private ServicoAdicional(String nomeServico, BigDecimal valorServico) {
		this.nomeServico = nomeServico;
		this.valorServico = valorServico;
	}

	public String getNomeServico() {
		return nomeServico;
	}

	public BigDecimal getValorServico() {
		return valorServico;
	}

	public static BigDecimal somaServicos(List<ServicoAdicional> servicos) {
		BigDecimal resultado = BigDecimal.ZERO;
		for (ServicoAdicional servico : servicos) {
			resultado = resultado.add(servico.getValorServico());
		}
		return resultado;
	}
	
	public static List<ServicoAdicional> adicionarServicos(ServicoAdicional servico) {
		List<ServicoAdicional> listaTemp = new ArrayList<>();
		listaTemp.add(servico);
		return listaTemp;
	}
	
	@Override
	public String toString() {
		
		return getNomeServico() + "\n" + "Valor - R$" + getValorServico();
	}

}
