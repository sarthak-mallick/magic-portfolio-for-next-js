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
  title: string;
  content: string;
  description: string;
  projectIcon?: string;
  projectSkills?: { name: string; icon: string }[];
  link: string;
}

const projectSkillIconColors: Record<string, string> = {
  go: "#00ADD8",
  javascript: "#F7DF1E",
  nodejs: "#339933",
  react: "#61DAFB",
  springboot: "#6DB33F",
  hibernate: "#59666C",
  kafka: "#231F20",
  rabbitmq: "#FF6600",
  redis: "#DC382D",
  mysql: "#4479A1",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  terraform: "#844FBA",
  aws: "#FF9900",
  githubActions: "#2088FF",
  java: "#ED8B00",
  tomcat: "#F8DC75",
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
  return (
    <Column fillWidth gap="m" className={styles.card}>
      {images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
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
            <Heading as="h2" wrap="balance" align="center" variant="heading-strong-xl">
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
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
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
                  >
                    <Icon
                      name={skill.icon}
                      style={{
                        color:
                          projectSkillIconColors[skill.icon] || "var(--neutral-on-background-strong)",
                      }}
                    />
                    <Text variant="label-default-s">{skill.name}</Text>
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
                  <Text variant="body-default-s">View details</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
