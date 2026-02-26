import {
  Avatar,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import StaggerReveal from "@/components/about/StaggerReveal";
import styles from "@/components/about/about.module.scss";
import React from "react";

type AboutLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const organizationLogos: Record<string, AboutLogo> = {
    sap: {
      src: "/images/logos/sap.svg",
      alt: "SAP logo",
      width: 56,
      height: 30,
    },
    northeastern: {
      src: "/images/logos/northeastern.svg",
      alt: "Northeastern University logo",
      width: 36,
      height: 36,
    },
    iitBombay: {
      src: "/images/logos/iit-bombay.png",
      alt: "IIT Bombay logo",
      width: 36,
      height: 36,
    },
  };

  const getWorkLogo = (company: string) => {
    if (company.toLowerCase().includes("sap")) {
      return organizationLogos.sap;
    }
    return null;
  };

  const getInstitutionLogo = (institutionName: string) => {
    if (institutionName.includes("Northeastern")) {
      return organizationLogos.northeastern;
    }
    if (institutionName.includes("Indian Institute of Technology Bombay")) {
      return organizationLogos.iitBombay;
    }
    return null;
  };

  const socialIconColors: Record<string, string> = {
    GitHub: "#C9D1D9",
    LinkedIn: "#0A66C2",
    Email: "#EA4335",
  };

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <div className={styles.avatarInteractive}>
              <Avatar src={person.avatar} size="xl" />
            </div>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
            {about.tableOfContent.display && (
              <Column fillWidth paddingTop="16">
                <TableOfContents structure={structure} about={about} inline />
              </Column>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={56}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                        (item) =>
                          item.link && (
                            <SmartLink key={item.name} href={item.link} className={styles.socialChip}>
                              <Row gap="8" vertical="center">
                                <Icon
                                  name={item.icon}
                                  style={{
                                    color:
                                      socialIconColors[item.name] ||
                                      "var(--neutral-on-background-strong)",
                                  }}
                                />
                                <Text variant="body-default-s" className={styles.socialLabel}>
                                  {item.name}
                                </Text>
                              </Row>
                            </SmartLink>
                          ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column
              className={`${styles.contentCard} ${styles.introCard}`}
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="m"
            >
              <div className={styles.introTextReveal}>
                <div className={styles.introCopy}>{about.intro.description}</div>
              </div>
            </Column>
          )}
          {(about.work.display || about.studies.display || about.technical.display) && (
            <div className={`${styles.sectionDivider} ${styles.sectionDividerIntro}`} aria-hidden="true" />
          )}

          {about.work.display && (
            <>
              <StaggerReveal delayMs={70}>
                <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                  {about.work.title}
                </Heading>
              </StaggerReveal>
              <Column fillWidth gap="l" marginBottom="40" className={styles.timelineTrack}>
                {about.work.experiences.map((experience, index) => {
                  const companyLogo = getWorkLogo(experience.company);
                  return (
                    <StaggerReveal
                      key={`${experience.company}-${experience.role}-${index}`}
                      delayMs={140 + index * 110}
                    >
                      <Column fillWidth className={`${styles.contentCard} ${styles.timelineItem}`}>
                      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                        <Row gap="12" vertical="center">
                          {companyLogo && (
                            <span
                              className={styles.organizationLogo}
                              style={{
                                width: `${companyLogo.width}px`,
                                height: `${companyLogo.height}px`,
                              }}
                            >
                              <Media
                                src={companyLogo.src}
                                alt={companyLogo.alt}
                                sizes={`${companyLogo.width}px`}
                                className={styles.logoImage}
                              />
                            </span>
                          )}
                          <Text id={experience.role} variant="heading-strong-l">
                            {experience.role}
                          </Text>
                        </Row>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.company}
                      </Text>
                      <Text variant="label-strong-s" onBackground="neutral-weak" marginBottom="8">
                        Key Wins
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, achievementIndex: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${achievementIndex}`}
                          >
                            {achievement}
                          </Text>
                          ),
                        )}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                          {experience.images.map((image, imageIndex) => (
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
                    </StaggerReveal>
                  );
                })}
              </Column>
            </>
          )}
          {(about.studies.display || about.technical.display) && (
            <div className={styles.sectionDivider} aria-hidden="true" />
          )}

          {about.studies.display && (
            <>
              <StaggerReveal delayMs={100}>
                <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                  {about.studies.title}
                </Heading>
              </StaggerReveal>
              <Column fillWidth gap="l" marginBottom="40" className={styles.timelineTrack}>
                {about.studies.institutions.map((institution, index) => {
                  const institutionLogo = getInstitutionLogo(institution.name);
                  return (
                    <StaggerReveal
                      key={`${institution.name}-${index}`}
                      delayMs={180 + index * 110}
                    >
                      <Column fillWidth gap="4" className={`${styles.contentCard} ${styles.timelineItem}`}>
                      <Row gap="12" vertical="center">
                        {institutionLogo && (
                          <span
                            className={styles.organizationLogo}
                            style={{
                              width: `${institutionLogo.width}px`,
                              height: `${institutionLogo.height}px`,
                            }}
                          >
                            <Media
                              src={institutionLogo.src}
                              alt={institutionLogo.alt}
                              sizes={`${institutionLogo.width}px`}
                              className={styles.logoImage}
                            />
                          </span>
                        )}
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                      </Row>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                      </Column>
                    </StaggerReveal>
                  );
                })}
              </Column>
            </>
          )}
          {about.technical.display && <div className={styles.sectionDivider} aria-hidden="true" />}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4" className={styles.contentCard}>
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
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
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
