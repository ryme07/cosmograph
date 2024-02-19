import { performances } from "./performances";
import { dataTest } from "./dataTest";
import { edges } from "./edges";
import { data } from "./data.json";

export type Node = {
  id: string;
  color: string;
};

export type Link = {
  source: string;
  target: string;
};

export const nodes: any = Array.from(
  new Set([
    ...data.map((p: any) => `${p.FOLLOWED}`),
    ...data.map((p: any) => p.FOLLOWER),
  ])
).map((id) => ({
  id,
  color: "#4B5BBF",
}));

console.log(nodes);

export const links: any = data.map((p: any) => ({
  source: p.FOLLOWER,
  target: `${p.FOLLOWED}`,
}));

console.log(links);
