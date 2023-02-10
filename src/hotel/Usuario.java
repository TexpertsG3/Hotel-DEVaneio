package hotel;

public class Usuario {
	
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private TipoUsuario tipoUsuario;
	
	public Usuario(Long id, String nome, String email, String senha, TipoUsuario tipoUsuario) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.tipoUsuario = tipoUsuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public TipoUsuario getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(TipoUsuario tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	public Long getId() {
		return id;
	}

	public String getSenha() {
		return senha;
	}
		
}
