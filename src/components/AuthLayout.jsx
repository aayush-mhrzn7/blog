import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authstatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authstatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authstatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, authstatus]);
  return loader ? <h1>Loading.... </h1> : <>{children}</>;
}
/* intially lets say authstatus is false and authenticaion true */
