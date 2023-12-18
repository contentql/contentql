/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.6.2.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as footer1 from "../footer1.js";
import type * as hero from "../hero.js";
import type * as hero1 from "../hero1.js";
import type * as hero2 from "../hero2.js";
import type * as navbar1 from "../navbar1.js";
import type * as theme from "../theme.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  footer1: typeof footer1;
  hero: typeof hero;
  hero1: typeof hero1;
  hero2: typeof hero2;
  navbar1: typeof navbar1;
  theme: typeof theme;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
