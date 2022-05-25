import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Laís", 78945612379, "456");
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteestaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteestaLogado, diretorestaLogado, clienteestaLogado);
