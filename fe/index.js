const URL = "http://localhost:3000";

const getAllServersBE = async () => {
  const response = await fetch(`${URL}/api/servers/`);
  return await response.json();
};

const createServerBE = async (server) => {
  const response = await fetch(`${URL}/api/servers/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(server),
  });
  return await response.json();
};

const deleteServerBE = async (id) => {
  await fetch(`${URL}/api/servers/${id}`, {
    method: "DELETE",
  });
};
