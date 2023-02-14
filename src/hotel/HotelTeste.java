package hotel;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

import exception.AlojamentoInexistenteException;
import exception.DadosInvalidosException;
import exception.DataInvalidaException;
import exception.ServicoInexistenteException;

public class HotelTeste {
	
	public static void main(String[] args) {
		
		final String ALOJAMENTO1 = "Quarto C#";
		final String ALOJAMENTO2 = "Quarto C++";
		
		DateTimeFormatter dataFormatada = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		
		Hotel hotel = new Hotel();
		Alojamento alojamento1 = new Alojamento(ALOJAMENTO1, new BigDecimal("300.00"));
		Alojamento alojamento2 = new Alojamento(ALOJAMENTO2, new BigDecimal("400.00"));
		
		System.out.println("Hotel aberto com sucesso! \n");
		System.out.println(hotel);
		System.out.println("\n");
		
		System.out.print("Por favor identifique-se: \n");
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Nome: ");
		String nomeUsuario = sc.nextLine();
		
		if (nomeUsuario.isBlank()) {
			throw new DadosInvalidosException("Nome Inválido.");
		}
		
		System.out.print("Email: ");
		String emailUsuario = sc.nextLine();
		
		if (emailUsuario.isBlank()) {
			throw new DadosInvalidosException("Email Inválido.");
		}
		
		System.out.print("Senha: ");
		String senhaUsuario = sc.nextLine();
		
		if (senhaUsuario.isBlank()) {
			throw new DadosInvalidosException("Senha Inválida.");
		}
	
		Usuario usuario = new Usuario(nomeUsuario, emailUsuario, senhaUsuario, TipoUsuario.CLIENTE);
		
		System.out.printf("\nBem vindo %s, faça sua reserva agora mesmo: \n", usuario.getNome());
		
		List<Alojamento> listaDeAlojamentos = new ArrayList<>();
		listaDeAlojamentos.add(alojamento1);
		listaDeAlojamentos.add(alojamento2);
		
		System.out.println("\nTemos os seguintes alojamentos disponíveis: \n");
		
		int contador = 0;
		for (Alojamento alojamento : listaDeAlojamentos) {
			
			System.out.print(++contador + " - ");
			System.out.println(alojamento);
			System.out.println();
		}
		
		System.out.print("Escolha seu alojamento (1 ou 2): ");
		int numeroAlojamento = sc.nextInt();
		sc.nextLine();
		
		
		if(numeroAlojamento != 1 && numeroAlojamento != 2) {
			throw new AlojamentoInexistenteException("Alojamento inexistente no hotel.");
		}
		
		LocalDate checkIn;
		try {
			System.out.print("\nData checkIn (formato exemplo 01/01/2023): ");
			String dataCheckin = sc.nextLine();
			checkIn = LocalDate.parse(dataCheckin, dataFormatada);
			if(checkIn.isBefore(LocalDate.now())) {
				throw new DataInvalidaException("A data de checkin deve ser superior ou igual a data atual.");
			}
		} catch (DateTimeParseException e) {
			throw new DataInvalidaException("Formato de data inválido.");
		}
		
		LocalDate checkOut;
		try {
			System.out.print("Data checkOut (formato exemplo 02/01/2023): ");
			String dataCheckout = sc.nextLine();
			checkOut = LocalDate.parse(dataCheckout, dataFormatada);
			if (checkOut.isBefore(checkIn) || checkOut.isEqual(checkIn)) {
				throw new DataInvalidaException("Data Inválida. A data de checkout deve ser superior a data de checkin.");
			}
		} catch (DateTimeParseException e) {
			throw new DataInvalidaException("Formato de data inválido.");
		}
				
		System.out.print("Quantidade de adultos: ");
		Integer quantidaDeAdultos = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Quantidade de crianças: ");
		Integer quantidaDeCriancas = sc.nextInt();
		sc.nextLine();
		
		List<ServicoAdicional> listaDeServicos = new ArrayList<>();
		listaDeServicos.add(ServicoAdicional.AUTITORIO_DE_EVENTOS);
		listaDeServicos.add(ServicoAdicional.ESPACO_KIDS);
		listaDeServicos.add(ServicoAdicional.GUIA_TURISTICO);
		listaDeServicos.add(ServicoAdicional.PASSEIO_NAS_DUNAS);
		listaDeServicos.add(ServicoAdicional.TRATAMENTO_SPA);
		
		System.out.println("\nTemos os seguintes serviços adicionais disponíveis: \n");
		
		contador = 0;
		
		for (ServicoAdicional servico : listaDeServicos) {
			
			System.out.print(++contador + " - ");
			System.out.println(servico);
			System.out.println();
		}
		
		
		Set<ServicoAdicional> servicosSelecionados = new HashSet<>();
		System.out.println("Selecione os serviços adicionais (Ex. 1 3 5 ou 0 para nenhum): \n");
		Integer valor;

			do {
				
				valor = sc.nextInt();
										
				switch (valor) {
				case 0:
					break;
				case 1:
					servicosSelecionados.add(listaDeServicos.get(0));
					break;
				case 2:
					servicosSelecionados.add(listaDeServicos.get(1));
					break;
				case 3:
					servicosSelecionados.add(listaDeServicos.get(2));
					break;
				case 4:
					servicosSelecionados.add(listaDeServicos.get(3));
					break;
				case 5:
					servicosSelecionados.add(listaDeServicos.get(4));
					break;
				default:
					throw new ServicoInexistenteException("Serviço não existe no catálogo. Favor selecionar um dos serviços disponíveis");
					
				}	
							
			} while(!valor.equals(0));
			
		
		Reserva reserva = new Reserva(checkIn, checkOut, usuario, quantidaDeAdultos, quantidaDeCriancas, servicosSelecionados);
		
		System.out.println();
		System.out.println(reserva);
		
		sc.close();
		
	}

}
