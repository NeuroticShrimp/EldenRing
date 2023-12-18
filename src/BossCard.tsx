import { useState, useEffect } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import "./App.css";
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
    const [bossData, setBossData] = useState<Boss[] | null>(null);

    useEffect(() => {
        const fetchBossData = async () => {
            try {
                const response = await fetchDataFromApi<Boss[]>("/bosses");
                setBossData(response.success ? response.data : null);
            }
            catch (error) {
                console.log("Error fetching boss data: ", error);
            }
        }
        fetchBossData()
    }, [])
    return (
        <div>
            {bossData ? (
                bossData.map((boss, index) => (<BossCard key={index} boss={boss} />))) 
                : <p>Loading...</p>}
        </div>
    )

}


const BossCard: React.FC<{boss: Boss}> = ({ boss }) => (
    <div className="boss-card">
        <Avatar.Root className="avatar-root">
            <Avatar.Image
                className="avatar-image"
                src={boss.image}
                alt={boss.description}
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}> </Avatar.Fallback>
        </Avatar.Root>
        <div className="boss-info">
            <h2>{boss.name}</h2>
            <p>Region: {boss.region}</p>
            <p>Location: {boss.location}</p>
            <p>Drops: {boss.drops}</p>
            <p>Health: {boss.healthPoints}</p>
        </div>
    </div>
);

export default Bosses;

