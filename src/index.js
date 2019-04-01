import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { onLogin } from "./store/auth/actions";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  login = () => {
    console.log("ankac");
    const { onLogin } = this.props;
    onLogin({ cnanc: "annc" });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this.login}>
          <Text>ABC</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(onLogin(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
