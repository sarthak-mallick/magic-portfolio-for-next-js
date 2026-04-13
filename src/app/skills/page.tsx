import { Column, Heading, Icon, Media, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import styles from "./skills.module.scss";

const skillsPath = "/skills";
const skillsTitle = "Technical Skills";
const skillsDescription = `Technical skills and tools used by ${person.name}`;

const iconColors: Record<string, { light: string; dark: string }> = {
  java:          { light: "#ED8B00", dark: "#ED8B00" },
  python:        { light: "#3776AB", dark: "#4B8BBE" },
  javascript:    { light: "#B8A200", dark: "#F7DF1E" },
  typescript:    { light: "#3178C6", dark: "#3178C6" },
  cplusplus:     { light: "#00599C", dark: "#659AD2" },
  bash:          { light: "#3D8A1E", dark: "#4EAA25" },
  go:            { light: "#00ADD8", dark: "#00ADD8" },
  nodejs:        { light: "#339933", dark: "#5FA04E" },
  springboot:    { light: "#6DB33F", dark: "#6DB33F" },
  react:         { light: "#087EA4", dark: "#61DAFB" },
  graphql:       { light: "#E10098", dark: "#E10098" },
  html5:         { light: "#E34F26", dark: "#E34F26" },
  css3:          { light: "#1572B6", dark: "#1572B6" },
  nextjs:        { light: "#111111", dark: "#EEEEEE" },
  postgresql:    { light: "#336791", dark: "#5E9BCF" },
  mongodb:       { light: "#47A248", dark: "#47A248" },
  mysql:         { light: "#4479A1", dark: "#5B99C7" },
  redis:         { light: "#DC382D", dark: "#DC382D" },
  kafka:         { light: "#231F20", dark: "#DEDEDE" },
  rabbitmq:      { light: "#FF6600", dark: "#FF6600" },
  aws:           { light: "#CC7A00", dark: "#FF9900" },
  linux:         { light: "#B88E00", dark: "#FCC624" },
  git:           { light: "#F05032", dark: "#F05032" },
  docker:        { light: "#2496ED", dark: "#2496ED" },
  kubernetes:    { light: "#326CE5", dark: "#326CE5" },
  terraform:     { light: "#844FBA", dark: "#844FBA" },
  githubActions: { light: "#2088FF", dark: "#2088FF" },
  jenkins:       { light: "#D24939", dark: "#D24939" },
  vercel:        { light: "#111111", dark: "#EEEEEE" },
  langchain:     { light: "#1C3C3C", dark: "#3FB27F" },
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
                      const colors = iconColors[iconName];
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
                          style={{
                            "--icon-color-light": colors?.light || "var(--neutral-on-background-strong)",
                            "--icon-color-dark": colors?.dark || "var(--neutral-on-background-strong)",
                          } as React.CSSProperties}
                        >
                          <Icon
                            name={iconName}
                            className={styles.skillIcon}
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
