import React, { useEffect, useId, useMemo, useState } from 'react';

interface SriLankaMapProps {
  activeDay: number;
  onSelectDay: (day: number) => void;
}

type Coordinate = [number, number];

type Geometry =
  | {
      type: 'Polygon';
      coordinates: Coordinate[][];
    }
  | {
      type: 'MultiPolygon';
      coordinates: Coordinate[][][];
    };

type GeoData = {
  type: string;

  features?: {
    geometry: Geometry | null;
  }[];

  geometry?: Geometry;

  coordinates?: unknown;
};

// Recommended for production:
// Download sri-lanka.geojson into:
//
// public/maps/sri-lanka.geojson
//
// Then change this URL to:
//
// const GEOJSON_URL = '/maps/sri-lanka.geojson';

const GEOJSON_URL =
  'https://raw.githubusercontent.com/greencoder/geobatch/master/sri-lanka.geojson';


// Lightweight offline fallback used only if the remote GeoJSON cannot be reached.
// The primary map still uses the geographic GeoJSON boundary when available.
const FALLBACK_OUTLINE =
  'M52,22 C68,25 83,43 101,66 C124,96 154,122 174,153 C190,178 191,209 177,235 C163,260 137,276 108,278 C82,277 59,266 48,246 C37,227 35,204 39,181 C43,156 51,135 48,113 C45,94 35,79 38,61 C40,44 45,30 52,22 Z';

/* =========================================================
   12 DAY SRI LANKA EXPEDITION ROUTE
========================================================= */

const stops = [
  {
    day: 1,
    name: 'Colombo',
    lat: 6.9271,
    lng: 79.8612,
    region: 'Western Province',
  },

  {
    day: 2,
    name: 'Anuradhapura',
    lat: 8.3114,
    lng: 80.4037,
    region: 'North Central Province',
  },

  {
    day: 3,
    name: 'Polonnaruwa',
    lat: 7.9403,
    lng: 81.0188,
    region: 'North Central Province',
  },

  {
    day: 4,
    name: 'Sigiriya Rock',
    lat: 7.957,
    lng: 80.7603,
    region: 'Cultural Triangle',
  },

  {
    day: 5,
    name: 'Dambulla Caves',
    lat: 7.8567,
    lng: 80.6492,
    region: 'Cultural Triangle',
  },

  {
    day: 6,
    name: 'Sacred Kandy',
    lat: 7.2906,
    lng: 80.6337,
    region: 'Cultural Triangle',
  },

  {
    day: 7,
    name: 'Nuwara Eliya Tea Country',
    lat: 6.9497,
    lng: 80.7891,
    region: 'Central Highlands',
  },

  {
    day: 8,
    name: 'Scenic Rail / Ella',
    lat: 6.8667,
    lng: 81.0466,
    region: 'Central Highlands',
  },

  {
    day: 9,
    name: 'Yala Safari',
    lat: 6.3714,
    lng: 81.5185,
    region: 'Wildlife Sanctuaries',
  },

  {
    day: 10,
    name: 'Mirissa & Weligama',
    lat: 5.9483,
    lng: 80.4716,
    region: 'Southern Coast',
  },

  {
    day: 11,
    name: 'Galle Fort',
    lat: 6.026,
    lng: 80.217,
    region: 'Southern Coast',
  },

  {
    day: 12,
    name: 'Colombo & Farewell',
    lat: 6.9271,
    lng: 79.8612,
    region: 'Western Province',
  },
] as const;

/* =========================================================
   MAP PROJECTION
========================================================= */

// Converts real longitude + latitude into our SVG coordinate system.

const project = ([lng, lat]: Coordinate): Coordinate => [
  20 + ((lng - 79.5) / (82.1 - 79.5)) * 180,

  15 + ((9.9 - lat) / (9.9 - 5.85)) * 260,
];

/* =========================================================
   GEOJSON -> SVG PATH
========================================================= */

