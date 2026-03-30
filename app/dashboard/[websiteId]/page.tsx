"use client";

import { DateRangePreset } from "@/types/date-preset";
import {
  endOfDay,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { AnalyticsChart } from "../_common/analytics-chart";
import { Devices } from "../_common/devices";
import { Locations } from "../_common/locations";
import { MainTopBar } from "../_common/main-top-bar";
import { TopPages } from "../_common/top-pages";
import { TopSources } from "../_common/top-sources";

function getDateRangeForPreset(presetKey: DateRangePreset): DateRange {
  const now = new Date();
  const to = endOfDay(now);
  let from: Date;

  switch (presetKey) {
    case "today":
      from = startOfDay(now);
      break;
    case "7days":
      from = startOfDay(subDays(now, 6));
      break;
    case "30days":
      from = startOfDay(subDays(now, 29));
      break;
    case "monthToDate":
      from = startOfMonth(now);
      break;
    case "yearToDate":
      from = startOfYear(now);
      break;
    case "last12Months":
      from = startOfMonth(subMonths(now, 12));
      break;
    default:
      from = startOfMonth(now);
      break;
  }

  return { from, to };
}

export default function WebsitePage() {
  const [dateRange, setDateRange] = useState<DateRange>(() =>
    getDateRangeForPreset("monthToDate"),
  );
  const [activePreset, setActivePreset] =
    useState<DateRangePreset>("monthToDate");

  const handlePresetSelect = (presetKey: DateRangePreset) => {
    setDateRange(getDateRangeForPreset(presetKey));
    setActivePreset(presetKey);
  };

  return (
    <div className="w-full flex flex-col space-y-1">
      <MainTopBar
        activePreset={activePreset}
        onPresetSelect={handlePresetSelect}
      />

      <div className="w-full space-y-4 pb-4">
        <AnalyticsChart dateRange={dateRange} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Locations dateRange={dateRange} />
          <Devices dateRange={dateRange} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TopSources dateRange={dateRange} />
          <TopPages dateRange={dateRange} />
        </div>
      </div>
    </div>
  );
}
