import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Card from "./components/Card.tsx";
import Welcome from "./components/Welcome.tsx";

function App() {

  return (
      <>
          <Header />
          <main>
          <Welcome/>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
          </div>
          </main>
          <Footer />
      </>
  )
}

export default App
