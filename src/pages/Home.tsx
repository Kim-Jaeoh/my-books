import { Navigate } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../hooks/useToken";

export default function Home() {
  const token = useToken();

  if (token === null) {
    // return <Redirect to="/" />;
    return <Navigate to="/signin" />;
  }

  return <ListContainer />;
}
