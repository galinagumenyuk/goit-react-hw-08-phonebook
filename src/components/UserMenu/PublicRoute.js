import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../redux/authSelectors";

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldREdirect = isLoggedIn && restricted;
  if (shouldREdirect) {
    return <Navigate to="/" />;
  }

  return children;
}
