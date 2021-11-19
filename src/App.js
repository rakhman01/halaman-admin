import { ApolloProvider } from "@apollo/client";
import "./index.css";
import client from "./graphql/configclient";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Components/Navbar";
import TableAdmin from "./Components/TableAdmin";
import Routing from "./Api/Routing/Routing";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
};

export default App;
