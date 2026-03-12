import { auth } from '@/auth';
import SupportHub from '@/components/SupportHub';
import LandingPage from '@/components/LandingPage';

export default async function Home() {
    const session = await auth();

    if (session?.user) {
        return <SupportHub userName={session.user.name || 'User'} />;
    }

    return <LandingPage />;
}
