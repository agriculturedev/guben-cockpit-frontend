// apiService.ts
const BASE_URL = "https://admin.guben.elie.de/api";

async function fetchProjects() {
  try {
    const response = await fetch(`${BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export { fetchProjects };
