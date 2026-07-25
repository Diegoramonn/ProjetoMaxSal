import {
  FaChartPie,
  FaUsers,
  FaBox,
  FaClipboardList,
  FaRoute,
  FaTruck,
  FaUserTie,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const menu = [
  { icon: <FaChartPie />, nome: "Dashboard" },
  { icon: <FaUsers />, nome: "Clientes" },
  { icon: <FaBox />, nome: "Produtos" },
  { icon: <FaClipboardList />, nome: "Pedidos" },
  { icon: <FaRoute />, nome: "Rotas" },
  { icon: <FaTruck />, nome: "Veículos" },
  { icon: <FaUserTie />, nome: "Motoristas" },
  { icon: <FaChartBar />, nome: "Relatórios" },
  { icon: <FaCog />, nome: "Configurações" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white shadow-lg">
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          Maxsal
        </h1>
      </div>

      <nav className="mt-5">
        {menu.map((item) => (
          <button
            key={item.nome}
            className="w-full flex items-center gap-4 px-6 py-4 hover:bg-slate-800 transition duration-300"
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.nome}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}