// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { getCookie } from "../utils/CookieUtil";

// const PrivateRoute = (props) => {
//   const { component: Component, ...rest } = props;

//   return (
//     <Route
//       {...rest}
//       render={(routeProps) =>
//         getCookie("code") && getCookie("authenticated") ? (
//           <Component {...routeProps} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: routeProps.location } }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
