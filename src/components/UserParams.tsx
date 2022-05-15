import { useParams } from "react-router";

const UserParams = () => {
  const userParams = useParams<{ userId: string }>();
  return <div>User Parameter : {userParams.userId}</div>;
};

export default UserParams;