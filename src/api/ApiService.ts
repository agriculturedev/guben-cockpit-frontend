// apiService.ts
import { Pagination } from "@/types/generic/Pagination";
import { PagedResult } from "@/types/generic/PagedResult";

import { Event } from "@/types/collection/Event";
import { Project } from "@/types/collection/Project";

export const BASE_URL = "https://admin.guben.elie.de";
// export const BASE_URL = "http://localhost:1337";

const BASE_API_URL = `${BASE_URL}/api`;

export async function fetchProjectsPage() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/project-view?populate=InfoFromAdmin,projects,projects.image,projects.contact`
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

export async function fetchProjects(
  pagination: Pagination
): Promise<PagedResult<Project>> {
  try {
    const response = await fetch(
      `${BASE_API_URL}/projects?pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export async function fetchHomePage() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/home-view?populate=tabs,tabs.cards,tabs.cards.button`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()).data;
  } catch (error) {
    console.error("Error fetching home page:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export async function fetchEvents(
  filters = "",
  pagination: Pagination
): Promise<PagedResult<Event>> {
  try {
    const response = await fetch(
      `${BASE_API_URL}/events?populate=categories${filters}&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`
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
    const jsonReponse = await response.json();
    return jsonReponse.data;
  } catch (error) {
    console.error("Error fetching event view:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${BASE_API_URL}/categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // re-throwing the error is important for the component to handle it
  }
}
