/* eslint-disable no-extend-native */
import { format, formatISO } from "date-fns";

declare global {
  interface Date {
    /**
     * converts it to ISO date format.
     */
    toIsoDate(): string;

    /**
     * converts it to ISO timestamp format.
     */
    toIsoTimestamp(): string;

    /**
     * converts it to ISO time only format.
     */
    toIsoTimeOnly(): string;

    /**
     * format to dd/MM/yyyy
     */
    formatDate(): string;

    /**
     * format to dd/MM/yyyy HH:mm or dd/MM/yyyy HH:mm:ss
     * @param includeSeconds boolean
     */
    formatDateTime(includeSeconds: boolean): string;

    /**
     * format to HH:mm or HH:mm:ss
     * @param includeSeconds boolean
     */
    formatTime(includeSeconds: boolean): string;

    /**
     * Add minutes
     * @param amountOfMinutes number
     */
    addMinutes(amountOfMinutes: number): Date;

    /**
     * Add hours
     * @param amountOfHours number
     */
    addHours(amountOfHours: number): Date;

    /**
     * Add days
     * @param amountOfDays number
     */
    addDays(amountOfDays: number): Date;

    /**
     * Add months
     * @param amountOfMonths number
     */
    addMonths(amountOfMonths: number): Date;

    /**
     * Add years
     * @param amountOfYears number
     */
    addYears(amountOfYears: number): Date;

    /**
     * Add weeks
     * @param amountOfWeeks number
     */
    addWeeks(amountOfWeeks: number): Date;
  }
}

Date.prototype.toIsoDate = function (): string {
  return formatISO(this, { representation: "date" });
};

Date.prototype.toIsoTimestamp = function (): string {
  return this.toISOString();
};

Date.prototype.toIsoTimeOnly = function (): string {
  return formatISO(this, { representation: "time" });
};

Date.prototype.formatDate = function (): string {
  return format(this, "dd/MM/yyyy");
};

Date.prototype.formatDateTime = function (includeSeconds: boolean): string {
  if (includeSeconds) {
    return format(this, "dd/MM/yyyy HH:mm:ss");
  }
  return format(this, "dd/MM/yyyy HH:mm");
};

Date.prototype.formatTime = function (includeSeconds: boolean): string {
  if (includeSeconds) {
    return format(this, "HH:mm:ss");
  }
  return format(this, "HH:mm");
};

Date.prototype.addMinutes = function (amountOfMinutes: number): Date {
  this.setMinutes(this.getMinutes() + amountOfMinutes);
  return this;
};

Date.prototype.addHours = function (amountOfHours: number): Date {
  this.setHours(this.getHours() + amountOfHours);
  return this;
};

Date.prototype.addDays = function (amountOfDays: number): Date {
  this.setDate(this.getDate() + amountOfDays);
  return this;
};

Date.prototype.addMonths = function (amountOfMonths: number): Date {
  this.setMonth(this.getMonth() + amountOfMonths);
  return this;
};

Date.prototype.addYears = function (amountOfYears: number): Date {
  this.setFullYear(this.getFullYear() + amountOfYears);
  return this;
};

Date.prototype.addWeeks = function (amountOfWeeks: number): Date {
  this.addDays(amountOfWeeks * 7);
  return this;
};
