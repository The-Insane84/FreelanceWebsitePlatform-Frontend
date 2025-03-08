import Header from "./Components/Headers/Header";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import JoinUs from "./Components/JoinUs/JoinUs";
import Freelancer from "./Components/Freelancer/Freelancer";
import PricingSection from "./Components/Pricing/Pricing";
import Qa from "./Components/QA/Qa";
import Footer from "./Components/Footer/Footer";
import JoinAsFreelancer from './Components/JoinAsFreelancer/JoinAsFreelancer';
import JoinAsCustomer from "./Components/JoinAsCustomer/JoinAsCustomer";

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Services />
                <JoinUs />
                <Freelancer />
                <PricingSection />
                <JoinAsFreelancer />
                <JoinAsCustomer />
                <Qa />
                <Footer />
            </main>
        </>
    )
}

export default App;