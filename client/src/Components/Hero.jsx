export default function Hero({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  setShowModal,
}) {
  const types = ["all", "pdf", "image", "link", "youtube"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">
      <h1 className="text-2xl font-bold mb-4">
        Search & Filter Resources
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Type Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                selectedType === type
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-50 text-gray-700 border-gray-200"
              }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Add Resource Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        + Add Resource
      </button>
    </div>
  );
}
