import Login from "./components/Login";
import RecentLoginList from "./components/RecentLoginList";

export default function App() {
  const token = localStorage.getItem("token");

  return token ? <RecentLoginList /> : <Login />;
}
