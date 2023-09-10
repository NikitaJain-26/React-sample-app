import React from "react";
import { UserContext } from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "User Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "User ComponentDidMount");
  }

  componentDidUpdate(prevProps, preState) {
    if (this.state.count !== preState.count)
      console.log(this.props.name + "component did update");
    if (this.props.name !== prevProps.name)
      console.log(this.props.name + " name component did update");
  }

  componentWillUnmount() {
    console.log(this.props.name + "unmounted");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="user-card">
          <h3>Name : {name}</h3>
          <div>Location: {location}</div>
          <div>Count : {count}</div>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Add
          </button>
          <UserContext.Consumer>
            {({ userData }) => <h2>{userData}</h2>}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}
export default UserClass;
