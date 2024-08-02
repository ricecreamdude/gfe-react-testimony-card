

import Image from "next/image";
import './Card.styles.css'
import { usePathname } from 'next/navigation'

export interface ICardData {
    name: string;
    handle: string;
    text: string;
} 

export interface CardProps {
    data: ICardData;
}

export function Card(input: CardProps) { 

    const pathname = usePathname();

    return(
        <div className="card-container">
            <div style={{display: "flex"}} className="card-header">
                <div className="card-image-container">
                    <Image 
                        src={`/gfe-react-testimony-card/profile-thumbnail.png`}
                        alt="profile image"
                        width={48}
                        height={48}
                    />
                </div>
                <div>
                    <h6 className="card-name">{input.data.name}</h6>
                    <p className="card-handle">{input.data.handle}</p>
                </div>
            </div>
            <p>{input.data.text}</p>
        </div>
    );
  
  } 