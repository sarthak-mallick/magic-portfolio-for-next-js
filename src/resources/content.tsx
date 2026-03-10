import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sarthak",
  lastName: "Mallick",
  name: `Sarthak Mallick`,
  role: "Software Engineer",
  avatar: "/images/avatar-cropped.jpeg",
  email: "sarthakmallick444@gmail.com",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Notes on distributed systems, cloud engineering, and backend architecture.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sarthak-mallick",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/sarthak-mallick",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | ${person.role}`,
  description: `${person.name}'s portfolio focused on distributed systems, cloud infrastructure, and backend engineering.`,
  headline: <>Building reliable distributed systems for enterprise scale</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Featured</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Distributed real-time task queue
        </Text>
      </Row>
    ),
    href: "/projects/distributed-real-time-task-queue",
  },
  subline: (
    <>
      I'm Sarthak, a software engineer based in Boston. I build cloud-native backend systems
      focused on scalability, resilience, and operational visibility.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: person.name,
  description: `${person.name} is a ${person.role} based in Boston, MA.`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software engineer with four years of experience designing and deploying cloud-native SaaS
        microservices and distributed systems for enterprise clients. Led a team delivering
        scalable multi-tenant applications and event-driven architectures.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SAP Labs",
        timeframe: "Jan 2023 - Apr 2024",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Managed a 12-member team as technical co-lead for an enterprise supply chain solution
            within a 150-member cross-functional organization. Delivered 5 major and 15+ minor
            releases while defining sprint backlogs with architects and product owners.
          </>,
          <>
            Developed a cloud-native multi-tenant microservice application in Node.js serving
            enterprise clients with configurable business logic, ACID transaction handling, and
            OData RESTful APIs to handle 1M+ service and DB operations daily.
          </>,
          <>
            Engineered event-driven system architecture with AMQP and message broker handling 50K+
            asynchronous events daily. Implemented guaranteed delivery and retry mechanisms to
            reduce system coupling and improve fault tolerance.
          </>,
          <>
            Conducted 15+ interviews for hiring and mentored recruits on tech ramp-up, code reviews,
            and Agile SDLC practices.
          </>,
        ],
        technologies: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Kafka", icon: "kafka" },
          { name: "RabbitMQ", icon: "rabbitmq" },
          { name: "AWS", icon: "aws" },
          { name: "Jenkins", icon: "jenkins" },
        ],
        images: [],
      },
      {
        company: "SAP Labs",
        timeframe: "Jan 2021 - Dec 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Architected 3NF normalized schema modeling 30+ entities using CAP by leveraging CDS
            associations and compositions with referential integrity constraints.
          </>,
          <>
            Reduced response latency by 85% by batching queries and refactoring the data access
            layer to consolidate entity fetches.
          </>,
          <>
            Set up CI/CD pipeline in Jenkins with containerization, unit and integration testing,
            version control, and deployment triggers.
          </>,
          <>
            Built change data capture framework tracking field-level mutations to trigger 50K+
            downstream event notifications daily.
          </>,
          <>
            Instrumented Elasticsearch and Kibana logging with correlation ID-based distributed
            request tracing across services.
          </>,
          <>
            Delivered 4 week-long workshops with lectures and hands-on labs for 40+ developers on
            SAP BTP, Node.js, and JDBC.
          </>,
        ],
        technologies: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Docker", icon: "docker" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "Elasticsearch", icon: "elasticsearch" },
        ],
        images: [],
      },
      {
        company: "SAP Labs",
        timeframe: "Jul 2020 - Dec 2020",
        role: "Associate Software Engineer",
        achievements: [
          <>
            Built full-stack features for transportation planning application with SAPUI5 frontend,
            Node.js backend, and HANA DB.
          </>,
          <>
            Redesigned architecture by implementing a unified data model to streamline processes
            and improve data consistency.
          </>,
          <>
            Eliminated 95% of calls to authentication service across all API requests by caching
            OAuth tokens in node-cache.
          </>,
        ],
        technologies: [
          { name: "Node.js", icon: "nodejs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Northeastern University",
        description: (
          <>
            M.S. in Computer Software Engineering (Sep 2024 - Apr 2026). Focused on distributed
            systems, cloud computing, and enterprise software design.
          </>
        ),
      },
      {
        name: "Indian Institute of Technology Bombay",
        description: <>B.Tech in Computer Science and Engineering (Jul 2016 - May 2020).</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming",
        description: (
          <>
            Java, Python, JavaScript, TypeScript, C/C++, SQL, NoSQL, Bash, and Go/Golang.
          </>
        ),
        tags: [
          {
            name: "Go",
            icon: "go",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "Bash",
            icon: "bash",
          },
        ],
        images: [],
      },
      {
        title: "Web & APIs",
        description: (
          <>Node.js, Spring Boot, React, GraphQL, WebSocket, gRPC, and AJAX.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
          {
            name: "Spring Boot",
            icon: "springboot",
          },
        ],
        images: [],
      },
      {
        title: "Data & Messaging",
        description: (
          <>PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ, MySQL, Oracle DB, and Elasticsearch.</>
        ),
        tags: [
          {
            name: "Kafka",
            icon: "kafka",
          },
          {
            name: "RabbitMQ",
            icon: "rabbitmq",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Redis",
            icon: "redis",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Elasticsearch",
            icon: "elasticsearch",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            AWS, GCP, Azure, Docker, Kubernetes, Terraform, Packer, Jenkins, and GitHub Actions.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "GCP",
            icon: "gcp",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Terraform",
            icon: "terraform",
          },
          {
            name: "Jenkins",
            icon: "jenkins",
          },
          {
            name: "GitHub Actions",
            icon: "githubActions",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: (
          <>
            Linux, UNIX, Git, Apache Spark, MATLAB, Android Studio, Flutter, Claude, and Codex.
          </>
        ),
        tags: [
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Apache Spark",
            icon: "apachespark",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about distributed systems and software engineering",
  description: `Read notes and implementation deep-dives from ${person.name}`,
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: "Projects",
  description: `Cloud and distributed systems projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
