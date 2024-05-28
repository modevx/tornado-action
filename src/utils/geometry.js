import turfRewind from "@turf/rewind";
import { geoAlbers, geoPath } from "d3";
import * as topojsonClient from "topojson-client";
import AlbersMapTopoJSON from "json/topojson-albers-map.json";

const albersProjection = geoAlbers();
export const albersGeoPath = geoPath(albersProjection);
export const createWatchAlertGeometry = (alert) => {
  const affectedCountyIds = alert.properties.geocode.SAME;
  const watchGeometry = topojsonClient.merge(
    AlbersMapTopoJSON,
    // prepend '0' to D3 topoJSON county ids to match NWS county IDs
    AlbersMapTopoJSON.objects.counties.geometries.filter((geometry) => {
      const countyID = `0${geometry.id}`;
      return affectedCountyIds.includes(countyID);
    })
  );
  return watchGeometry;
};
export const reverseAlbersGeoPath = (geometry) => {
  return albersGeoPath(turfRewind(geometry, { reverse: true }));
};
