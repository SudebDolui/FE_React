import React from "react";
import { Route, Routes } from "react-router-dom";
// import { About } from "./Components/About";
import { Admin } from "./Components/Admin";
import { AuthProvider } from "./Components/Auth";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar";
import { NewProducts } from "./Components/NewProducts";
import { NoMatch } from "./Components/NoMatch";
import { OrderSummary } from "./Components/OrderSummary";
import { Products } from "./Components/Products";
import { Profile } from "./Components/Profile";
import { RequireAuth } from "./Components/RequireAuth";
import { UserDetails } from "./Components/UserDetails";
import { Users } from "./Components/Users";

const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Page Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        {/* <Route path="users" element={<Users />} />
        <Route path="users/:userid" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} /> */}
        {/* For Child Components Rendering. */}
        <Route path="users" element={<Users />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              {" "}
              <Profile />{" "}
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
