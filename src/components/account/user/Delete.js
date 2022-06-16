// import { useEffect, useState } from "react";
// import { useRequest } from "../../../lib/hooks/useRequest";

// function Delete() {
//   const sendRequest = useRequest();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     sendRequest(
//       `${process.env.REACT_APP_API_URL}/posts`,
//       {},
//       {},
//       {
//         auth: true,
//       },
//       "DELETE"
//     ).then((response) => {
//       console.log(response);
//       if (response.success) {
//         setPosts(response.data);
//       }
//     });
//   }, [""]);

//   return (
//     <div>
//       <button onClick={posts}>Delete</button>&nbsp;
//       <button>Edit</button>
//     </div>
//   );
// }

// export default Delete;
