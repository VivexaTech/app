import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { HeaderTools } from "../components/Header";
import ToolsCard from "../components/ToolsCards";
import { useAuth } from "../AuthContext";
export default function Tools() {

  const { user } = useAuth();

  return (
    <>
      <title>Tools</title>

      <Navbar />

      {user ? <Header /> : <HeaderTools />}

      <ToolsCard />

    </>
  );
}