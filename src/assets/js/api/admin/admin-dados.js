const adminApi = {};

function convertHotelApiDetailToAdmin(adminDetail) {
  // eslint-disable-next-line no-undef
  const admin = new Admin();
  admin.id = adminDetail.id;
  admin.nome = adminDetail.nome;
  admin.rua = adminDetail.rua;
  admin.email = adminDetail.email;
  admin.celular = adminDetail.celular;
  admin.hotelNome = adminDetail.hotelNome;

  return admin;
}

adminApi.getAdminDetail = (admin) =>
  fetch(admin.url)
    .then((response) => response.json())
    .then(convertHotelApiDetailToAdmin);

adminApi.getAdmins = (offset = 0, limit = 10) => {
  const url = `https://localhost:8000/admin?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((admins) => admins.map(adminApi.getAdminDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((adminDetail) => adminDetail);
};
