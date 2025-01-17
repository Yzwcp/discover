import { InitialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";
const SetupPage = async () => {
  //用户信息
  const profile = await InitialProfile();
  //根据用户信息去找 哪个服务器中的频道有这个人，返回一个就行
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  console.log(server);
  //如果有server就跳打开server页面
  if (server) {
    redirect(`/server/${server.id}`);
  }
  return (
    <div className="h-screen">
      <InitialModal></InitialModal>
    </div>
  );
};

export default SetupPage;
