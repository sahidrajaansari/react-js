import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const { user } = useContext(UserContext);
    if (!user) {
      return <h2 className="text-rose-700 text-2xl font-bold">Please login</h2>;
    }
    return (
      <div>
        <h2 className="text-rose-700 text-2xl font-bold">Welcome {user.name}</h2>
      </div>
    );
//   return (
//     <div>
//       <h2 className="text-rose-700 text-2xl font-bold">Welcome</h2>
//     </div>
//   );
}

export default Login;
