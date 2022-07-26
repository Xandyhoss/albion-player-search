import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/name/:name" element={<Main />} />
      <Route path="/player/:id" element={<Main />} />
      <Route path="/event/:event" element={<Main />} />
      <Route path="*" element={<Main></Main>} />
    </Routes>
  );
}
