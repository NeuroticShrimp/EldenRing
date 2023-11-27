import { useState, useEffect } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
// @ts-ignore
import fetchDataFromApi from './api';

export interface Boss {
    id: string;
    name: string;
    image: string;
    description: string,
    location: string,
    region: string,
    drops: string[],
    healthPoints: string;
}


const Bosses: React.FC = () => {
    const [bossData, setBossData] = useState<Boss | null> (null);

    useEffect(() => {
        const fetchBossData = async () => {
            try {
                const response = await fetchDataFromApi<Boss>("/bosses");
                setBossData(response.success ? response.data[0] : null);
                console.log(response)
            }
            catch (error) {
                console.log("Error fetching boss data: ", error);
            }
        }
        fetchBossData()
    }, [])
    return (
        <div>
            {bossData ? <BossCard boss={bossData} /> : <p>Loading...</p>}
        </div>
    )

}

const BossCard: React.FC<{boss: Boss}> = ({ boss }) => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Avatar.Root className="AvatarRoot">
            <Avatar.Image
                className="AvatarImage"
                src={boss.image}
                alt={boss.description}
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}> </Avatar.Fallback>
        </Avatar.Root>
        <div>
            <h2>{boss.name}</h2>
            <p>Region: {boss.region}</p>
            <p>Description: {boss.description}</p>
        </div>
    </div>
);

export default Bosses;

