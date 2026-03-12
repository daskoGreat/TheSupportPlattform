import { CoachesGridSkeleton } from './Skeletons';

export default function Loading() {
    return (
        <div className="page-content">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <div className="skeleton" style={{ height: '48px', width: '300px', margin: '0 auto 16px', borderRadius: '8px' }}></div>
                    <div className="skeleton" style={{ height: '24px', width: '500px', margin: '0 auto', borderRadius: '4px' }}></div>
                </div>
                <CoachesGridSkeleton />
            </div>
        </div>
    );
}
