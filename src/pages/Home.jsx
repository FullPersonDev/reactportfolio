export default function Home() {
    return (
        <main>
        <section className="subtitle">The best way to tackle a big problem is by breaking it down into smaller pieces.</section>
        <section id="aboutme" class="main-sections">
            <h2>About Me</h2>
            <hr />
            <div className="content">
                <p>
                    I've always been fasinated by technology and the great things we can build with it.  I went to school for business management and completed bachelor's and master's degree.
                    Going into my business career I quickly saw how having better data and systems were going to give us advantages over the competition.  I started going into systems modification projects more and more throughout my career.
                </p>
                <p>
                    I went into full time systems analysts roles, obtained certications in these system along with tools like "MS Excel Expert", "Power BI", "SQL". Recently completing a 6 month Coding Bootcamp at the University of Minnesota.
                    I've been learning all about software development.  How to use tools like Visiual Code Studio, Git, GitHub.  How to program in HTML, CSS, JavaScript, SQL. I'm looking forward to bringing my skills to your company.
                </p>
            </div>
        </section>
        <section id="work" className="main-sections">
            <h2>Work</h2>
            <hr />
            <div className="content">
                <div className="cards-layout">
                    <a className="card-child" href="https://fullpersondev.github.io/gamerps/">
                        <div className="cards"><p>Rock, Paper, Scissors</p></div>
                    </a>
                    <a className="card-child" href="https://fullpersondev.github.io/password_generator/">
                        <div className="cards"><p>Password Generator</p></div>
                    </a>
                    <a className="card-child" href="https://fullpersondev.github.io/module1_miniproject/">
                        <div className="cards"><p>Data Solutions</p></div>
                    </a>
                    <a className="card-child" href="https://fullpersondev.github.io/m1/">
                        <div className="cards"><p>Heriseon</p></div>
                    </a>
                    <a className="card-child" href="https://www.google.com">
                        <div className="cards"><p>Project Placeholder</p></div>
                    </a>
                </div>
            </div>
        </section>
        <section id="contactme" className="main-sections">
            <h2>Contact Me</h2>
            <hr />
            <nav className="content">
                <ul>
                    <li><a href="#">(612) 555-5555</a></li>
                    <li><a href="mailto:myemailaddress@gmail.com">myemailaddress@gmail.com</a></li>
                    <li><a href="https://github.com/FullPersonDev">GitHub Profile</a></li>
                </ul>
            </nav>
        </section>
    </main>
    );
}