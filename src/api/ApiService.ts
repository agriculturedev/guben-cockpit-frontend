// apiService.ts
import { Pagination } from "@/types/generic/Pagination";
import { PagedResult } from "@/types/generic/PagedResult";

import { Event } from "@/types/collection/Event";

export const BASE_URL = "https://admin.guben.elie.de";
const BASE_API_URL = `${BASE_URL}/api`;

export async function fetchProjects() {
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

export async function fetchProjectsPage() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/project-view?populate=InfoFromAdmin,projects,projects.Image`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching project page:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export async function fetchEvents(
  filters = "",
  pagination: Pagination
): Promise<PagedResult<Event>> {
  try {
    const response = await fetch(
      `${BASE_API_URL}/events?populate=target_groups${filters}&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export async function fetchEventsPage() {
  try {
    const response = await fetch(`${BASE_API_URL}/event-view`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching event view:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}
