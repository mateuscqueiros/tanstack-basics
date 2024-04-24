import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { axios } from "./lib/axios";

export function fetchUsers() {
  return axios.get("/users").then((response) => response.data.users);
}
function App() {
  const {
    data: users,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending) return <>Carregando...</>;
  if (isError) return <>Houve um erro</>;

  return (
    <>
      {users.map((user: any) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </>
  );
}

export default App;
