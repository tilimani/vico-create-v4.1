import React, { Component } from "react";

const CreateContext = React.createContext();

const HouseType = {
  shared: "shared",
  private: "private",
  studio: "studio"
};

class CreateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: {
        id: 1,
        name: "VICO R",
        type: HouseType.studio,
        rooms: [{}, {}, {}]
      },
      createStep: 0
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { children } = this.props;
    return (
      <CreateContext.Provider
        value={{
          ...this.state,
          changeState: this.changeState
        }}
      >
        {children}
      </CreateContext.Provider>
    );
  }
}

const CreateConsumer = CreateContext.Consumer;

export { CreateContext, CreateProvider, CreateConsumer };
