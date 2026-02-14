import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ResourcesList from "./Components/ResourcesList";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="antialiased text-gray-800">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Hero />
          <ResourcesList />
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
