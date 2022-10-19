import { useQuery } from "react-query";
import { client } from "./apis";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

const PostList = () => {
  const { data: postList } = useQuery(
    "posts",
    () => client.get<Post[]>("/posts"),
    {
      suspense: true,
    }
  );

  return (
    <div>
      {postList?.data.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
};

export default PostList;
