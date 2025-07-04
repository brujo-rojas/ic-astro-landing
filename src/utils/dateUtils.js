import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

/**
 * Formatea una fecha en formato legible en español
 * @param {Date|string} date La fecha a formatear
 * @param {string} formatStr El formato (por defecto: 'd 'de' MMMM 'de' yyyy')
 * @returns {string}
 */
export function formatDate(date, formatStr = "d 'de' MMMM 'de' yyyy") {
  if (!date) return "";

  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return format(dateObj, formatStr, { locale: es });
}

/**
 * Verifica si una fecha es en el futuro
 * @param {Date|string} date La fecha a verificar
 * @returns {boolean} True si la fecha es en el futuro
 */
export function isFutureDate(date) {
  if (!date) return false;

  // Si la fecha es un string, parsearla
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return dateObj > new Date();
}

/**
 * Verifica si una fecha es en el pasado
 * @param {Date|string} date La fecha a verificar
 * @returns {boolean} True si la fecha es en el pasado
 */
export function isPastDate(date) {
  if (!date) return false;

  // Si la fecha es un string, parsearla
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return dateObj < new Date();
}
