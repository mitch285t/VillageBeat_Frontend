// const userbandsURL = "http://localhost:3000/userbands";

// class Followed extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userbands: []
//     };
//   }

//   componentDidMount() {
//     fetch(userbandsURL, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${window.localStorage.getItem("token")}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.userbands);

//         this.setState({
//           userbands: data.userbands
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.userbands.map(userband => {
//           this.props.check(userband);
//         })}
//       </div>
//     );
//   }
