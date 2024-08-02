import Image from "next/image";
import './Card.styles.css'

export interface ICardData {
    name: string;
    handle: string;
    text: string;
    imgUrl: string;
} 

export interface CardProps {
    data: ICardData;
}

export function Card(input: CardProps) { 

    return(
        <div className="card-container">
            <div style={{display: "flex"}} className="card-header">
                <div className="card-image-container">
                    <Image 
                        src={'/profile-thumbnail.png'}
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