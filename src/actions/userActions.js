import Store from "../store.js";

class Users {
  addUser = user => {
    Store.dispatch({
      type: "ADD_USER",
      user: { ...user }
    });
  };

  deleteUser = id => {
    Store.dispatch({
      type: "DELETE_USER",
      id: id
    });
  };
}

export default new Users();
