import Extent from "@arcgis/core/geometry/Extent";
const settings = {
  userBase: "External",
  codeBase: "PROD",
  appName: "COSMOS",
  version: "4.5.1",
  serverName: "cosmos.surrey.ca",
  geometryServerUrl:
    "https://gisservices.surrey.ca/arcgis/rest/services/Utilities/Geometry/GeometryServer",
  currentYearAerialLayerName: "Aerial Photo April 2021",
  aerialStreetViewTools: "Aerial,StreetView,Pictomerty",
  pictometryToolurl: "https://cosmos.surrey.ca/external/Pictometry/PictoViewer.aspx?",
  streetViewImageurl: {
    url: "https://maps.googleapis.com/maps/api/js?",
    key: "&key=AIzaSyDxqfLipfOy0NP3-j9PzytCtZ5-F4_cA0E",
  },
  lotOutlineLayerName: "Lots (Outline)",
  lotYellowLayerName: "Lots (Yellow)",
  lotLayerGroup: ["Lots (Yellow)", "Lots (Outline)"],
  lotOnAeriaLayerName: "Lot Ownership on Aerial",
  addressBlack: "Addresses (black)",
  addressYellow: "Addresses (yellow)",
  building: "Buildings",
  roadSurface: "Road Surface",
  specimenTrees: "Park Specimen Trees",
  trafficCamerasLayerName: "Traffic Cameras",
  trafficCameraImageField: "IMAGE",
  trafficCameraNameField: "CAMERA_NAME",
  fishClassificationFolder: "Land Use / Environment",
  identifyFieldAlias: "LOT ID",
  identifyField: "MSLINK",
  identifyFieldAliasWR: "Legal ID",
  identifyFieldWR: "Legal_Id",
  addressListMaxNumber: "50",
  whiteRockurl: "https://cosmos.surrey.ca/external/WROMS/",
  whiteRockBoundary: "511294.066,5427706.736,516141.034,5430935.986",
  surreyBoundary: "504000, 5425000, 524000, 5455000",
  surreyBoundaryLatLon: "-123.4789, 48.627, -122.004, 49.496,",
  startingExtent: new Extent({
    xmin: 505e3,
    ymin: 5425e3,
    xmax: 524e3,
    ymax: 5455e3,
    spatialReference: { wkid: 26910 },
  }),
  searchMarkerSymbols: {
    point: {
      type: "simple-marker",
      style: "diamond",
      color: [255, 0, 0],
      size: "12px",
      outline: {
        color: [255, 255, 0],
        width: 1,
      },
    },
    polyline: {
      type: "simple-line",
      color: [255, 105, 105],
      width: "4px",
      style: "dash",
    },
    polygon: {
      type: "simple-fill",
      color: [227, 127, 28, 0.1],
      style: "solid",
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    },
  },
  ignoreIdentifyServices: ["AerialImages", "Annotation_Dimensions", "CosGraphicsLayer"],
  ignoreIdentifyLayers: [
    "Road Names",
    "Building Shadow",
    "Aerial Photo",
    "(labels)",
    "Intersection Search",
    "Address Search",
    "Road Surface",
  ],
  legendDisabledLayers: ["Building Shadow", "Address Search", "Road Names", "Intersection Search"],
  dataServiceUrl: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc",
  mapServices: [
    {
      id: "BaseMap",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Base_Map/MapServer/",
      type: "Dynamic",
      baseMapService: true,
    },
    {
      id: "AerialImages",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/AerialImages/MapServer/",
      type: "Dynamic",
      baseMapService: true,
    },
    {
      id: "Lots",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Lots/MapServer/",
      VisibleLayers: "",
      type: "Dynamic",
      baseMapService: true,
    },
    {
      id: "Buildings",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Buildings/MapServer/",
      LegendHideLayers: "Building Shadow",
      type: "Dynamic",
    },
    {
      id: "SecondaryPlans",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/SecondaryPlans/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Planning",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Planning/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Elevation",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Elevation/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Miscellaneous",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Miscellaneous/MapServer/",
      VisibleLayers: "",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Legal",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Legal/MapServer/",
      LegendHideLayers: "Address Search",
      type: "Dynamic",
    },
    {
      id: "Transportation",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Transportation/MapServer/",
      LegendHideLayers: "Road Names,Intersection Search",
      type: "Dynamic",
    },
    {
      id: "Parks",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Parks/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Infrastructure",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Infrastructure/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Sanitary",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Sanitary/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Drainage",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Drainage/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Water",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Water/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "DistrictEnergy",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/DistrictEnergy/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Safety",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Public/Safety/MapServer/",
      LegendHideLayers: "",
      type: "Dynamic",
    },
    {
      id: "Annotation_Dimensions",
      url: "https://tstgissrvcs.surrey.ca/arcgis/rest/services/Annotation_Dimensions/MapServer/",
      type: "Dynamic",
    },
  ],
};

export const dataServices = {
  addresses: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAddressData",
  },
  property: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetPropertyDataAll",
  },
  assessment: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAssessmentData",
    headings: ["Year", "Gross Land", "Gross Improvements", "Gross Assessments"],
  },
  servicing: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetServicetData",
    headings: ["Service", "Start Date", "End Date"],
  },
  ocp: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetNCPData",
    headings: ["Land Use", "% of Lot"],
  },
  zoning: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetZoningData",
    headings: ["Zone", "% of Lot", "Zone Bylaws", "Zone LUC"],
  },
  secondaryPlan: {
    url: "https://tstcosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetSecondaryPlanData",
    headings: ["Land Use", "% of Lot", "Plan Area", "Plan Type"],
  },
};

export const addressDetails = [
  {
    id: "property",
    label: "Property Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetPropertyDataAll",
    tableHeadings: [],
    lookupValue: "propertyNumber",
  },
  {
    id: "assessment",
    label: "Assessment Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetAssessmentData",
    tableHeadings: ["Year", "Gross Land", "Gross Improvements", "Gross Assessments"],
    lookupValue: "propertyNumber",
  },
  {
    id: "servicing",
    label: "Servicing Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetServicetData",
    tableHeadings: ["Service", "Start Date", "End Date"],
    lookupValue: "propertyNumber",
  },
  {
    id: "ocp",
    label: "OCP Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetNCPData",
    tableHeadings: ["Land Use", "% of Lot"],
    lookupValue: "mslink",
  },
  {
    id: "zoning",
    label: "Zoning Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetZoningData",
    tableHeadings: ["Zone", "% of Lot", "Zone Bylaws", "Zone LUC"],
    lookupValue: "mslink",
  },
  {
    id: "secondaryPlan",
    label: "Secondary Plan Details",
    url: "https://cosmos.surrey.ca/external/COSMOSWebServices/cosmos.svc/GetSecondaryPlanData",
    tableHeadings: ["Land Use", "% of Lot", "Plan Area", "Plan Type"],
    lookupValue: "mslink",
  },
];

export const defaultOrthoImage = "Aerial Photo April 2021";

export default settings;
