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
            Delivered 5+ major releases for enterprise supply chain platform as co-lead, managing a
            12-member engineering team
          </>,
          <>
            Developed cloud-native multi-tenant microservice application in Node.js serving
            enterprise clients with configurable business logic, ACID transaction handling, and
            OData RESTful APIs to handle 1M+ service and DB operations daily
          </>,
          <>
            Engineered event-driven system architecture with AMQP and message broker handling 50K+
            asynchronous events daily, implementing guaranteed delivery and retry mechanisms for
            fault tolerance and reduced system coupling
          </>,
          <>
            Implemented role-based access control (RBAC) and feature flag framework across the
            full-stack for controlled feature rollout
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
            Architected the core data layer modeling 50+ entities in 3NF for the supply chain
            platform, serving as the shared foundation across multiple microservices and powering
            20+ business workflows
          </>,
          <>
            Engineered change data capture framework with configurable field-level mutation tracking,
            eliminating manual per-service event implementation and delivering downstream
            notifications across microservices and external systems
          </>,
          <>
            Instrumented Elasticsearch and Kibana based monitoring and distributed request tracing
            with correlation IDs across 20+ services, enabling end-to-end observability into
            inter-service communication and reducing mean time to resolution by 60%
          </>,
          <>
            Reduced response latency by 85% by batching queries and refactoring data access layer
            to consolidate entity fetches
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
            Migrated business logic from HANA stored procedures and functions to Node.js application
            layer across 30+ tables spanning 5 services, decoupling compute from the database and
            improving maintainability and testability
          </>,
          <>
            Eliminated 95% of calls to authentication service across all API requests by caching
            OAuth tokens in node-cache
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
            Java, Python, JavaScript, TypeScript, C/C++, Bash, and Go/Golang.
          </>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "Bash",
            icon: "bash",
          },
          {
            name: "Go",
            icon: "go",
          },
        ],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>Node.js, Spring Boot, React, GraphQL, HTML, CSS, and Next.js.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Spring Boot",
            icon: "springboot",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
          {
            name: "HTML",
            icon: "html5",
          },
          {
            name: "CSS",
            icon: "css3",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Databases & Messaging",
        description: (
          <>PostgreSQL, MongoDB, MySQL, Redis, Kafka, and RabbitMQ.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Redis",
            icon: "redis",
          },
          {
            name: "Kafka",
            icon: "kafka",
          },
          {
            name: "RabbitMQ",
            icon: "rabbitmq",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            AWS, Linux, Git, Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, and Vercel.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Git",
            icon: "git",
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
            name: "GitHub Actions",
            icon: "githubActions",
          },
          {
            name: "Jenkins",
            icon: "jenkins",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
        ],
        images: [],
      },
      {
        title: "AI Tools & Frameworks",
        description: (
          <>RAG, Agentic AI, Vector Databases, LangChain, and LangGraph.</>
        ),
        tags: [
          {
            name: "LangChain",
            icon: "langchain",
          },
          {
            name: "LangGraph",
            icon: "langchain",
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
