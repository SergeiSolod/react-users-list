import { FC } from "react";
import "./assets/scss/style.scss";
import "./kit/variables.scss";
import { Providers } from "./store/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./modules/UserList/UserListPage";

const App: FC = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
};

export default App;
