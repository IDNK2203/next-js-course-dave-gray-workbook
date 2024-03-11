import UserPost from "@/components/UserPost";
import { getUserData, getUserPostData } from "@/lib/users";
import { User, userPost } from "@/types";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

import { Metadata } from "next";

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: User = await getUserData(userId);

  return {
    title: userData.name,
    description: `This page belongs to ${userData.name} `,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: User = await getUserData(userId);
  const userPostData: Promise<userPost[]> = getUserPostData(userId);

  return (
    <main>
      <h2>{userData.name}</h2>
      <br />
      <Suspense fallback={<h2> Loading ....</h2>}>
        <UserPost userPostData_p={userPostData}></UserPost>
      </Suspense>
    </main>
  );
}
