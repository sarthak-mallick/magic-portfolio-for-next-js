import { Column, Heading, Media, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";

const skillsPath = "/skills";
const skillsTitle = "Technical Skills";
const skillsDescription = `Technical skills and tools used by ${person.name}`;

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
    <Column maxWidth="l" paddingTop="24">
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
        <Column fillWidth maxWidth={48} gap="l">
          {about.technical.skills.map((skill, index) => (
            <Column key={`${skill.title}-${index}`} fillWidth gap="4">
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
