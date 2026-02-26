import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import type { ReactNode } from "react";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  const projectIconBySlug: Record<string, string> = {
    "cloud-infrastructure-devops": "globe",
    "distributed-real-time-task-queue": "rocket",
    "project-management-system": "grid",
  };
  const projectSkillsBySlug: Record<string, { name: string; icon: string }[]> = {
    "cloud-infrastructure-devops": [
      { name: "Node.js", icon: "nodejs" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Terraform", icon: "terraform" },
      { name: "GitHub Actions", icon: "githubActions" },
    ],
    "distributed-real-time-task-queue": [
      { name: "Go", icon: "go" },
      { name: "React", icon: "react" },
      { name: "Kafka", icon: "kafka" },
      { name: "Redis", icon: "redis" },
      { name: "RabbitMQ", icon: "rabbitmq" },
      { name: "Kubernetes", icon: "kubernetes" },
    ],
    "project-management-system": [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "MySQL", icon: "mysql" },
      { name: "Tomcat", icon: "tomcat" },
      { name: "JavaScript", icon: "javascript" },
    ],
  };
  const projectDisplayOrder: Record<string, number> = {
    "cloud-infrastructure-devops": 1,
    "distributed-real-time-task-queue": 2,
  };

  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const orderA = projectDisplayOrder[a.slug] ?? Number.MAX_SAFE_INTEGER;
    const orderB = projectDisplayOrder[b.slug] ?? Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const projectTitleBySlug: Record<string, ReactNode> = {
    "cloud-infrastructure-devops": (
      <>
        Cloud Infrastructure
        <br />
        &amp; DevOps
      </>
    ),
    "project-management-system": (
      <>
        Project Management
        <br />
        System
      </>
    ),
  };

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/projects/${post.slug}`}
          images={post.metadata.images}
          title={projectTitleBySlug[post.slug] || post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          projectIcon={projectIconBySlug[post.slug] || "document"}
          projectSkills={projectSkillsBySlug[post.slug] || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
