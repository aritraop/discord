import InitialSetUpPage from "@/components/modals/initial-modal";
import db from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from 'next/navigation'
const SetUpPage = async () => {
  const profile = await initialProfile()
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profile_id: profile.id
        }
      }
    }
  })
  if (server) return redirect(`/servers/${server.id}`)
  return (
    <InitialSetUpPage />
  );
}

export default SetUpPage;