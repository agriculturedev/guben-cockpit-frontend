// apiService.ts
const BASE_URL = "http://localhost:1337/api";

async function fetchProjects() {
  try {
    const response = await fetch(`${BASE_URL}/projekte`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

async function fetchProjectsPage() {
  try {
    const response = await fetch(`${BASE_URL}/project-view?populate=*`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export { fetchProjects, fetchProjectsPage };
