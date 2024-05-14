const Card = ({name, date, poster}) => {
    return (
        <a href="#" className="film-card">
            <img className="film-poster" src={poster} alt={name}/>
            <div className="card-body">
                <h4 className="film-name">{name}</h4>
            </div>
            <span className="film-date">Год выпуска: {date}</span>
        </a>
    );
};

const cards = (
    <div className="film-cards">
        <Card name="Марсианин" date="2015" poster="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2d2f163b-8f23-4aa2-bcf5-13b7957084c4/1920x" />
        <Card name="Пираты Карибского моря: Проклятие Черной Жемчужины" date="2003" poster="https://www.timeout.ru/wp-content/uploads/kpposters/4374.jpg" />
        <Card name="Темный рыцарь" date="2008" poster="https://www.kinogallery.com/images/the-dark-knight/kinogallery.com-the-dark-knight-14048.jpg" />
    </div>
);

ReactDOM.render(cards, document.getElementById('app'));