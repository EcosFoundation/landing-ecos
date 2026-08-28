import type { Route } from "next";

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

function segment(value: string | number) {
  return encodeURIComponent(String(value));
}

function queryString(query?: QueryParams) {
  if (!query) return "";

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value !== null && value !== undefined) {
      params.set(key, String(value));
    }
  }

  const search = params.toString();

  return search ? `?${search}` : "";
}

function route<T extends string>(path: T, query?: QueryParams) {
  return `${path}${queryString(query)}` as Route;
}

export const routes = {
  home: {
    page: () => route("/"),
  },

  payments: {
    page: () => route("/payments"),

    settingsPage: () => route("/payments/settings"),

    detailPage: ({ paymentId }: { paymentId: string | number }) =>
      route(`/payments/${segment(paymentId)}`),

    itemPage: ({
      paymentId,
      itemId,
    }: {
      paymentId: string | number;
      itemId: string | number;
    }) => route(`/payments/${segment(paymentId)}/items/${segment(itemId)}`),
  },

  users: {
    page: (query?: { tab?: string; page?: number }) => route("/users", query),

    detailPage: ({ userId }: { userId: string | number }) =>
      route(`/users/${segment(userId)}`),
  },
} as const;
