import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PranavKakade2710");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, email } = this.props;
    return (
      <div className="user">
        {/* <h2>Count: {count}</h2>
          <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
          } */}
        {/* }>Count Increase</button> */}
        <p>Name:{this.state.userInfo.name}</p>
        <div>
          LoggedIn User
          <UserContext.Consumer>{({loggedInUser})=>(
            <h1>{loggedInUser}</h1>
          )}
          </UserContext.Consumer>
        </div>
        <p>Email:{email}</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Food Street, Cityville, Country</p>
      </div>
    );
  }
}
export default UserClass;
