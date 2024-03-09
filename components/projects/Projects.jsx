"use client";
import ProjectsItem from "./ProjectsItem";
import styles from "./Projects.module.scss";
import { useState } from "react";
import Search from "../ui/Search";
import Title from "../ui/Title";

const Projects = ({ projects }) => {
  const projectsWithCorrectDate = projects.map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredByContentProjects, setFilteredProjects] = useState(
    projectsWithCorrectDate
  );
  const [selectedDate, setSelectedDate] = useState("");

  const filteredDateProjects =
    selectedDate === ""
      ? projectsWithCorrectDate
      : projectsWithCorrectDate.filter((item) => {
          return item.date.getFullYear().toString() === selectedDate.toString();
        });

  const filtered = filteredByContentProjects.filter((projectsObject) => {
    return filteredDateProjects.some(
      (element) => JSON.stringify(element) === JSON.stringify(projectsObject)
    );
  });
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      const filteredByContent = projectsWithCorrectDate.filter((item) => {
        return (
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.text.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredProjects(filteredByContent);
    }, 300);
  };

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDate(selectedValue === "" ? "" : parseInt(selectedValue));
  };

  const dates = projectsWithCorrectDate.map((projects) => {
    return projects.date.getFullYear().toString();
  });

  const filterDates = (dates) => {
    const uniq = new Set(dates);
    return [...uniq];
  };
  const filteredDates = filterDates(dates);
  return (
    <section className={styles.projects}>
      <Title isCenter>Проєкти</Title>
      <Search
        handleDateChange={handleDateChange}
        filteredDates={filteredDates}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        isProject
      />
      {filtered.length > 0 ? (
        <ul className={styles.list}>
          {filtered
            .sort((projectsA, projectsB) => projectsB.date - projectsA.date)
            .map((projects) => (
              <ProjectsItem
                key={projects["_id"]}
                id={projects["_id"]}
                title={projects.title}
                image={projects.image}
                text={projects.text}
                date={projects.date}
              />
            ))}
        </ul>
      ) : (
        <div className={styles.error}>Проєкти не знайдено</div>
      )}
    </section>
  );
};

export default Projects;
