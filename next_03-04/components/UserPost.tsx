import { userPost } from "@/types";

type Params = {
  userPostData_p: Promise<userPost[]>;
};

export default async function UserPost({ userPostData_p }: Params) {
  const userPostData: userPost[] = await userPostData_p;

  return (
    <article>
      {userPostData.map((post: userPost) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <br />
        </div>
      ))}
    </article>
  );
}
