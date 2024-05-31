// apiService.ts
export const BASE_URL = "https://admin.guben.elie.de";
const BASE_API_URL = `${BASE_URL}/api`;

async function fetchProjects() {
  try {
    const response = await fetch(`${BASE_API_URL}/projekte`);
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
    const response = await fetch(
      `${BASE_API_URL}/project-view?populate=InfoFromAdmin,projects,projects.Image`
    );
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
