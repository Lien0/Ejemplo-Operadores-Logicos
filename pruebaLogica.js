const dataBase = [
  (user1 = {
    name: "Juan Pérez",
    email: "juanperez@mail.com",
    password: "user123",
  }),
  (user2 = {
    name: "Carlos Parsa",
    email: "carlosparsa@mail.com",
    password: "user123",
  }),
  (user2 = {
    name: "Karen Valdez",
    email: "karenvaldez@mail.com",
    password: "user123",
  }),
];

const prueba1 = {
  name: "Juan Pérez",
  email: "juanperez@mail.com",
  password: "user123",
};
const prueba2 = {
  name: "Carlos Parsa Rangel",
  email: "carlosparsarangel@mail.com",
  password: "user1234",
};

dataBase.forEach((el) => {
  isRegister(el, prueba1);
});
dataBase.forEach((el) => {
  search(el, prueba2);
});

function isRegister(data, user) {
  if (user.email === data.email && user.password === data.password) {
    console.log("El usuario esta registrado");
  }
}

function search(data, user) {
  if (user.email !== data.email || user.name !== data.name) {
    console.log("Usuario no encontrado");
  }
}
