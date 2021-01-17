import tokenService from "../services/tokenService";
const BASE_URL = "/api/playlists/";

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

export function create(playlist) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(playlist),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function update(playlist) {
  return fetch(
    `${BASE_URL}/${playlist._id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(playlist),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
