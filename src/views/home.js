import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  CollectionItem,
  Collection
} from "react-materialize";

import UsersActions from "../actions/userActions.js";

class Home extends Component {
  addUser = UsersActions.addUser;
  deleteUser = UsersActions.deleteUser;

  render() {
    const { Users } = this.props;
    return (
      <Row>
        <Col offset={"m3"} s={6} m={6}>
          <h1>Redux Todo</h1>
          <input
            style={{ textAlign: "center" }}
            ref={node => {
              this.name = node;
            }}
          />
          <Button
            onClick={() => {
              this.addUser({ name: this.name.value });
            }}
          >
            ADD
          </Button>
          <Collection>
            {Users.map(user => {
              return (
                <CollectionItem key={user.id}>
                  <h3>{user.name}</h3>
                  <Button
                    className="red"
                    onClick={() => {
                      this.deleteUser(user.id);
                    }}
                  >
                    DELETE
                  </Button>
                </CollectionItem>
              );
            })}
          </Collection>
        </Col>
      </Row>
    );
  }
}

export default Home;
