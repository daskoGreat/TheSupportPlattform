import prisma from '../src/lib/prisma';
import * as bcrypt from 'bcryptjs';

async function main() {
    const email = 'coach@example.com';
    const password = await bcrypt.hash('coach123', 10);

    const user = await prisma.user.upsert({
        where: { email },
        update: {
            role: 'COACH',
            password,
            name: 'Test Coach',
        },
        create: {
            email,
            name: 'Test Coach',
            password,
            role: 'COACH',
        },
    });

    // Create profile
    await prisma.coachProfile.upsert({
        where: { userId: user.id },
        update: {},
        create: {
            userId: user.id,
            title: 'Licensed Psychologist',
            shortIntro: 'Here to listen',
            longBio: 'I have 10 years experience helping people.',
            expertise: ['Anxiety', 'Stress'],
            languages: ['Swedish', 'English'],
            yearsOfExperience: 10,
            preferredModes: ['VIDEO', 'PHONE'],
        }
    })

    console.log('✅ Coach created:', { email: user.email, password: 'coach123' });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
