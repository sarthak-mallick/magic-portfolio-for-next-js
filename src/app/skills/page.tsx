import { Column, Heading, Icon, Media, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import styles from "./skills.module.scss";

const skillsPath = "/skills";
const skillsTitle = "Technical Skills";
const skillsDescription = `Technical skills and tools used by ${person.name}`;

const iconColors: Record<string, string> = {
  go: "#00ADD8",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  python: "#3776AB",
  java: "#ED8B00",
  cplusplus: "#00599C",
  bash: "#4EAA25",
  nodejs: "#339933",
  react: "#61DAFB",
  nextjs: "#111111",
  graphql: "#E10098",
  springboot: "#6DB33F",
  kafka: "#231F20",
  rabbitmq: "#FF6600",
  mongodb: "#47A248",
  redis: "#DC382D",
  postgresql: "#336791",
  mysql: "#4479A1",
  elasticsearch: "#005571",
  aws: "#FF9900",
  gcp: "#4285F4",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  terraform: "#844FBA",
  jenkins: "#D24939",
  githubActions: "#2088FF",
  linux: "#FCC624",
  git: "#F05032",
  apachespark: "#E25A1C",
};

export async function generateMetadata() {
  return Meta.generate({
    title: skillsTitle,
    description: skillsDescription,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skillsTitle)}`,
    path: skillsPath,
  });
}

export default function SkillsPage() {
  return (
    <Column maxWidth="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={skillsTitle}
        description={skillsDescription}
        path={skillsPath}
        image={`/api/og/generate?title=${encodeURIComponent(skillsTitle)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        Technical Skills
      </Heading>
      <Row fillWidth horizontal="center">
        <Column fillWidth maxWidth={64} gap="l">
          {about.technical.skills.map((skill, index) => (
            <Column key={`${skill.title}-${index}`} fillWidth gap="4" className={styles.card}>
              <Text id={skill.title} variant="heading-strong-l">
                {skill.title}
              </Text>
              {skill.tags && skill.tags.some((tag) => tag.icon) && (
                <Row wrap gap="8" paddingTop="8">
                  {skill.tags
                    .filter((tag) => tag.icon)
                    .map((tag, tagIndex) => {
                      const iconName = tag.icon as string;
                      return (
                        <Row
                          key={`${skill.title}-${tagIndex}`}
                          border="neutral-alpha-weak"
                          background="surface"
                          radius="m"
                          paddingX="12"
                          paddingY="8"
                          gap="8"
                          vertical="center"
                          className={styles.skillTag}
                        >
                          <Icon
                            name={iconName}
                            style={{
                              color: iconColors[iconName] || "var(--neutral-on-background-strong)",
                            }}
                          />
                          <Text variant="body-default-s">{tag.name}</Text>
                        </Row>
                      );
                    })}
                </Row>
              )}
              {skill.images && skill.images.length > 0 && (
                <Row fillWidth paddingTop="m" gap="12" wrap>
                  {skill.images.map((image, imageIndex) => (
                    <Row
                      key={imageIndex}
                      border="neutral-medium"
                      radius="m"
                      minWidth={image.width}
                      height={image.height}
                    >
                      <Media
                        enlarge
                        radius="m"
                        sizes={image.width.toString()}
                        alt={image.alt}
                        src={image.src}
                      />
                    </Row>
                  ))}
                </Row>
              )}
            </Column>
          ))}
        </Column>
      </Row>
    </Column>
  );
}
