import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Listings from "./pages/Listings";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";
import ChatsHome from "./pages/ChatsHome";
import NotFoundPage from "./pages/NotFound";
import CreateListing from "./pages/CreateListing";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/chats/" element={<ChatsHome />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/publish" element={<CreateListing />} />
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;