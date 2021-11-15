import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetUpsPage />} />
          <Route path="/new-meetup" element={<NewMeetUpPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
