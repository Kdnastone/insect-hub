// Componente funcional que recibe props para mostrar botones de filtro
const FilterMenu = ({ orders, selectedOrder, setSelectedOrder, origins, selectedOrigin, setSelectedOrigin }) => {
  return (
    <div className="mb-6">
      {/* Título del filtro por orden */}
      <h2 className="text-xl font-semibold text-[#475C22] mb-2">Filtrar por Orden</h2>
      
      {/* Botones de filtro para orden */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Botón para mostrar todos los órdenes */}
        <button
          onClick={() => setSelectedOrder("Todos")}
          className={`px-3 py-1 rounded-full border ${
            selectedOrder === "Todos"
              ? "bg-[#475C22] text-white"
              : "bg-white text-[#475C22] border-[#475C22]"
          }`}
        >
          Todos
        </button>

        {/* Botones para cada orden */}
        {orders.map((order) => (
          <button
            key={order}
            onClick={() => setSelectedOrder(order)}
            className={`px-3 py-1 rounded-full border ${
              selectedOrder === order
                ? "bg-[#475C22] text-white"
                : "bg-white text-[#475C22] border-[#475C22]"
            }`}
          >
            {order}
          </button>
        ))}
      </div>

      {/* Título del filtro por origen */}
      <h2 className="text-xl font-semibold text-[#475C22] mb-2">Filtrar por Origen</h2>

      {/* Botones de filtro por origen */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedOrigin("Todos")}
          className={`px-3 py-1 rounded-full border ${
            selectedOrigin === "Todos"
              ? "bg-[#475C22] text-white"
              : "bg-white text-[#475C22] border-[#475C22]"
          }`}
        >
          Todos
        </button>

        {origins.map((origin) => (
          <button
            key={origin}
            onClick={() => setSelectedOrigin(origin)}
            className={`px-3 py-1 rounded-full border ${
              selectedOrigin === origin
                ? "bg-[#475C22] text-white"
                : "bg-white text-[#475C22] border-[#475C22]"
            }`}
          >
            {origin}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;