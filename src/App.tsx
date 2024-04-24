import "./App.css";
import { useCreateUser } from "./features/users/api/create-user";
import { useUsers } from "./features/users/api/fetch-users";

function App() {
  // Queries
  const { data: users, isPending, isError } = useUsers();
  const mutation = useCreateUser();

  if (isPending) return <>Carregando...</>;
  if (isError) return <>Houve um erro</>;

  return (
    <>
      <button
        disabled={mutation.isPending}
        onClick={() => {
          mutation.mutate({ firstName: "Mateus", lastName: "Queirós" });
        }}
      >
        {mutation.isPending && "Trabalhando nisso..."}
        {mutation.isError && "Resetar"}
        {!mutation.isPending && !mutation.isError && "Add user"}
      </button>
      {isError && (
        <button onClick={() => isError && mutation.reset()}>
          Resetar erro
        </button>
      )}
      {mutation.isError && (
        <i style={{ display: "block" }}>
          Houve um erro: {mutation.error.message}
        </i>
      )}
      {users && users.map((user: any) => <p key={user.id}>{user.firstName}</p>)}
    </>
  );
}

export default App;
