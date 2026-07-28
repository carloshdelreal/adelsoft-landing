import JsonData from "@/data/data.json";
import { processDataWithAssets } from "@/utils/assetResolver";

export const landingPageData = processDataWithAssets(JsonData);
