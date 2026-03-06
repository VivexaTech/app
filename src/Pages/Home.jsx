import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeCards from "../components/Home-Cards";

export default function Home() {
    return (
        <>
            <title>Home</title>
            <Header />
            <Banner />
            <HomeCards />
            <Navbar />
        </>
    )
}