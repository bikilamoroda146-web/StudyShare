import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ResourcesList from "./Components/ResourcesList";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import AddResourceModal from "./Components/AddResourceModal";
import { resources as initialResources } from "./Data/Resources";

function App() {
  const [resources, setResources] = useState(initialResources);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const filteredResources = resources.filter((res) => {
    const matchesSearch = res.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "all" || res.type === selectedType;

    return matchesSearch && matchesType;
  });

  const addResource = (newResource) => {
    setResources((prev) => [newResource, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Hero
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            setShowModal={setShowModal}
          />

          <ResourcesList resources={filteredResources} />
        </div>

        <Sidebar />
      </main>

      <Footer />

      {showModal && (
        <AddResourceModal
          setShowModal={setShowModal}
          addResource={addResource}
        />
      )}
    </div>
  );
}

export default App;
