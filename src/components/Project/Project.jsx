
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/13d5d72a-92d5-4235-a21f-74eb3918a439.png?ixlib=rb-1.0.0&ch=Width%2CDPR&auto=format',
            linkSite: 'https://coschedule.netlify.app/',
            linkGithub: 'https://github.com/pankajnandi/Unit2Project',
            linkBlog:
                'https://medium.com/@pkandpal28/became-a-developer-2f710f0f8572',
            title: 'CoSchedule',
            desc: 'CoSchedule.com is a website that helps marketers get organized.',
            img:'coschedule.png',
        },
        {
            id: '2',
            icon: 'https://www.pluralsight.com/content/dam/pluralsight/images/logo/ps_logo_f-03.png',
            linkSite: 'https://plurlsightclone.netlify.app/src/frontend/homepage/index.html',
            linkGithub: 'https://github.com/khageswar9/Pluralsight-clone',
            linkBlog:
                'https://medium.com/@abhijeetchaudhari110/pluralsight-clone-f12f5a3e042e',
            title: 'Pluralsight',
            desc: 'Pluralsight is an online learning and workforce development platform that helps adjust to changing technology.',
            img: 'pluralsight.png',
        },
        {
            id: '3',
            icon: 'https://www.pluralsight.com/content/dam/pluralsight/images/logo/ps_logo_f-03.png',
            linkSite: 'https://plurlsightclone.netlify.app/',
            linkGithub: 'https://github.com/khageswar9/Clone-Of-Plurals.com',
            linkBlog:
                'https://medium.com/@rkvirajgupta/cloning-of-a-website-pluralsight-a6116af1f108',
            title: 'Pluralsight',
            desc: 'Pluralsight is an online learning and workforce development platform that helps adjust to changing technology.',
            img: 'pluralsight.png',
        },
        {
            id: '1',
            icon: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/13d5d72a-92d5-4235-a21f-74eb3918a439.png?ixlib=rb-1.0.0&ch=Width%2CDPR&auto=format',
            linkSite: 'https://coschedule.netlify.app/',
            linkGithub: 'https://github.com/pankajnandi/Unit2Project',
            linkBlog:
                'https://medium.com/@pkandpal28/became-a-developer-2f710f0f8572',
            title: 'CoSchedule',
            desc: 'CoSchedule.com is a website that helps marketers get organized.',
            img: 'coschedule.png',
        },
        {
            id: '2',
            icon: 'https://www.pluralsight.com/content/dam/pluralsight/images/logo/ps_logo_f-03.png',
            linkSite: 'https://plurlsightclone.netlify.app/src/frontend/homepage/index.html',
            linkGithub: 'https://github.com/khageswar9/Pluralsight-clone',
            linkBlog:
                'https://medium.com/@abhijeetchaudhari110/pluralsight-clone-f12f5a3e042e',
            title: 'Pluralsight',
            desc: 'Pluralsight is an online learning and workforce development platform that helps adjust to changing technology.',
            img: 'pluralsight.png',
        },
        {
            id: '3',
            icon: 'https://www.pluralsight.com/content/dam/pluralsight/images/logo/ps_logo_f-03.png',
            linkSite: 'https://plurlsightclone.netlify.app/',
            linkGithub: 'https://github.com/khageswar9/Clone-Of-Plurals.com',
            linkBlog:
                'https://medium.com/@rkvirajgupta/cloning-of-a-website-pluralsight-a6116af1f108',
            title: 'Pluralsight',
            desc: 'Pluralsight is an online learning and workforce development platform that helps adjust to changing technology.',
            img: 'pluralsight.png',
        },
        
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
