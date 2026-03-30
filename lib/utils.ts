import { SCRIPT_URL } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getScript = (domain: string, siteId: string) => {
  return `<script data-domain="${domain}"
data-site-id="${siteId}" src="${SCRIPT_URL}" defer></script>`;
};
