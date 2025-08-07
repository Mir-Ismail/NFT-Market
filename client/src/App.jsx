import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Author from "./pages/Author.jsx";
import AuthorProfile from "./pages/AuthorProfile";
import EditProfile from "./pages/EditProfile";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found.jsx";
import CreateItem from "./pages/CreateItem";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LiveAuction from "./components/discover/liveAuction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./pages/ConnectWallet.jsx";

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/arrivals" element={<LiveAuction />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/author"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Author />
              </ProtectedRoute>
            }
          />
          <Route
            path="/author-profile/:id"
            element={
              <ProtectedRoute allowedRoles={["seller", "buyer", "admin"]}>
                <AuthorProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile/:id"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/createitem"
            element={
              <ProtectedRoute allowedRoles={["seller"]}>
                <CreateItem />
              </ProtectedRoute>
            }
          />
          <Route
            path="/connect-wallet"
            element={
              <ProtectedRoute allowedRoles={["seller", "buyer", "admin"]}>
                <ConnectWallet />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
