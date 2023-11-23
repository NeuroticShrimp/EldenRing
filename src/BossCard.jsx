import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';
import fetchDataFromApi from './api.js';

const[id,setId] = React.useState(1);
const[boss,setBoss] = React.useState(1);
const[loading,setLoading] = React.useState(true);
const [error, setError] = React.useState(null);

React.useEffect(()=> {
    let ignore = false;
    const fetchBoss = async () => {
        setLoading(true)
        setError(null)
        const {error, response} = await fetchDataFromApi(id)
        if (ignore) {
            return
        }
        else if(error){
            setError(error.message)}
            else {
                setBoss(response)
            }
        }

    handleFetchBosses()
    return () => {
        console.log(`the cleanup function for ${id} was called`)
        ignore = true;
    }
}, [id])

const BossCard = () => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Avatar.Root className="AvatarRoot">
            <Avatar.Image
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                CT
            </Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
            <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
        </Avatar.Root>
    </div>
);

export default BossCard;

