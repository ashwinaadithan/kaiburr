const serverTilesContainer = document.getElementById("server-tiles-container");

const toggleCreateServerModal = (show) => {
  const modal = document.getElementById("create-server-modal");
  modal.hidden = !show;
};

const handleCreateServer = async () => {
  const idInput = document.getElementById("create-server-input-id");
  const nameInput = document.getElementById("create-server-input-name");
  const languageInput = document.getElementById("create-server-input-language");
  const frameworkInput = document.getElementById(
    "create-server-input-framework"
  );

  const server = await createServerBE({
    id: idInput.value,
    name: nameInput.value,
    language: languageInput.value,
    framework: frameworkInput.value,
  });
  createServerTile(server);

  idInput.value = "";
  nameInput.value = "";
  languageInput.value = "";
  frameworkInput.value = "";
  toggleCreateServerModal(false);
};

const handleDeleteServer = async (id) => {
  await deleteServerBE(id);
  window.location.reload();
};

const createServerTile = ({ id, name, language, framework }) => {
  const serverTile = document.createElement("div");
  serverTile.id = `server-tile-${id}`;
  serverTile.innerHTML = `
        <div class="flex items-center">
            <p class="text-sm text-gray-500">
                ${id}
            </p>
            <p class="text-xl ml-4 font-semibold text-gray-900">
                ${name}
            </p>
        </div>
        <p class="mt-3 text-base text-gray-500">
            we use <b>${language}</b> as our server language and <b>${framework}</b> as our server framework.
        </p>  
        <div onclick="handleDeleteServer(${id})" class="mt-3 mr-6 text-right cursor-pointer text-base font-semibold text-red-500 hover:text-red-300">
            Delete this server
        </div>
    `;

  serverTilesContainer.appendChild(serverTile);
};

const init = async () => {
  const servers = await getAllServersBE();
  servers.forEach((server) => {
    createServerTile(server);
  });
};

init();
