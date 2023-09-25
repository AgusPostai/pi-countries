import Card from './Card';

const Detail = ({ countries, onClose }) => {
    return (
        <div>
            {
                countries.map(({ id, name, difficulty, duration, season, }) => {
                    return <Card
                        id={id}
                        key={id}
                        name={name}
                        difficulty={difficulty}
                        duration={duration}
                        season={season}
                        onClose={onClose}
                    />
                })
            }
        </div>
    )
};

export default Detail;