const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <nav className="header-nav">
                    <ul>
                        <li><a href="#" className="header-link">Home</a></li>
                        <li><a href="#" className="header-link active-link">Posts</a></li>
                        <li><a href="#" className="header-link">About us</a></li>
                        <li><a href="#" className="header-link">Contacts</a></li>
                        <li><a href="#" className="header-link">Category</a></li>
                        <li><a href="#" className="header-link">Policy</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h4 className="sidebar-title">Categories</h4>
            <ul className="sidebar-list">
                <li><a href="#" className="sidebar-link">Action</a></li>
                <li><a href="#" className="sidebar-link">Thriller</a></li>
                <li><a href="#" className="sidebar-link">Comedy</a></li>
                <li><a href="#" className="sidebar-link">Melodrama</a></li>
                <li><a href="#" className="sidebar-link">Drama</a></li>
                <li><a href="#" className="sidebar-link">Horror</a></li>
            </ul>
        </aside>
    );
};

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

const Cards = () => {
    return (
        <div className="film-cards">
            <Card name="Интерстеллар" date="2014" poster="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/21b646ea-752a-4d2d-9940-b36c35356b07/1920x" />
            <Card name="Пираты Карибского моря: Проклятие Черной Жемчужины" date="2003" poster="https://www.timeout.ru/wp-content/uploads/kpposters/4374.jpg" />
            <Card name="Темный рыцарь" date="2008" poster="https://www.kinogallery.com/images/the-dark-knight/kinogallery.com-the-dark-knight-14048.jpg" />
            <Card name="Престиж" date="2006" poster="https://media.senscritique.com/media/000004699876/source_big/le_prestige.jpg   " />
        </div>
    );
};

const Content = () => {
    return (
        <main className="main-content container">
            <Sidebar />
            <article className="film-post clearfix">
                <h1 className="main-title">The Martian</h1>
                <p>Lorem ipsum dolor sit amet, sapiente sed temporibus, velit vero voluptate! Architecto
                    blanditiis commodi dolore Aperiam cum dolor eius et exercitationem harum hic
                    id nulla officia praesentium libero nobis odit, quam voluptates? Accusamus exercitationem
                    fugiat hic illum molestiae. Aperiam cum dolor eius et exercitationem harum hic
                    id nulla officia praesentium nemo optio porro voluptas. Ab doloribus facilis harum laudantium
                    nisi quos.</p>
                <div className="film-image">
                    <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2d2f163b-8f23-4aa2-bcf5-13b7957084c4/1920x" alt="Марсианин"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eaque eius
                    modi nulla officia sequi Aperiam cum dolor eius et exercitationem harum hic
                    id nulla officia praesentium quibusdam quis quod repudiandae sequi suscipit tempora
                    temporibus, tenetur voluptatibus? Aperiam cum dolor eius et exercitationem harum hic
                    id nulla officia praesentium.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet commodi fugit id, nostrum
                    numquam possimus, quam quasi sapiente sed temporibus, velit vero voluptate! Architecto
                    blanditiis commodi dolore libero nobis odit, qua optio porro voluptas. Ab doloribus facilis
                    harum laudantium
                    nisi quos.</p>
                <h3 className="main-subtitle">Interesting facts</h3>
                <p>Lorem ipsum dolor sit amet, sapiente sed temporibus, velit vero voluptate! Architecto
                    blanditiis commodi dolore libero nobis odit, quam voluptates? Accusamus exercitationem
                    fugiat hic illum molestiae nemo optio porro voluptas. Ab doloribus facilis harum laudantium
                    nisi quos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eaque eius
                    modi nulla officii Aperiam cum dolor eius et exetium quibusdam quis quod repudiandae sequi suscipit
                    tempora temporibus, tenetur voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet commodi fugit id, nostrum
                    numquam possimus, quadi dolore libero nobis odit, qua optio porro voluptas. Ab doloribus facilis
                    harum laudantium
                    nisi quos.</p>
            </article>
            <div className="main-bottom">
                <h5 className="main-bottom-title">Did you like the article? you might like it as well:</h5>
                <Cards />
            </div>
        </main>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <p>©️Copyright 2024</p>
                <p>Lorem ipsum dolor sit amet. <a href="#" className="footer-link">Privacy policy</a>. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sit!</p>
            </div>
        </footer>
    );
};

const page = (
    <>
        <Header/>
        <Content/>
        <Footer/>
    </>
);

ReactDOM.render(page, document.getElementById('app'));