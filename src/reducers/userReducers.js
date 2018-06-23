let id = 0;

class UserReducers {
  handleUser = (state = [], action) => {
    id++;
    switch (action.type) {
      case "ADD_USER":
        return state.concat({ ...action.user, id: id });
        break;
      case "DELETE_USER":
        return state.filter(user => {
          return user.id !== action.id;
        });
        break;
      default:
        return state;
    }
  };
}

export default new UserReducers();
