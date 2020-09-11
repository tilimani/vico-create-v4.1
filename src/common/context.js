import React, { Component } from "react";

const CreateContext = React.createContext({
  state: {},
  changeState: () => {}
});

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
        type: HouseType.shared,
        rooms: [{}, {}, {}],
        is_manager_in_house: true,
        capacity: 1,
        rooms_quantity: 1,
        baths_quantity: 1
      },
      createStep: 0,
      mobileProgressIndicator: 0
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
        // value={this.state.createStep}
      >
        {children}
      </CreateContext.Provider>
    );
  }
}

const CreateConsumer = CreateContext.Consumer;

export { CreateContext, CreateProvider, CreateConsumer };
