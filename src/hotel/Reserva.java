package hotel;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class Reserva extends Hotel {

	private LocalDate checkIn;
	private LocalDate checkOut;
	private Usuario usuario;
	private Integer quantidadeAdultos;
	private Integer quantidadeCriancas;
	private Set<ServicoAdicional> servicoAdicional = new HashSet<>();

	public Reserva(LocalDate checkIn, LocalDate checkOut, Usuario usuario,
			Integer quantidadeAdultos, Integer quantidadeCriancas, Set<ServicoAdicional> servicoAdicional) {
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.usuario = usuario;
		this.quantidadeAdultos = quantidadeAdultos;
		this.quantidadeCriancas = quantidadeCriancas;
		this.servicoAdicional = servicoAdicional;
	}

	public LocalDate getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(LocalDate checkIn) {
		this.checkIn = checkIn;
	}

	public LocalDate getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(LocalDate checkOut) {
		this.checkOut = checkOut;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Integer getQuantidadeAdultos() {
		return quantidadeAdultos;
	}

	public void setQuantidadeAdultos(Integer quantidadeAdultos) {
		this.quantidadeAdultos = quantidadeAdultos;
	}

	public Integer getQuantidadeCriancas() {
		return quantidadeCriancas;
	}

	public void setQuantidadeCriancas(Integer quantidadeCriancas) {
		this.quantidadeCriancas = quantidadeCriancas;
	}

	public Set<ServicoAdicional> getServicoAdicional() {
		return servicoAdicional;
	}

	public void setServicoAdicional(Set<ServicoAdicional> servicoAdicional) {
		this.servicoAdicional = servicoAdicional;
	}
	
	public Set<ServicoAdicional> adicionarServico (ServicoAdicional servico) {
		this.servicoAdicional.add(servico);
		return this.servicoAdicional;
	}

	@Override
	public String toString() {
		
		return "Reserva efetuada com sucesso para o cliente: " + usuario.getNome();
	}
	
}
