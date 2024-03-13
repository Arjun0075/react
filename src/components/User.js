import React from "react";
import data from "../../utils/data";

// const User = ({name, age}) => {
//     // console.log(props)
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <p>Linked In</p>
//     </div>
//   );
// };

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       info : {
            name : "Arjun"
       }
    };
    console.log("Constructer")
    // console.log(this.state.info)
  }

  async componentDidMount(){
    const response = await fetch("https://api.github.com/users/Arjun0075")
    const data = await response.json()

    // console.log(data)

    this.setState(
        {
            info : data
        }
    )
    // console.log(this.state.info)
  }
  componentDidUpdate() {
    console.log("Component Did update")
  }


  render() {
    console.log(this.state.info)
    const {name, avatar_url} = this.state.info
    return (
      <div>
        <img src={avatar_url} />
        <h1>{name}</h1>
        <p>{this.props.age}</p>
        <p>Linked In</p>
      </div>
    );
  }
}

export default User;