function geometryToPaths(geometry: Geometry): string[] {
  const polygons =
    geometry.type === 'Polygon'
      ? [geometry.coordinates]
      : geometry.coordinates;

  return polygons.map((rings) =>
    rings
      .map(
        (ring) =>
          ring
            .map((point, index) => {
              const [x, y] = project(point);

              return `${index === 0 ? 'M' : 'L'}${x.toFixed(
                2
              )},${y.toFixed(2)}`;
            })
            .join(' ') + ' Z'
      )
      .join(' ')
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export const SriLankaMap: React.FC<SriLankaMapProps> = ({
  activeDay,
  onSelectDay,
}) => {
  const [outlines, setOutlines] = useState<string[]>([]);

  const [mapError, setMapError] = useState(false);

  const patternId = useId().replace(/:/g, '');

  /* =======================================================
     LOAD REAL SRI LANKA GEOJSON
  ======================================================= */

  useEffect(() => {
    const controller = new AbortController();

    async function loadMap() {
      try {
        const response = await fetch(GEOJSON_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`GeoJSON HTTP ${response.status}`);
        }

        const geojson = (await response.json()) as GeoData;

        let geometries: Geometry[] = [];

        if (geojson.type === 'FeatureCollection') {
          geometries = (geojson.features ?? [])
            .map((feature) => feature.geometry)
            .filter(
              (value): value is Geometry =>
                !!value &&
                (value.type === 'Polygon' ||
                  value.type === 'MultiPolygon')
            );
        } else if (
          geojson.type === 'Feature' &&
          geojson.geometry
        ) {
          geometries = [geojson.geometry];
        } else if (
          geojson.type === 'Polygon' ||
          geojson.type === 'MultiPolygon'
        ) {
          geometries = [
            geojson as unknown as Geometry,
          ];
        }

        const paths =
          geometries.flatMap(geometryToPaths);

        if (paths.length === 0) {
          throw new Error(
            'GeoJSON has no polygon geometry'
          );
        }

        setOutlines(paths);

        setMapError(false);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(
            'Could not load Sri Lanka GeoJSON:',
            error
          );

          setMapError(true);
        }
      }
    }

    void loadMap();

    return () => controller.abort();
  }, []);

  /* =======================================================
     GENERATE TRAVEL ROUTE
  ======================================================= */

  const route = useMemo(
    () =>
      stops
        .map((stop) =>
          project([
            stop.lng,
            stop.lat,
          ]).join(',')
        )
        .join(' '),

    []
  );

  /* =======================================================
     ACTIVE STOP
  ======================================================= */

  const activeStop = stops.find(
    (stop) => stop.day === activeDay
  );

  return (
    <div className="relative flex h-[360px] w-full sm:h-[440px] lg:h-[480px] flex-col justify-between overflow-hidden rounded-2xl border border-[#1F4D3A] bg-[#0E281E] p-5 shadow-lg sm:p-6">
      {/* =================================================
          BACKGROUND GRID
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <svg
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={patternId}
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="#D4A359"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill={`url(#${patternId})`}
          />
        </svg>
      </div>

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-white">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-amber-300">
            Interactive Route Map
          </span>

          <h4 className="font-display text-lg font-medium text-white">
            Island Expedition Path
          </h4>
        </div>

        <div className="text-right text-[11px] text-stone-300">
          <span className="font-semibold text-amber-200">
            12-Day
          </span>{' '}
          Circuit
        </div>
      </div>

      {/* =================================================
          MAP
      ================================================= */}

      <div className="relative my-2 flex min-h-0 flex-1 items-center justify-center">
          <svg
            viewBox="0 0 220 290"
            preserveAspectRatio="xMidYMid meet"
            className="h-full w-full max-h-[260px] sm:max-h-[320px] drop-shadow-2xl"
            role="img"
            aria-label="Geographic map of Sri Lanka with twelve selectable trip stops"
          >
            {/* ============================================
                LOADING MESSAGE
            ============================================ */}

            {outlines.length === 0 && !mapError && (
              <text x="110" y="145" fill="#D4A359" fontSize="9" textAnchor="middle">
                Loading Sri Lanka map…
              </text>
            )}

            {/* ============================================
                REAL SRI LANKA LANDMASS / OFFLINE FALLBACK
            ============================================ */}

            {(outlines.length > 0 ? outlines : mapError ? [FALLBACK_OUTLINE] : []).map((path, index) => (
              <path
                key={index}
                d={path}
                fill="#153E2B"
                fillRule="evenodd"
                stroke="#36845A"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            ))}

            {/* ============================================
                TRAVEL ROUTE
            ============================================ */}

            {(outlines.length > 0 || mapError) && (
              <>
                <polyline
                  points={route}
                  fill="none"
                  stroke="#D4A359"
                  strokeWidth="1.9"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />

                {/* ========================================
                    CHECKPOINTS
                ======================================== */}

                {stops.map((stop) => {
                  const [baseX, baseY] = project([
                    stop.lng,
                    stop.lat,
                  ]);

                  // Day 1 and Day 12 are both Colombo. Offset only the farewell marker
                  // so both checkpoints remain selectable while the route still closes in Colombo.
                  const x = stop.day === 12 ? baseX + 7 : baseX;
                  const y = stop.day === 12 ? baseY + 5 : baseY;

                  const active =
                    stop.day === activeDay;

                  return (
                    <g
                      key={stop.day}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select day ${stop.day}: ${stop.name}`}
                      onClick={() =>
                        onSelectDay(stop.day)
                      }
                      onKeyDown={(event) => {
                        if (
                          event.key === 'Enter' ||
                          event.key === ' '
                        ) {
                          event.preventDefault();

                          onSelectDay(stop.day);
                        }
                      }}
                      className="cursor-pointer outline-none"
                    >
                      <title>
                        {`Day ${stop.day}: ${stop.name}`}
                      </title>

                      {/* Larger invisible click area */}

                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        fill="transparent"
                      />

                      {/* ==================================
                          ACTIVE PULSE
                      ================================== */}

                      {active && (
                        <circle
                          cx={x}
                          cy={y}
                          r="8"
                          fill="none"
                          stroke="#E6B15F"
                          strokeWidth="1.5"
                          opacity="0.8"
                        >
                          <animate
                            attributeName="r"
                            values="6;12;6"
                            dur="2.2s"
                            repeatCount="indefinite"
                          />

                          <animate
                            attributeName="opacity"
                            values="0.8;0;0.8"
                            dur="2.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      {/* ==================================
                          MARKER
                      ================================== */}

                      <circle
                        cx={x}
                        cy={y}
                        r={active ? 6 : 4.5}
                        fill={
                          active
                            ? '#C46835'
                            : '#FAF8F5'
                        }
                        stroke={
                          active
                            ? '#FFFFFF'
                            : '#0F2E22'
                        }
                        strokeWidth="1.2"
                      />

                      {/* ==================================
                          DAY NUMBER
                      ================================== */}

                      <text
                        x={x}
                        y={y + 0.35}
                        fontSize={
                          stop.day >= 10
                            ? '4.1'
                            : '5.4'
                        }
                        fontWeight="bold"
                        fill={
                          active
                            ? '#FFFFFF'
                            : '#0E281E'
                        }
                        textAnchor="middle"
                        dominantBaseline="middle"
                        pointerEvents="none"
                      >
                        {stop.day}
                      </text>
                    </g>
                  );
                })}
              </>
            )}
            {mapError && (
              <text x="110" y="286" fill="#F5D08A" fontSize="5" textAnchor="middle" opacity="0.8">
                Offline outline fallback
              </text>
            )}
          </svg>
      </div>

      {/* =================================================
          ACTIVE DAY INFORMATION
      ================================================= */}

      <div className="relative z-10 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/40 p-2.5 text-xs text-white backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#C46835]" />

          <span className="truncate font-semibold text-amber-200">
            {activeStop
              ? `Day ${activeStop.day}: ${activeStop.name}`
              : 'Select a checkpoint'}
          </span>
        </div>

        <span className="shrink-0 text-[10px] text-stone-300 sm:text-[11px]">
          {activeStop?.region}
        </span>
      </div>
    </div>
  );
};