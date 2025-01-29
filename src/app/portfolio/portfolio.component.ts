import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CardComponent } from "../card/card.component";
import { Card } from "../_models/card";
import { Tag } from "../_models/tags";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.css",
  providers: [],
})
export class PortfolioComponent {
  projects: Card[] = [
    {
      id: 1,
      name: "Make My Resume",
      summary:
        "This is a Angular-based REST API using FastAPI and PostgreSQL for managing casino transactions and player operations.",
      description:
        "a responsive web application for creating personalized resumes using Angular and NgRx for state management. Designed a dynamic resume builder with customizable templates, real-time updates, and auto-save functionality. Ensured cross-device compatibility with a visually appealing interface using HTML and CSS. Conducted thorough testing to ensure reliability and optimized performance for enhanced user engagement and scalability.",
      projectLink: "https://github.com/barbaracalderon/casino-backend",
      tags: [
        Tag.ANGULAR,
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT,
        Tag.BOOTSTRAP,
        Tag.SQL,
        Tag.RESTAPI,
      ],
      pictures: [
        "../../assets/resume1.png",
        "../../assets/resume2.png",
        "../../assets/resume3.png",
        "../../assets/resume4.png",
      ],
    },
    {
      id: 2,
      name: "Ecommerce Website",
      summary:
        "Developed a scalable and user-friendly full-stack e-commerce platform with seller and customer functionalities using Angular, Java, REST APIs, and MySQL.",
      description:
        "Developed a full-stack e-commerce platform using Angular for the frontend, Java with REST APIs for the backend, and MySQL for database management. Designed features for sellers, including product listing and inventory management, and customer functionalities like product browsing and secure checkout. Implemented role-based authentication, ensured responsive design, and optimized backend performance for scalability. Conducted thorough testing to deliver a reliable and user-friendly experience.",
      projectLink: "https://github.com/praveenkaniki/Ecommerce",
      tags: [
        Tag.ANGULAR,
        Tag.JAVA,
        Tag.SPRINGBOOT,
        Tag.HIBERNATE,
        Tag.JPA,
        Tag.JUNIT,
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT,
        Tag.BOOTSTRAP,
        Tag.SQL,
        Tag.RESTAPI,
      ],
      pictures: [
        "../../assets/E1.png",
        "../../assets/E2.png",
        "../../assets/E3.png",
        "../../assets/E4.png",
        "../../assets/E5.png",
        "../../assets/E6.png",
      ],
    },
    {
      id: 3,
      name: "Weather Forecast",
      summary:
        "Developed a weather forecast website using Angular and REST API calls, providing real-time weather updates with a user-friendly interface and responsive design for seamless cross-device accessibility.",
      description:
        "Developed a weather forecast website using Angular for the frontend and REST API calls for real-time data retrieval. Designed a user-friendly and responsive interface to ensure seamless accessibility across devices. Integrated features to display accurate weather updates, including temperature, humidity, and forecasts. Ensured optimal performance and reliability through thorough testing and efficient API handling.",
      projectLink: "https://github.com/barbaracalderon/teamtrack",
      tags: [
        Tag.ANGULAR,
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT,
        Tag.BOOTSTRAP,
        Tag.SQL,
        Tag.RESTAPI,
      ],
      pictures: [
        "../../assets/weather.png",
        "../../assets/weather1.png",
        "../../assets/weather2.png",
      ],
    },
    {
      id: 4,
      name: "Angular Portfolio App",
      summary:
        "A responsive and dynamic portfolio website designed and developed by Praveen Kaniki.",
      description:
        "This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.",
      projectLink: "https://github.com/barbaracalderon/angular-portfolio-app",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: [
        "../../assets/PF1.png",
        "../../assets/pf2.png",
        "../../assets/pf3.png",
        "../../assets/pf4.png",
        "../../assets/pf5.png",
      ],
    },
    {
      id: 5,
      name: "Rotten Potatos-Movie Review",
      summary:
        "Rotten Potatos-Movie Review is a responsive movie review page using Angular, allowing users to view ratings and comments for movies. Ensured a user-friendly and dynamic interface for seamless access across devices.",
      description:
        "Developed a responsive movie review platform using Angular, enabling users to view ratings and comments for movies. Designed a clean and intuitive interface for seamless user experience. Integrated features to display reviews dynamically and ensure responsive design across devices. Focused on performance and usability for enhanced user engagement.",
      projectLink: "https://github.com/praveenkaniki/Angular_Rotten_Potatos",
      tags: [
        Tag.ANGULAR,
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT,
        Tag.BOOTSTRAP,
        Tag.SQL,
        Tag.RESTAPI,
        Tag.SQL,
      ],
      pictures: [
        "../../assets/rp1.png",
        "../../assets/rp2.png",
        "../../assets/rp3.png",
      ],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("PK | Portfolio");
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
