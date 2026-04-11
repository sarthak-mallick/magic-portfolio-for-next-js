"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  Icon,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: React.ReactNode;
  content: string;
  description: string;
  projectIcon?: string;
  projectSkills?: { name: string; icon: string }[];
  link: string;
}

const projectSkillIconColors: Record<string, { light: string; dark: string }> = {
  go:            { light: "#00ADD8", dark: "#00ADD8" },
  javascript:    { light: "#B8A200", dark: "#F7DF1E" },
  nodejs:        { light: "#339933", dark: "#5FA04E" },
  react:         { light: "#087EA4", dark: "#61DAFB" },
  springboot:    { light: "#6DB33F", dark: "#6DB33F" },
  hibernate:     { light: "#59666C", dark: "#8A9BA8" },
  kafka:         { light: "#231F20", dark: "#DEDEDE" },
  rabbitmq:      { light: "#FF6600", dark: "#FF6600" },
  redis:         { light: "#DC382D", dark: "#DC382D" },
  mysql:         { light: "#4479A1", dark: "#5B99C7" },
  docker:        { light: "#2496ED", dark: "#2496ED" },
  kubernetes:    { light: "#326CE5", dark: "#326CE5" },
  terraform:     { light: "#844FBA", dark: "#844FBA" },
  aws:           { light: "#CC7A00", dark: "#FF9900" },
  githubActions: { light: "#2088FF", dark: "#2088FF" },
  java:          { light: "#ED8B00", dark: "#ED8B00" },
  tomcat:        { light: "#B8A200", dark: "#F8DC75" },
  typescript:    { light: "#3178C6", dark: "#3178C6" },
  langchain:     { light: "#1C3C3C", dark: "#3FB27F" },
  gemini:        { light: "#8E75B2", dark: "#A68DC9" },
  postgresql:    { light: "#336791", dark: "#5E9BCF" },
  supabase:      { light: "#2D9B63", dark: "#3FCF8E" },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  projectIcon = "document",
  projectSkills = [],
  link,
}) => {
  const imageAlt = typeof title === "string" ? title : "Project image";

  return (
    <Column fillWidth gap="m" className={styles.card}>
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: imageAlt,
          }))}
        />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="16"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5} fillWidth horizontal="center" vertical="center">
            <Heading
              as="h2"
              wrap="balance"
              align="center"
              variant="heading-strong-xl"
              onBackground="neutral-strong"
              className={styles.projectTitle}
            >
              {title}
            </Heading>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            <Row
              fitWidth
              border="neutral-alpha-weak"
              background="surface"
              radius="full"
              paddingX="8"
              paddingY="4"
              vertical="center"
            >
              <Icon name={projectIcon} onBackground="neutral-weak" />
            </Row>
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-m"
                onBackground="neutral-strong"
                className={styles.projectDescription}
              >
                {description}
              </Text>
            )}
            {projectSkills.length > 0 && (
              <Row wrap gap="8">
                {projectSkills.map((skill, index) => (
                  <Row
                    key={`${skill.name}-${index}`}
                    border="neutral-alpha-weak"
                    background="surface"
                    radius="m"
                    paddingX="8"
                    paddingY="4"
                    gap="4"
                    vertical="center"
                    className={styles.skillTag}
                    style={{
                      "--icon-color-light": projectSkillIconColors[skill.icon]?.light || "var(--neutral-on-background-strong)",
                      "--icon-color-dark": projectSkillIconColors[skill.icon]?.dark || "var(--neutral-on-background-strong)",
                    } as React.CSSProperties}
                  >
                    <Icon
                      name={skill.icon}
                      className={styles.skillIcon}
                    />
                    <Text variant="label-default-m" onBackground="neutral-strong" className={styles.skillLabel}>
                      {skill.name}
                    </Text>
                  </Row>
                ))}
              </Row>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-m" onBackground="brand-weak" className={styles.linkText}>
                    View details
                  </Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-m" onBackground="brand-weak" className={styles.linkText}>
                    View project
                  </Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
