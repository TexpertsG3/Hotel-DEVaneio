package hotel;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Reserva {

	private Long id;
	private LocalDate checkIn;
	private LocalDate checkOut;
	private Usuario usuario;
	private Integer quantidadeAdultos;
	private Integer quantidadeCriancas;
	private List<ServicoAdicional> servicoAdicional = new ArrayList<>();

	public Reserva(Long id, LocalDate checkIn, LocalDate checkOut, Usuario usuario, Integer quantidadeAdultos,
			Integer quantidadeCriancas, List<ServicoAdicional> servicoAdicional) {
		this.id = id;
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

	public List<ServicoAdicional> getServicoAdicional() {
		return servicoAdicional;
	}

	public void setServicoAdicional(List<ServicoAdicional> servicoAdicional) {
		this.servicoAdicional = servicoAdicional;
	}

	public Long getId() {
		return id;
	}

}
