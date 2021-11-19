import { ApolloProvider } from "@apollo/client";
import "./index.css";
import client from "./graphql/configclient";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Components/Navbar";
import TableAdmin from "./Components/TableAdmin";

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Navbar /> */}
      {/* <TableAdmin /> */}
      <Login />
      {/* <Register /> */}
    </ApolloProvider>
  );
};

export default App;
